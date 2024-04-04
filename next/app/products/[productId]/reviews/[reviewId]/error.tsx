//! handle errors in nested routes
//! move the file to the products folder and see the changes
"use client";
import "./styles.css"
export default function ErrorBoundary({error,reset}:{error:Error,reset:()=>void}){
    return(
        <>
<h1 className="Error">{error.message}</h1>
<button onClick={reset}>try again</button>
        </>
    )
}