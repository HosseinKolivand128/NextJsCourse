import { text } from "stream/consumers";
import { comments } from "./data"
comments
export async function GET() {
    return Response.json(comments);
}
export async function POST(request:Request) {
    const comment=await request.json();
    console.log(comment);
    
    const newComment={
        id:comments.length+1,
        text:comment.text,
    }
    comments.push(newComment)
    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"application/json"

        },
        status:201
    });
}

