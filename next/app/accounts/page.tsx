
export default function Account({params}:{params:{accounts: number}}) {

    return (
        <h1>
            Account number {params.accounts}
        </h1>
    )
}