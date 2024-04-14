import Card from "@/components/Card";
import Link from "next/link";

export default function archived(){
    return(
        <>
            <Card>
                <div>Archived</div>
                <Link href="/complex-dashboard">Default</Link>
            </Card>
        </>
    )
}