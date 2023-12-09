import style from "./BetterInput.module.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrementCount, incrementCount} from "../../../../../data/reducers/cartReducer";

const BetterInput = (props) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products)
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const product = products.find(prod => prod.id === props.data.id)
        setNumber(product.count)
    }, [products]);

    function add() {
        setNumber(Number(number) + 1);

        dispatch(incrementCount(props.data.id));
    }

    function subtract() {
        if (Number(number) - 1 <= 0) return;
        setNumber(Number(number) - 1);
        dispatch(decrementCount(props.data.id));

    }

    function change(event) {
        if (event.target.value <= 0) return;
        setNumber(event.target.value);

    }

    return (
        <>
            <div className={style.container}>
                <button onClick={subtract}>-</button>
                <input value={number} onChange={change} type="text"/>
                <button onClick={add}>+</button>
            </div>
        </>
    );
};

export default BetterInput;
