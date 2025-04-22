import React from "react";
import dots from '../asets/dots.png'
import Image from "next/image";
import {getCart} from "../../../actions/getCart";
import CartItem from "@/app/cart/components/CartItem";

export default async function Cart() {
    const cart = await getCart();
    console.log("Cart", cart);
    return (
        <div className="px-[60px] mt-10 py-[40px] grid grid-col-2 bg-white px-4">
            <div className="w-full  grid grid-col-2 bg-white px-4  bg-white  rounded-2xl p-6">
                <div className="text-sm text-gray-500 mb-4 cursor-pointer">← Back To Shopping</div>
                <div className={'grid grid-cols-2  gap-4'}>
                    {
                        cart && cart.cart?.items.map((item: any) => (
                           <CartItem item={item} key={item.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
