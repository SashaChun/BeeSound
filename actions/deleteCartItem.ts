// src/actions/deleteCartItem.ts
'use server';

import { prisma } from "../lib/prisma";

export async function deleteCartItem(id: string) {
    await prisma.cartItem.delete({
        where: {
            id: id, // Ensure that id is a string, not an object
        },
    });
}
