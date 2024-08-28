import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDB } from "./utils"
import { User } from "./models"
// create a new GitHub App
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, }) {
            //console.log(user, account, profile)
            try {
                connectToDB()
                const user = await User.findOne({ username: profile.login })
                if (!user) {
                    const newUser = new User({
                        username: profile.login,
                        email: profile.email,
                        isAdmin: false,
                        img: profile.avatar_url,
                    });
                    await newUser.save();
                }
            } catch (error) {
                console.log(error)
                return false;
            }
            return true;
        }
    }
})