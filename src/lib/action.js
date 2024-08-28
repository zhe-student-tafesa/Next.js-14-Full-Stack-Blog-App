'use server' // in Action
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs/dist/bcrypt";

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

export const handleRegister = async (formData) => {
    const { username, email, password, passwordrepeat, img } = Object.fromEntries(formData);
    if (password != passwordrepeat) {
        return 'password not match'
    }
    try {
        // if existed user
        const user = await User.findOne({ username: username })
        if (user) {
            return 'account alread exist';
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
        return 'register success'
    } catch (error) {
        console.log(error)
        return 'register failed'
    }

}