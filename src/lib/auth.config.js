

export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        // Begin: add user info inside this session 
        /// update token
        async jwt({ token, user }) {
            token.id = token.sub;
            token.isAdmin = token.email === process.env.ADMIN_ACCOUNT? true : false;
            return token;
        },
        /// use updated token: update session
        async session({ session, token }) {
            if(token){
                console.log("token123: ", token)
                session.user.id = token.id;
                session.user.isAdmin= token.isAdmin;
            }
            return session;
        },
        // End: add user info inside this session 
        authorized({ auth, request }) {
            console.log("auth: ", auth)
            return true
        }
    }
}