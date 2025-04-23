import React from "react";
import dots from '../asets/dots.png';
import Image from "next/image";
import { getCart } from "../../../actions/getCart";
import CartItem from "@/app/cart/components/CartItem";
import Link from "next/link";

export default async function Cart() {
    const cart = await getCart();
    console.log("Cart", cart);

    // Перевірка на порожній кошик
    if (!cart || !cart.cart?.items || cart.cart.items.length === 0) {
        return (
            <div className="px-[60px] mt-10 py-[40px] bg-white px-4">
                <div className="text-center text-lg text-gray-500">Your cart is empty.</div>
                <Link href="/product" className="block text-center text-[#AF367B] mt-4">
                    Back to shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="px-[60px] mt-10 py-[40px] bg-white px-4">
            <div className="w-full grid grid-col-2 bg-white px-4 rounded-2xl p-6">
                <Link href={'/'}>
                    <div className="text-sm text-gray-500 mb-4 cursor-pointer">← Back To Shopping</div>
                </Link>
                <div className={'grid grid-cols-2 gap-4'}>
                    {
                        cart.cart.items.map((item: any) => (
                            <CartItem item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
            <button className={'bg-[#AF367B] font-sans text-[18px] font-[500] text-white w-[150px] h-[50px] rounded-[10px] mt-5'}>
                Замовити
            </button>
        </div>
    );
}
