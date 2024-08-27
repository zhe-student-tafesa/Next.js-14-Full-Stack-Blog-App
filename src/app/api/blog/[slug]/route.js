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