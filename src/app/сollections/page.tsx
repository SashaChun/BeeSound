import BestSelling from "@/app/components/Main/BestSelling";
import getAllProduct from "../../../actions/getAllProduct";

const Collection = async () => {

    const entries = await getAllProduct();

    return <div>
        <BestSelling products={entries}/>
    </div>
}

export default Collection;