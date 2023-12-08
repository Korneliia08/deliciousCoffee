import style from "./Footer.module.css";
import Contacts from "./Contacts/Contacts";
import Map from "./Map/Map";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <Map/>
                <Contacts/>
            </div>
            <div className={style.bottomComponent}><h5>Korneliia © All Rights Reserved 2023</h5></div>
        </footer>
    )
}
export default Footer;

