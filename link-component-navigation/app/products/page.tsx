import Link from "next/link";

export default function ProductList() {
    const productno=99;
    return (
        <div>
            <h1>Product List</h1>
            <Link  href="/products/1">Product 1</Link>
            <Link href="/products/2">Product 2</Link>
            {/* //prduct 3 has replace which overrides the history */}
            <Link href="/products/3" replace>Product 3</Link>
            <Link href={`/products/${productno}`}>Product {productno}</Link>
        </div>
    );
}