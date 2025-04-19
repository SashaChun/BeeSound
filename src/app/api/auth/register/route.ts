import { NextResponse } from 'next/server'
import {prisma} from "../../../../../lib/prisma";
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, name, password } = body

        if (!email || !name || !password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            },
        })

        return NextResponse.json(user, { status: 201 })
    } catch (error) {
        console.error('Error during registration:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
