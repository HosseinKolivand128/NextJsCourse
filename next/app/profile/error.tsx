"use client";
import "./styles.css"
export default function ErrorBoundary({error}:{error:Error}){
    return <h1 className="Error">{error.message}</h1>
}