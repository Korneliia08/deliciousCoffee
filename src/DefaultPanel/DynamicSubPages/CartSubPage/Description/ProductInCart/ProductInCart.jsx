import style from "./ProductInCart.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import BetterInput from "../../../../StaticComponents/Cart/ProductInCart/betterInput/betterInput";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../../../../data/reducers/cartReducer";

const ProductInCart = (props) => {
    const id = props.data.id;
    const count = props.data.count;
    const [data, setData] = useState(undefined);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function openInformation() {
        navigate(`/products/${id}`);
    }

    useEffect(() => {
        axios(`https://fake-coffee-api.vercel.app/api/${id}`)
            .then(resp => setData(resp.data[0]));
    }, []);
    if (data === undefined) {
        return <h2>Loading....</h2>;
    }
    return (
        <div className={style.product}>
            <div className={style.infoAndImg}>
                <div className={style.information}>
                    <h3 className={style.name}>{data.name}</h3>
                    <span className={style.dataSpan}>
                    <span className={style.greenSpan}>Region: </span>
                        {data.region}
                </span>
                    <span className={style.dataSpan}>
                    <span className={style.greenSpan}>Weight: </span>
                        {data.weight}
                </span>
                    <span className={style.dataSpan}>
                    <span className={style.greenSpan}>Price: </span>
                        {data.price}$
                </span>

                </div>

                <img src={data.image_url} alt="image of coffee" className={style.img}/>
                <BetterInput data={data}/>
            </div>
            <button className={style.button} onClick={openInformation}>About</button>
            <button className={style.DeleteButton} onClick={() => dispatch(deleteProduct(data.id))}>X</button>
        </div>
    )
}
export default ProductInCart;
