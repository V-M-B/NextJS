import {notFound} from "next/navigation";

export default async function ReviewDetails({params}:{params:{reviewId:string, productId:string}}) {
    const {productId, reviewId} = await params;
    if (parseInt(reviewId) > 1000) {
        notFound();
        
    }
    return (
        <div>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </div>
    );
}