import {useEffect, useState} from "react";
import coffeeBlack from '../../../../../assets/icons/coffee-black.png'
import coffee from '../../../../../assets/icons/coffee.png'
import style from './Roast.module.css'

const Roast = (props) => {
    const lvl = props.RoastLvl;
    const notRoast = 5 - lvl;
    const [RoastImages, SetRoastImages] = useState([])

    useEffect(() => {
        const imagesArray = []
        for (let index = 0; index < lvl; index++) {
            imagesArray.push(<img className={style.img} src={coffeeBlack}/>)
        }
        for (let index = 0; index < notRoast; index++) {
            imagesArray.push(<img className={style.img} src={coffee}/>)
        }
        SetRoastImages(imagesArray)
    }, []);
    return (
        <div className={style.container}>
            {RoastImages}
        </div>
    )
}
export default Roast;
