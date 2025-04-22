import { addToProduct } from "../../../../../actions/addToProduct";
import { getUserId } from "../../../../../actions/getUserId";

const ButtonAdd = ({ data }: { data: { name: string, price: number, quantity: number } }) => {
    async function get() {
        'use server';
        const id = await getUserId();
        const session = await addToProduct(id, data);
        console.log('id', session);
    }

    return (
        <button onClick={get} className={'bg-[#AF367B] font-sans text-[18px] font-[500] text-white w-full h-[50px] rounded-[10px] mt-5'}>
            Add To Cart
        </button>
    );
};

export default ButtonAdd;
