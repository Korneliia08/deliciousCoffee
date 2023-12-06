import style from "./IframeMowie.module.css";

const IframeMovie = () => {
    return (
        <iframe width="400" height="270" src="https://www.youtube.com/embed/WoVagtQTwbE?si=BhY1lld6_bbJns4t"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen className={style.iframeMovie}></iframe>
    )
}
export default IframeMovie;
