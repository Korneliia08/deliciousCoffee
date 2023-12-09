import style from "./AboutUs.module.css";
import Content from "./Content/Content";
import IframeMovie from "./IframeMovie/IframeMovie";
import Description from "./Description/Description";

const AboutUs = () => {
    return (
        <div className={style.container} id='about'>
            <div className={style.containerForContentAndMovie}>
                <Content/>
                <IframeMovie/>
            </div>
            <Description/>
        </div>
    )
}
export default AboutUs;
