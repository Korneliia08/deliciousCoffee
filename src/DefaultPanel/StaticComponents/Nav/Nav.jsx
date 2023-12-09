import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import logo from "./../../../assets/images/logo.png";
import cart from "./../../../assets/icons/cart.png";
import {useDispatch} from "react-redux";
import {openCart} from "../../../data/reducers/cartReducer";
import {HashLink} from "react-router-hash-link";

const Nav = () => {
    const dispach = useDispatch()
    return (
        <>
            <nav className={style.nav}>
                <img src={logo} alt="logo" className={style.logo}/>
                <div className={style.containerForLink}>
                    <Link to={"/"}>Home</Link>
                    <HashLink
                        to='/#about'
                        scroll={(element) => {
                            const yCoordinate =
                                element.getBoundingClientRect().top + window.pageYOffset;
                            const yOffset = -90;
                            window.scrollTo({top: yCoordinate + yOffset, behavior: "smooth"});
                            //element.scrollIntoView({ behavior: "smooth", top: yCoordinate + yOffset, })
                        }}
                    >About us</HashLink>


                    <Link to={"/products"}>Products</Link>
                    <HashLink
                        to='/#contacts'
                        scroll={(element) => {
                            const yCoordinate =
                                element.getBoundingClientRect().top + window.pageYOffset;
                            const yOffset = -90;
                            window.scrollTo({top: yCoordinate + yOffset, behavior: "smooth"});
                            //element.scrollIntoView({ behavior: "smooth", top: yCoordinate + yOffset, })
                        }}
                    >Contacts</HashLink>

                    <button onClick={() => dispach(openCart())}>
                        <img src={cart} alt="icon cart" className={style.iconCart}/>
                    </button>
                </div>
            </nav>
            <div className={style.emptyBlock}></div>
        </>
    )
}
export default Nav;
