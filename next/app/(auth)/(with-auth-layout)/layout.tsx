"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../style.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname();
  const links=[
    {name:"login",path:"/login"},
    {name:"register",path:"/register"},
    {name:"forgot password",path:"/forgot-password"},
  ]
  return (
    <>
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
