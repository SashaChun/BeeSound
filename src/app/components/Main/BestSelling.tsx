import { geistSans } from "@/app/fonts";
import Sellitem from "@/app/components/Sellitem";
import Category from "@/app/components/Category";
import { FC } from "react";

type ProductType = {
    id: string,
    formFactor: string,
    brand: string,
    modelName: string,
    product: string,
    prise: string,
    photo : string
}

const BestSelling: FC<{ products: ProductType[] }> = ({ products }) => {
    return (
        <section className="mt-12">
            <div className="flex flex-row items-center justify-between">
                <p className={`${geistSans.variable} font-sans text-[23px] text-[#1A1A1A]`}>
                    Our Best Selling
                </p>
                <button className={`${geistSans.variable} font-sans text-[20px] text-[#616161]`}>
                    See More
                </button>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 gap-10 mt-10">
                {products && products?.map((item) => (
                    <Sellitem
                        key={item.id}
                        name={item.modelName}
                        url={item.photo || '/default.png'}
                        price={item.prise}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-20">
                   <Category color={'#AF367B'} dots={products && products[0]?.photo}/>
                  <Category color={'#1B234A'} dots={products && products[1]?.photo}/>
            </div>
        </section>
    );
};

export default BestSelling;
