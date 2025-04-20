import client from "../../lib/contentful";
import Header from "@/app/components/header/Header";
import MainADS from "@/app/components/Main/MainADS";
import BestSelling from "@/app/components/Main/BestSelling";
import BlackFriday from "@/app/components/Main/BlackFriday";
import NewArrivals from "@/app/components/Main/NewArrivals";
import Footer from "@/app/components/Footer";
import getAllProduct from "../../actions/getAllProduct";

export default async function Home() {
    const entries = await getAllProduct();

    return (
        <div>
            <div className="lg:px-[80px] px-[40px]">
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
