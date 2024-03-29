"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../style.css"
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input,setInput]=useState("");
  const pathname=usePathname();
  const links=[
    {name:"login",path:"/login"},
    {name:"register",path:"/register"},
    {name:"forgot password",path:"/forgot-password"},
  ]
  return (
    <>
    <input type="input" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <br />
    {
      links.map(element => {
      const isActive=pathname.startsWith(element.path)
      return (<Link href={element.path} key={element.name} className={isActive?"activeLink":"mr-4"}>{element.name}</Link>)
    })
    }
        {children}      
    </>

  );
}
