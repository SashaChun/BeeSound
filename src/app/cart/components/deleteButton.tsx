import { deleteCartItem } from "../../../../actions/deleteCartItem";

const DeleteButton = ({ id }: { id: string }) => {

    async function Delete() {
        await deleteCartItem(id);
    }

    return (
        <button
            className="bg-red-500 mt-5 text-white text-xs px-3 py-1 rounded hover:bg-red-600 transition"
            onClick={Delete}
        >
            delete
        </button>
    );
}

export default DeleteButton;
