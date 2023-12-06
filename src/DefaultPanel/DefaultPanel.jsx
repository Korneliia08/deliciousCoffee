import Nav from "./StaticComponents/Nav/Nav";
import Footer from "./StaticComponents/Footer/Footer";
import {Outlet} from "react-router-dom";

const DefaultPanel = () => {
    return (
        <>
            <Nav/>
            <Outlet>
            </Outlet>
            <Footer/>
        </>
    )
}
export default DefaultPanel;
