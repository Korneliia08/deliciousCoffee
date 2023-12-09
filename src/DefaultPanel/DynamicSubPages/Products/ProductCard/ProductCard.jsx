import style from "./ProductCard.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {addProductToCart, closeCart, openCart} from "../../../../data/reducers/cartReducer";
import Roast from "./Roast/Roast";
import {useNavigate} from "react-router-dom";

const ProductCard = (props) => {
    const navigate = useNavigate();
    const data = props.data;
    const dispatch = useDispatch()


    function cutName(name) {
        if (name.length > 15) {
            return name.slice(0, 15) + "....";
        } else {
            return name;
        }
    }

    function addToCart() {
        dispatch(openCart());
        dispatch(addProductToCart(data));
    }

    function openInformation() {
        navigate(`/products/${data.id}`);
        dispatch(closeCart());
    }

    return (
        <div className={style.container}>
            <Roast RoastLvl={data.roast_level}/>
            <h2 className={style.title}>{cutName(data.name)}</h2>
            <div className={style.blockForimgAndPrice}>
                <img src={data.image_url} alt="image of coffee" className={style.image}/>
                <span className={style.price}>Price: {data.price}$</span>
            </div>
            <div className={style.blockInformation}>
                <span>Region: {data.region}</span>
                <span>Weight: {data.weight}</span>
            </div>
            <div className={style.blockForBtn}>
                <button onClick={openInformation}>Read more</button>
                <FontAwesomeIcon onClick={() => addToCart()} icon={faCartShopping} color="white"
                                 className={style.cartIcon}></FontAwesomeIcon>
            </div>

        </div>


    )
}
export default ProductCard;
