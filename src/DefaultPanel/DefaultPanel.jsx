import Nav from "./StaticComponents/Nav/Nav";
import Footer from "./StaticComponents/Footer/Footer";
import {Outlet} from "react-router-dom";
import ArrowTop from "./StaticComponents/ArrowTop/ArrowTop";
import style from "./DefaultPanel.module.css";
import Cart from "./StaticComponents/Cart/Cart";

const DefaultPanel = () => {
    return (
        <div className={style.container}>
            <Nav/>
            <Outlet>
            </Outlet>
            <Footer/>
            <ArrowTop/>
            <Cart/>
        </div>
    )
}
export default DefaultPanel;
