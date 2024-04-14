import Card from "@/components/Card";
import Link from "next/link";


export default function c1(){
    return(
        <>
            <Card>
                <div>Notifications</div>
                <Link href="/test-parallel/archived">Archived</Link>
            </Card>
        </>
    )
}