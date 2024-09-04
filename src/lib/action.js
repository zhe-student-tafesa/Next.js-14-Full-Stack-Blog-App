'use server' // in Action
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const createPost = async (formData) => {
    'use server'
    // const title = formData.get('title');
    // const desc = formData.get('desc');
    // const userId = formData.get('userId');
    // const slug = formData.get('slug');

    // Or we can use {}
    const { title, desc, userId, slug } = Object.fromEntries(formData);
    connectToDB()
    try {
        const newPost = new Post({
            title: title,
            desc: desc,
            userId: userId,
            slug
        })
        await newPost.save()
        console.log('Save to DB');
        // like SetState  // like SetState
        revalidatePath('/blog')
    } catch (error) {
        console.log(error);
    }

    //console.log(title, desc, userId, slug );
}

export const deletePost = async (formData) => {
    'use server'
    const { id } = Object.fromEntries(formData);
    connectToDB()
    try {
        await Post.findByIdAndDelete(id)
        console.log('Delete from DB');
        revalidatePath('/blog')
    } catch (error) {
        console.log(error);
    }
}

export const handleLogin = async () => {
    'use server' // in Action
    await signIn("github")
}

export const handleLogout = async () => {
    await signOut()
}

export const handleRegister = async (previousState, formData) => {
    const { username, email, password, passwordrepeat, img } = Object.fromEntries(formData);
    if (password != passwordrepeat) {
        return { error: 'Password not match' }
    }
    try {
        connectToDB()
        // if existed user
        const user = await User.findOne({ username: username })
        if (user) {
            return { error: 'Account already  exist' };
        }
        // Register
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username: username,
            password: hashedPassword,
            img,
            email,
        });
        await newUser.save();
        revalidatePath("/blog");
        revalidatePath("/admin");
        return { success: true }
    } catch (error) {
        console.log(error)
        return { error: 'Register failed' }
    }

}


export const handleLoginWithCredentials = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        /// Call: signIn with credentials
        /// signIn with credentials
        /// signIn with credentials
        await signIn('credentials', { username, password });
    } catch (error) {
        // console.log("10.21", error)
        if (!error.message.includes("NEXT_REDIRECT")) {
            return { error: 'Login failed' }
        }
        //  when 'Error: NEXT_REDIRECT'
        throw error
    }

}

export const createUser = async (formData) => {
    'use server'

    const { username, email, password, passwordrepeat, img, isAdmin } = Object.fromEntries(formData);
    if (password != passwordrepeat) {
        return { error: 'Password not match' }
    }
    try {
        connectToDB()
        // if existed user
        const user = await User.findOne({ username: username })
        if (user) {
            return { error: 'Account already  exist' };
        }
        // create
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username: username,
            password: hashedPassword,
            img,
            email,
            isAdmin,
        });
        await newUser.save();
        revalidatePath("/admin");
        return { success: true }
    } catch (error) {
        console.log(error)
        return { error: 'Create new user failed' }
    }
}

export const deleteUser = async (formData) => {
    'use server'
    const { id } = Object.fromEntries(formData);
    connectToDB()
    try {
        // delete user'post
        await Post.deleteMany({userId: id})

        await User.findByIdAndDelete(id)
        console.log('Delete user from DB');
        revalidatePath('/admin')
    } catch (error) {
        console.log(error);
    }
}

