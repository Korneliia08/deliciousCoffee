import style from "./CartSubPage.module.css";
import Description from "./Description/Description";
import Summary from "./Summary/Summary";

const CartSubPage = () => {
    return (
        <div className={style.container}>
            <Description/>
            <Summary/>
        </div>
    )
}
export default CartSubPage;
