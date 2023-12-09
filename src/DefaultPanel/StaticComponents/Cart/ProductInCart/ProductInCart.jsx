import style from "./ProductInCart.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import BetterInput from "./betterInput/betterInput";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../../../data/reducers/cartReducer";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ProductInCart = (props) => {
    const data = props.data;
    const dispatch = useDispatch()
    const [product, setProduct] = useState(undefined);
    useEffect(() => {

        axios(`https://fake-coffee-api.vercel.app/api/${data.id}`)
            .then(resp => {

                setProduct(resp.data[0]);

            });


    }, [props]);

    if (!product) {
        return <div><Skeleton count={1} height={124}/><br/></div>
    }
    return (
        <div className={style.container}>
            <div className={style.nameAndCount}>

                <button className={style.delete} onClick={() => dispatch(deleteProduct(data.id))}>X</button>
                <h5 className={style.name}>{product.name}</h5>
                <span className={style.count}>{data.count * data.price}$ </span>
            </div>
            <div className={style.imageCount}>

                <img src={product.image_url} alt="image Of coffee"/>
                <BetterInput data={product}/>
            </div>
        </div>
    )
}
export default ProductInCart;
