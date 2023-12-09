import style from "./Products.module.css";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../../data/reducers/productsReducer";
import ProductCard from "./ProductCard/ProductCard";
import BtnArrowBack from "../../StaticComponents/BtnArrowBack/BtnArrowBack";
import Skeleton from "react-loading-skeleton";


const Products = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products.products);
    const productList = productsData.map(product => <ProductCard data={product}/>)

    useEffect(() => {
        axios("https://fake-coffee-api.vercel.app/api")
            .then(resp => dispatch(setProducts(resp)));
    }, []);
    if (productList.length === 0) {
        return <div className={style.container}><Skeleton width='90vw' count={5}/></div>
    }
    return (
        <div className={style.container}>
            <BtnArrowBack top="20px" right='20px'/>
            {productList}
        </div>
    )
}
export default Products;
