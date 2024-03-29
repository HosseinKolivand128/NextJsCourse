import Link from "next/link";

export default function ProductList(){
    const productId=15;
    return (
        <>
        <h1>
            Product List
        </h1>
        <h2><Link href="/products/1">Product 1</Link></h2>
        <h2><Link href="/products/2">Product 2</Link></h2>
        <h2><Link href="/products/3" replace>Product 3</Link></h2>
        {/* replace will remove the last page from the history and replace the current page instead of that(search more) */}

        <h2>
            <Link href={`/products/${productId}`} >
            {`Product ${productId}`}
            </Link>
        </h2>


        </>
    )
}