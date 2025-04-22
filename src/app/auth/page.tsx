'use client';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function AuthForm() {
    const [loginVariant, setLoginVariant] = useState<'LOGIN' | 'REGISTER'>('REGISTER');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { status } = useSession();

    const toggleSubmit = useCallback(() => {
        setLoginVariant((prev) => (prev === 'REGISTER' ? 'LOGIN' : 'REGISTER'));
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [status, router]);

    const onSubmit = async (data: { name: string; email: string; password: string }) => {
        setIsLoading(true);
        try {
            if (loginVariant === 'REGISTER') {
                await axios.post('/api/auth/register', data);

                const signInResponse = await signIn('credentials', {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                });

                if (signInResponse?.error) {
                    alert('Невірні дані для входу');
                } else {
                    router.push('/');
                }
            } else {
                const signInResponse = await signIn('credentials', {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                });

                if (signInResponse?.error) {
                    alert('Невірні дані для входу');
                } else {
                    router.push('/');
                }
            }
        } catch (err) {
            console.error(err);
            alert('Сталася помилка');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                {loginVariant === 'REGISTER' && (
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="mt-1 block w-full px-3 py-2 border rounded-md"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                )}

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-4 py-2 bg-[#AF367B] text-white rounded "
                >
                    {loginVariant === 'LOGIN' ? 'Sign In' : 'Register'}
                </button>

                <div className="mt-4 text-center">
                    <button type="button" onClick={toggleSubmit} className="text-sm text-black hover:underline">
                        {loginVariant === 'LOGIN' ? 'Create an account' : 'Already have an account? Sign In'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;
