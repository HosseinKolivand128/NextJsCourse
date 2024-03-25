
export default function Profile({params}:{params:{profile: string}}) {
// console.log(params);

    return (
        <h1>
            profile about account number {params.profile}
        </h1>
    )
}