"use client"
import { log } from "console";
import {useRouter} from "next/navigation";


export default function OrderProduct() {
    const router=useRouter();
    const handleclick=()=>{
        console.log("placing order");
        router.push("/  ");
        
    }

    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleclick}>Place Order</button>
        </>
    )
}
