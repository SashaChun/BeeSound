import client from "../../lib/contentful";
import Header from "@/app/components/header/Header";
import MainADS from "@/app/components/Main/MainADS";
import BestSelling from "@/app/components/Main/BestSelling";
import BlackFriday from "@/app/components/Main/BlackFriday";
import NewArrivals from "@/app/components/Main/NewArrivals";
import Footer from "@/app/components/Footer";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export default async function Home() {
    const res = await client.getEntries({
        content_type: 'product',
    });

    const entries = res.items.map((item: any) => ({
        id: item.sys.id,
        formFactor: item.fields.formFactor,
        brand: documentToPlainTextString(item.fields.brand),
        modelName: documentToPlainTextString(item.fields.modelName),
        product: documentToPlainTextString(item.fields.product),
        prise: documentToPlainTextString(item.fields.prise),
        photo: item.fields.photo?.[0]?.fields?.file?.url ?? '/placeholder.jpg',
    }));

    console.log(entries);

    return (
        <div>
            <div className="lg:px-[80px] px-[40px]">
                <Header />
                <MainADS />
                <BestSelling products={entries} />
            </div>
            <BlackFriday />
            <div className="lg:px-[80px] px-[40px]">
                <NewArrivals />
            </div>
            <Footer />
        </div>
    );
}
