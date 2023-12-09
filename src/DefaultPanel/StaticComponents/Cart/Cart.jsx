import style from "./Cart.module.css";
import {useDispatch, useSelector} from "react-redux";
import {closeCart} from "../../../data/reducers/cartReducer";
import ProductInCart from "./ProductInCart/ProductInCart";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const open = useSelector(state => state.cart.open)
    const dispatch = useDispatch()
    const productsInCart = useSelector(state => state.cart.products);
    const navigate = useNavigate();

    const productsInCartTag = productsInCart.map(product => <ProductInCart data={product}/>)

    function openCartSubPage() {
        navigate("/cart");
        dispatch(closeCart());
    }

    function calcTotalPrice() {
        let totalPrice = 0;
        productsInCart.forEach(product => {
            totalPrice += product.price * product.count
        })

        return Number(totalPrice).toFixed(2);
    }

    return (
        <div className={style.container} style={{right: open ? '0px' : '-400px'}}>
            <button onClick={() => dispatch(closeCart())} className={style.close}>X</button>
            <div className={style.productContainer}>
                {productsInCartTag}
                {productsInCartTag.length === 0 ? <h2>No product in cart</h2> : ''}
            </div>

            <div className={style.price}>
                Total price:<span>{calcTotalPrice()}$</span>
            </div>
            <div className={style.bottomPart}>
                <button className={style.btnDisplay} onClick={openCartSubPage}>Display cart</button>
            </div>
        </div>
    )
}
export default Cart;

