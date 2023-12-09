import style from "./InfoProduct.module.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Roast from "../Products/ProductCard/Roast/Roast";
import BtnArrowBack from "../../StaticComponents/BtnArrowBack/BtnArrowBack";
import iconCart from "./../../../assets/icons/cart.png";
import {useDispatch} from "react-redux";
import {addProductToCart, openCart} from "../../../data/reducers/cartReducer";

const InfoProduct = () => {
    const {id} = useParams();
    const [data, setData] = useState(undefined);
    const dispatch = useDispatch();

    function addToCartFun() {
        dispatch(addProductToCart(data));
        dispatch(openCart());
    }

    useEffect(() => {
        axios(`https://fake-coffee-api.vercel.app/api/${id}`)
            .then(resp => setData(resp.data[0]));
    }, []);
    if (data === undefined) {
        return <div className={style.container}><BtnArrowBack top="20px" right='20px'/><h2>Loading....</h2></div>
    }
    return (
        <div className={style.container}>
            <BtnArrowBack top="20px" right='20px'/>
            <div className={style.block}><Roast RoastLvl={data.roast_level}/>
                <h2 className={style.name}>{data.name}</h2>
                <img className={style.img} src={data.image_url} alt="image of coffee"/>
                <span className={style.spanContent}><span
                    className={style.greenSpan}>Description:</span> {data.description}</span>
                <span className={style.spanContent}><span
                    className={style.greenSpan}>Region:</span> {data.region}</span>
                <span className={style.spanContent}><span
                    className={style.greenSpan}>Weight:</span> {data.weight}</span>
                <span className={style.spanContent}><span
                    className={style.greenSpan}>Price:</span> {data.price}$</span>
                <button onClick={addToCartFun}>Add to cart <img src={iconCart} alt="icon" className={style.iconCart}/>
                </button>
            </div>
        </div>
    )
}
export default InfoProduct;
