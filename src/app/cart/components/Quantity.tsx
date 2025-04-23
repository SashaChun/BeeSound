'use client';
import React from "react";

const Quantity = ({ quantitys }: { quantitys: number }) => {
    const [quantity, setQuantity] = React.useState<number>(quantitys || 1);

    function add() {
        setQuantity((prev) => prev + 1);
    }

    function remove() {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1); // Зменшуємо кількість
        }
    }

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={remove}
                className="w-8 h-8 flex items-center justify-center text-lg font-bold bg-gray-200 rounded hover:bg-gray-300 transition"
            >
                −
            </button>
            <span className="min-w-[20px] text-center text-base">{quantity}</span>
            <button
                onClick={add}
                className="w-8 h-8 flex items-center justify-center text-lg font-bold bg-gray-200 rounded hover:bg-gray-300 transition"
            >
                +
            </button>
        </div>
    );
};

export default Quantity;
