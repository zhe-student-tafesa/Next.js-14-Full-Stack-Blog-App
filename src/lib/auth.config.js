

export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        // Begin: add user info inside this session 
        /// update token
        async jwt({ token, user }) {
            // because in auth.config.js: 'user' in jwt is undefine, so add this
            token.id = token.sub;
            token.isAdmin = token.email === process.env.ADMIN_ACCOUNT ? true : false;
            return token;
        },
        /// use updated token: update session
        async session({ session, token }) {
            if (token) {

                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            // console.log("session is11: ", session)
            return session;
        },
        // End: add user info inside this session 
        authorized({ auth, request }) {
            console.log("auth1017: ", auth)
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin')
            const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog')
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
            ///Only admin can reach admin page
            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            ///Only authenticated user: can reach blog page
            if (isOnBlogPage && !user) {
                return false;
            }

            ///Only UNauthenticated can reach login page
            // nav authenticated user to Home
            if (isOnLoginPage && user) {
                return Response.redirect(new URL('/', request.nextUrl));
            }

            return true
        }
    }
}