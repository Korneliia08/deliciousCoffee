import style from "./Description.module.css";

const Description = () => {
    return (
        <div className={style.container}>
            <div className={style.block}>
                <h3>The best World sorts</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae expedita id, impedit molestias
                    necessitatibus sed sint voluptatibus. Asperiores iste, numquam?</p>
            </div>
            <div className={style.block}><h3>
                Many points of sale
            </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae expedita id, impedit molestias
                    necessitatibus sed sint voluptatibus. Asperiores iste, numquam?</p></div>
            <div className={style.block}><h3>
                Many points of sale
            </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae expedita id, impedit molestias
                    necessitatibus sed sint voluptatibus. Asperiores iste, numquam?</p></div>
            <div className={style.block}><h3>
                24/7 fast delivery
            </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae expedita id, impedit molestias
                    necessitatibus sed sint voluptatibus. Asperiores iste, numquam?</p></div>
        </div>
    )
}
export default Description;
