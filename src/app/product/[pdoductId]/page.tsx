import HaracteristicItem from "../../../app/product/[pdoductId]/Conponets/СharacteristicItem";
import BestSelling from "../../../app/product/[pdoductId]/Conponets/BestSelling";
import { fetchProductByName } from "../../../../actions/getCurrentProduct";
import ImagePiker from "@/app/product/[pdoductId]/Conponets/ImagePiker";
import ButtonAdd from "@/app/product/[pdoductId]/Conponets/buttonAdd";
import { getSession } from "next-auth/react";



const ProductID = async ({ params  }: { params: any }) => {
    const data = await fetchProductByName(`${params.pdoductId}`);

    if (!data) {
        return <div>Error loading product data</div>;
    }

    // Отримання сесії для логування токену
    const session = await getSession();
    console.log('Session:', session);

    // Якщо сесія є, ви можете отримати токен із сесії
    if (session) {
        const token = session.jwt;  // Тепер доступ до jwt без помилок
        console.log('JWT Token:', token);
    } else {
        console.log('No session found');
    }

    const item = {
        name: data[0]?.modelName,
        price: 123,
        quantity: 1,
        photo : data[0]?.photos[0],
    };


    return (
        <section className={'px-[60px] mt-10 py-[40px]'}>
            <div>
                <div className={'flex flex-row space-x-[100px]'}>
                    <ImagePiker imageArray={data[0].photos} />
                    <div className={'flex flex-col justify-between'}>
                        <h1 className={'font-sans text-[24px] font-[500] text-[#1A1A1A]'}>
                            {data[0]?.modelName}
                        </h1>


                        {/* Characteristics of the product */}
                        <HaracteristicItem name={'Brand'} haracteristic={data[0]?.brand ?? 'N/A'} />
                        <HaracteristicItem name={'Model Name'} haracteristic={data[0]?.modelName ?? 'N/A'} />
                        <HaracteristicItem name={'Form Factor'} haracteristic={data[0]?.formFactor ?? 'N/A'} />
                        <HaracteristicItem name={'Connectivity Technology'} haracteristic={data[0]?.connectivityTechnology ?? 'N/A'} />
                        <ButtonAdd data={item} />
                    </div>
                </div>
                <BestSelling data={item} />
            </div>
        </section>
    );
};

export default ProductID;
