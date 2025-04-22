import { getCurrentUser } from "./getCurrentUser";
import { prisma } from "../lib/prisma";

export async function getUserId() {
    const current = await getCurrentUser();

    if (!current || !current.email) {
       return '';
    }

    const user = await prisma.user.findUnique({
        where: { email: current.email },
        select: { id: true },
    });

    return user?.id;
}
