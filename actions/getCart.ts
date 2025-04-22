import { prisma } from "../lib/prisma";
import { getUserId } from "./getUserId";

export async function getCart() {
    const current = await getUserId();

    console.log('Current user:', current);

    const cart = await prisma.cart.findUnique({
        where: { userId: current },
        include: { items: true },  // Підключаємо всі елементи кошика
    });

    if (!cart) {
        return '';
    }

    // Підрахунок кількості товарів у кошику
    const itemCount = await prisma.cartItem.count({
        where: {
            cartId: cart.id,  // Підраховуємо елементи для цього конкретного кошика
        }
    });

    console.log('Number of items in cart:', itemCount);  // Виводимо кількість товарів

    return { cart, itemCount };  // Повертаємо дані про кошик і кількість товарів
}
