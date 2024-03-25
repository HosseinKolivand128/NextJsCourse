
export default function names({params}:{params:{name: string, profile:string}}) {
// console.log(params);

    return (
        <h1>
            Profile {params.profile} about account with name: {params.name}
        </h1>
    )
}