import style from "./Summary.module.css";
import {useSelector} from "react-redux";

const Summary = () => {
    const productsInCart = useSelector(state => state.cart.products);

    function calcTotalPrice() {
        let totalPrice = 0;
        productsInCart.forEach(product => {
            totalPrice += product.price * product.count
        })

        return Number(totalPrice).toFixed(2);
    }

    return (
        <div className={style.container}>
            <h2>Total price</h2>
            <p>{calcTotalPrice()}$</p>
            <button>Pay</button>
        </div>
    )
}
export default Summary;
