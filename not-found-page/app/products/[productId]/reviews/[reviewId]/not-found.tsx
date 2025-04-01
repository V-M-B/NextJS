
"use client";
import { usePathname } from "next/navigation"
export default function NotFound() {
        const pathname = usePathname();
        const reviewId = pathname?.split('/')[4];
        const productId = pathname?.split('/')[2];

    return (
        <>
            <h2>Review {reviewId} for product {productId} Not Found </h2>

        </>
    )
}
