import style from "./Description.module.css";
import {useSelector} from "react-redux";
import ProductInCart from "./ProductInCart/ProductInCart";

const Description = () => {
    const data = useSelector(state => state.cart.products);
    const productsTeg = data.map(product => <ProductInCart data={product}/>);
    return (
        <div className={style.container}>
            <h2 className={style.title}>My Cart</h2>
            <div className={style.containerForProducts}>
                {productsTeg}
            </div>
        </div>
    )
}
export default Description;
