import {geistSans} from "@/app/fonts";

import Sellitem from "@/app/[pdoductId]/Conponets/Sellitem";
import getAllProduct from "../../../../actions/getAllProduct";


const NewArriver = async () => {

    const entries = await getAllProduct();


    return <section className={'mt-12 '} >
        <div className={'flex flex-row items-center justify-between'}>
            <p className={`${geistSans.variable} font-sans text-[23px] text-[#1A1A1A]`}>Related Products</p>
            <button className={`${geistSans.variable} font-sans text-[20px] text-[#616161]`}>
                See More
            </button>
        </div>
        <div className={'grid md:grid-cols-2 xl:grid-cols-8 sm:grid-cols-1  gap-10 mt-10'}>
            {entries.map((item, index) => (
                <Sellitem
                    key={index}
                    name={item.modelName}
                    url={item.photo}
                    price={item.prise}
                    id={item.id}
                />
            ))}
        </div>
    </section>
}

export default  NewArriver;