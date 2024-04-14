import Card from "@/components/Card";
import Link from "next/link";

export default function Archived (){
    return(
        <>
            <Card>
                <div>Archived</div>
                <Link href="/test-parallel">Notifications</Link>
            </Card>
        </>
    )
}