import { Post } from "@/lib/models"
import { connectToDB } from "@/lib/utils"
import { NextResponse } from "next/server";

export const GET = async (request) => {

    try {
        connectToDB()

        //            await  
        //            await  
        const posts = await Post.find();
        // console.log("posts:  ", posts)
        return NextResponse.json(posts);  //  return 
    } catch (error) {
        console.log(error)
        throw new Error('error in fetch Posts')
    }
}