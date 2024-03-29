"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct(){
    const router=useRouter();
    const handleClick=()=>{
        console.log("product ordered");
        router.push("/");
    }
    return(<>
    <h1>order product</h1>
    <button onClick={handleClick}>
        Order
    </button>
    </>)

}
