import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "./utils"
import { User } from "./models"
import bcrypt from "bcryptjs"
import { authConfig } from "./auth.config"
// create a new GitHub App
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({

    // use authConfig
    ...authConfig,
    // providers in this file will overwrite providers in authConfig
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        /// Config: signIn with credentials
        // Tell Auth: we use monggoDB, pass username and bcrypted password
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    // console.log("user333: ", user)
                    return user;
                } catch (error) {
                    return null
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, }) {
            //console.log(user, account, profile)
            if (account.provider === 'github') {
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
            }
            //add Error check!!
            if (user?.error) {
                return false;
            }
            return true;
        }
        // write authorized callback function
    },
    // use authConfig.callbacks  overwrite callbacks in this file
    ...authConfig.callbacks
})

const login = async (credentials) => {
    try {
        //Find  user
        connectToDB()
        const user = await User.findOne({ username: credentials.username })
        if (!user) {
            //throw new Error('account not exist')
            return { error: 'Account not exist' }
        }
        // compare
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        // console.log("isPasswordCorrect: ", isPasswordCorrect)
        if (!isPasswordCorrect) {
            //throw new Error('Credentials not correct')
            return { error: 'Credentials are not correct' }
        }
        return user;
    } catch (error) {
        console.log(error)
        throw new Error('Failed to login')
    }

}