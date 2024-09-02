

export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        // Begin: add user info inside this session 
        /// update token
        async jwt({ token, user }) {
            console.log("user000: ", user)
            if(user){
                console.log("user123: ", user)
                token.id = user.id;
                token.isAdmin= user.isAdmin;
            }
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