import React from "react";
export default function Card({children}:{children:React.ReactNode}){
    const styles={
    padding:"100px",
    margin:"10px",
    boxShadow:"0 5px 8px 0 rgba(250,250,252,0.2)",
    border:"1px solid #ddd",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

    return <div style={styles}>{children}</div>
}