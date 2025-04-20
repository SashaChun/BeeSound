import HaracteristicItem from "@/app/[pdoductId]/Conponets/СharacteristicItem";
import BestSelling from "@/app/[pdoductId]/Conponets/BestSelling";
import { fetchProductByName } from "../../../actions/getCurrentProduct";
import ImagePiker from "@/app/[pdoductId]/Conponets/ImagePiker";

const ProductID = async ({params}:  {params : any}) => {
    const data = await fetchProductByName(`${params.pdoductId}`);

    if (!data) {
        return <div>Error loading product data</div>;
    }

    console.log(data);

    return (
        <section className={'px-[60px] mt-10 py-[40px]'}>
            <div className={' '}>
                <div className={'flex flex-row space-x-[100px]'}>
                <ImagePiker/>
                    <div className={'flex flex-col justify-between'}>
                        <h1 className={'font-sans text-[24px] font-[500] text-[#1A1A1A]'}>
                            {data[0]?.modelName}
                        </h1>

                        <div className="flex items-center flex-row space-x-2 mt-2">
                            <div className="w-[30px] h-[30px] rounded-full bg-amber-600"></div>
                            <div className="w-[30px] h-[30px] rounded-full bg-green-400"></div>
                            <div className="w-[30px] h-[30px] rounded-full bg-red-600"></div>
                            <div className="w-[30px] h-[30px] rounded-full bg-blue-600"></div>
                        </div>

                        {/* Characteristics of the product */}
                        <HaracteristicItem name={'Brand'} haracteristic={data[0]?.brand ?? 'N/A'} />
                        <HaracteristicItem name={'Model Name'} haracteristic={data[0]?.modelName ?? 'N/A'} />
                        <HaracteristicItem name={'Form Factor'} haracteristic={data[0]?.formFactor ?? 'N/A'} />
                        <HaracteristicItem name={'Connectivity Technology'} haracteristic={data[0]?.connectivityTechnology ?? 'N/A'} />

                        <button className={'bg-[#AF367B] font-sans text-[18px] font-[500] text-white w-full h-[50px] rounded-[10px] mt-5'}>
                            Add To Cart
                        </button>
                    </div>
                </div>
                <BestSelling/>
            </div>
        </section>
    );
};

export default ProductID;
