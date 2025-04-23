'use client';

import Image from "next/image";
import React from "react";
import { FC } from "react";
import DeleteButton from "@/app/cart/components/deleteButton";
import Quantity from "@/app/cart/components/Quantity";

type CartItemType = {
    item: {
        id: string;
        imageUrl: string;
        name: string;
        price: number;
        quantity: number;
    }
}

const CartItem: FC<CartItemType> = ({ item }) => {
    return (
        <div key={item.id} className="flex flex-row items-center justify-between bg-white p-4 rounded-lg ">
            <div className="flex flex-row items-center space-x-4">
                <Image src={item.imageUrl} alt={item.name} width={100} height={100} className="w-[100px] h-[100px] rounded-lg" />
                <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">Price: ${item.price}</p>
                     <Quantity quantitys={item.quantity} />
                    <DeleteButton id={item.id} />
                </div>
            </div>
        </div>
    );
}

export default CartItem;
