import { geistSans } from "@/app/fonts";
import Sellitem from "@/app/components/Sellitem";

interface Product {
    id: string;
    modelName: string;
    photo: string | null;
    prise: string;
}

interface BlackFridayProps {
    products: Product[];
}

const BlackFriday = ({ products }: BlackFridayProps) => {
    return (
        <div className="p-6 sm:p-10 lg:p-[90px] mt-20 flex flex-col lg:flex-row gap-10 justify-between bg-[#222121]">
            <div className="w-full lg:w-[30%]">
                <h1 className={`text-[clamp(20px,5vw,35px)] text-white font-semibold leading-tight ${geistSans.variable} font-sans`}>
                    Our Black Friday Discount<br className="hidden md:block" />
                </h1>

                <div className="grid grid-cols-3 gap-2 mt-5">
                    <div className="bg-[#F2F5FF] h-[100px]"></div>
                    <div className="bg-[#F2F5FF] h-[100px]"></div>
                    <div className="bg-[#F2F5FF] h-[100px]"></div>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row   justify-center items-center gap-6">
                 {products && products?.slice(0 , 3).map((item) => (
                    <Sellitem
                        isBlackFriday={true}
                        key={item.id}
                        name={item.modelName}
                        url={item.photo || '/default.png'}
                        price={item.prise}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlackFriday;
