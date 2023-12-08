import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import logo from "./../../../assets/images/logo.png";
import cart from "./../../../assets/icons/cart.png";

const Nav = () => {
    return (
        <>
            <nav className={style.nav}>
                <img src={logo} alt="logo" className={style.logo}/>
                <div className={style.containerForLink}>
                    <Link to={"/"}>Home</Link>
                    <Link>About us</Link>
                    <Link to={"/products"}>Products</Link>
                    <Link>Contacts</Link>
                    <button>
                        <img src={cart} alt="icon cart" className={style.iconCart}/>
                    </button>
                </div>
            </nav>
            <div className={style.emptyBlock}></div>
        </>
    )
}
export default Nav;
