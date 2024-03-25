
export default function Profile({params}:{params:{profile: string}}) {
// console.log(params);

    return (
        <h1>
            profile about accounts number {params.profile}
        </h1>
    )
}