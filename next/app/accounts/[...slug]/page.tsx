
export default function OtherAccounts({params}:{params:{slug: string[]}}) {

    return (
        <h1>
            Account name {params.slug[0]},Account number {params.slug[1]}
        </h1>
    )
}