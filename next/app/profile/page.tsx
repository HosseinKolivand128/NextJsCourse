export const metadata={
    title:"profiles"
}
export default function Profile(){
    const rndm=Math.floor(Math.random()*3);
    if (rndm===1) {
        throw new Error("Error in loading profile")
    }
    return (
        <h1>
            Profile page
        </h1>
    )
}