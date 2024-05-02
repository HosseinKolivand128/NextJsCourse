import { comments } from "../data"
comments
export async function GET(_request:Request,{params}:{params:{id:String}}) {
    const comment=comments.find((element)=>{
      return element.id===parseInt(params.id);
    })
    return Response.json(comment);
}
export async function PATCH(_request:Request,{params}:{params:{id:String}}) {
     const comment=comments.find((element)=>{
      return element.id===parseInt(params.id);
    })
    return Response.json(comment);
}