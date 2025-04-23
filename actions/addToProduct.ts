'use server';

import { prisma } from '../lib/prisma';
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";


export async function addToProduct(id: string | undefined, data: { name: string,photo : string, price: number, quantity: number }) {
    console.log('User ID:', id);
    if (!id) {
        redirect('/auth');
    }

    const userId = id;

    let cart = await prisma.cart.findUnique({
        where: { userId },
    });

    if (!cart) {
        cart = await prisma.cart.create({
            data: { userId },
        });
    }

    const item = await prisma.cartItem.create({
        data: {
            cartId: cart.id,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imageUrl: data.photo, // Ви можете динамічно отримати URL
        },
    });

    revalidatePath('/cart');
    revalidatePath('/');
    return item;
}
