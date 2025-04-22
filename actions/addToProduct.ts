'use server';

import { prisma } from '../lib/prisma';


export async function addToProduct(id: string, data: { name: string, price: number, quantity: number }) {
    console.log('User ID:', id);
    if (!id) {
        throw new Error('User not found');
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
            imageUrl: 'https://example.com/beats.png', // Ви можете динамічно отримати URL
        },
    });

    return item;
}
