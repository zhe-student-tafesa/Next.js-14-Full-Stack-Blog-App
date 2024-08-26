import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./utils";

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