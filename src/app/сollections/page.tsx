import BestSelling from "@/app/components/Main/BestSelling";
import getAllProduct from "../../../actions/getAllProduct";

const Collection = async () => {

    const entries = await getAllProduct();

    return <div className="lg:px-[80px] px-[40px]">
        <BestSelling products={entries}/>
    </div>
}

export default Collection;