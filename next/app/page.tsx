import Link from "next/link"
import "./page.module.css"
export default function Home(){
  return (
    <>
    <h1>
      Welcome home!
    </h1>
    <Link href="/about">
      about
    </Link>
    <Link href="/products">
      products
    </Link>
    </>
  )
}