import style from "./Map.module.css";

const Map = () => {
    return (
        <div className={style.blockForMap}>
            <h3>Address:</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82395.92276296297!2d23.913083529845252!3d49.807263021600804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2zTHfDs3csIE9id8OzZCBsd293c2tpLCBVa3JhaW5hLCA3OTAwMA!5e0!3m2!1spl!2spl!4v1701958141489!5m2!1spl!2spl"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className={style.iframeMap}></iframe>
        </div>
    )
}
export default Map;

