import style from "./Products.module.css";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../../data/reducers/productsReducer";


const Products = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products.products);
    const productList = productsData.map(product => <p>{product.name}</p>)

    useEffect(() => {
        axios("https://fake-coffee-api.vercel.app/api")
            .then(resp => dispatch(setProducts(resp)));
    }, []);
    return (
        <div className={style.container}>products
            {productList}
        </div>
    )
}
export default Products;
