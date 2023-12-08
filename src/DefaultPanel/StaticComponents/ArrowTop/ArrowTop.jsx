import style from "./ArrowTop.module.css";
import arrowTop from "../../../assets/icons/arrowTop.svg";
import {useEffect, useState} from "react";

const ArrowTop = () => {
    const [visiblyBtn, showBtn] = useState(false);
    useEffect(() => {
        let interval = setInterval(() => {
            if (window.scrollY > 150) {
                showBtn(true);
            } else {
                showBtn(false);
            }
        }, 300);

        return () => {
            clearInterval(interval);
        };
    }, []);


    function scrollToTop() {
        let position = window.scrollY;
        const scrollInterval = setInterval(() => {
            position -= 20;
            window.scrollTo(0, position);

            if (Number(position) <= 0) {
                clearInterval(scrollInterval);
            }
        }, 5);
    }

    return (
        <button className={style.btnArrowTop} onClick={scrollToTop} style={{bottom: visiblyBtn ? "50px" : "-70px"}}>
            <img src={arrowTop} alt="icon arrow to top" className={style.icon}/>
        </button>
    )
}
export default ArrowTop;
