import style from "./Contacts.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
    return (
        <div className={style.blockForContacts}>
            <h3>Contacts:</h3>
            <div className={style.blockContact}>
                <FontAwesomeIcon icon={faPhone} color="white"></FontAwesomeIcon><span>+380*******</span>
            </div>
            <div className={style.blockContact}>
                <FontAwesomeIcon icon={faEnvelope} color="white"></FontAwesomeIcon>
                <span>deliciouscoffee@coffee.com</span>
            </div>

        </div>
    )
}
export default Contacts;

