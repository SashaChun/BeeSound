import React from "react";
import dots from '../asets/dots.png'
import Image from "next/image";
import {getCart} from "../../../actions/getCart";

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
                            <div key={item.id} className="flex flex-row items-center justify-between bg-white p-4 rounded-lg ">
                                <div className="flex flex-row items-center space-x-4">
                                    <Image src={item.imageUrl} alt={item.name} width={100} height={100} className="w-[100px] h-[100px] rounded-lg" />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-500">Price: ${item.price}</p>
                                        <p className="text-gray-500">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
