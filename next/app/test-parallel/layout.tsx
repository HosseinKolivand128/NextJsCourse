// import c1 from "./@c1"
// import c2 from "./@c2"
// import c3 from "./@c3"
export default function Test({children,c1,c2,c3}:{children:React.ReactNode,c1:React.ReactNode,c2:React.ReactNode,c3:React.ReactNode}){
return(<>
    <div>
        {children}
    </div>
    <div>
    <div>
        {c1}
        {c2}
    </div>
        {c3}
    </div>
</>)
}