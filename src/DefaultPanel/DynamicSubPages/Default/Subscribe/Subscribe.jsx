import style from "./Subscribe.module.css";
import {useState} from "react";

const Subscribe = () => {
    const [isClicked, setClicked] = useState(false);
    const [isSend, setSend] = useState(false);
    const [email, setEmail] = useState("");

    function sendEmail(event) {
        event.preventDefault();
        setSend(true);
        setEmail("");
        setClicked(false);
    }


    function addStyle() {
        setClicked(true);
    }

    function getEmail(event) {
        setEmail(event.target.value);
        setSend(false);
    }

    return (
        <div className={style.container} id='contacts'>
            <div className={style.block}>
                <h2>SUBSCRIBE TO THE NEWSLETTER</h2>
                <h3>AND BE THE FIRST TO KNOW THE NEWS</h3>
                <form onSubmit={sendEmail}>
                    <input type="email" placeholder="E-mail"
                           className={[style.inputText, isClicked ? style.styleInvalid : ""].join(' ')}
                           required onInput={getEmail} value={email}/>
                    <input type="submit" value="Send" className={style.inputSubmit} onClick={addStyle}/>
                    {isSend ? <span>Your e-mail was send!</span> : <span>&nbsp;</span>}
                </form>
            </div>
        </div>
    )
}
export default Subscribe;
