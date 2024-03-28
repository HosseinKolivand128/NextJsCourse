import { Metadata } from "next"

type Prop={
    params:{
        productId:string
    }
}
export const generateMetadata=async({params}:Prop):Promise<Metadata>=>{
    const title=await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Iphone ${params.productId}`)
        },100)
    })
    return{
        title:`Product ${title}`
    }
}

export default function Product({params}:Prop) {

    
    return (
        <h1>
            Details about product {params.productId}
        </h1>
    )
}