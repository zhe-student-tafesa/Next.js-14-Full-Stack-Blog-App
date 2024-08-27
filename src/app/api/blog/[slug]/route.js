import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
    const { slug } = params;

    try {
        connectToDB()
        //            await  
        await Post.findOneAndDelete({ slug: slug });

        return NextResponse.json("Post deleted successfully");  //  return 
    } catch (error) {
        console.log(error)
        throw new Error('error in delete Post')
    }
}


export const GET = async (request, { params }) => {
    const { slug } = params;
    try {
        connectToDB()
        //            await  
        const post = await Post.findOne({ slug: slug });
        // console.log("posts:  ", posts)
        return NextResponse.json(post);  //  return 
    } catch (error) {
        console.log(error)
        throw new Error('error in fetch Posts')
    }
}