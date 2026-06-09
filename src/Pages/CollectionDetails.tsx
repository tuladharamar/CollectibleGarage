import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import DieCast from "../Constant/DieCast";


const CollectionDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = DieCast.find(item => item.id === parseInt(id || " "));

    if (!product) {
        return (
            <div className="">
                Product Not Found
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto">
            <button onClick={() => navigate(-1)} className=" py-3">
                <IoMdArrowRoundBack />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
                <img src={product.image}/>
            </div>
        </div>
    )
}

export default CollectionDetails