import style from "./Header.module.css";
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    function openProducts() {
        navigate("/products");
    }

    return (
        <header className={style.header}>
            <div className={style.container}>
                <h1>The best coffees from the best beans</h1>
                <button onClick={openProducts}>Buy</button>
            </div>
        </header>
    )
}
export default Header;
