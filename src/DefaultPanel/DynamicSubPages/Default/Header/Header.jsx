import style from "./Header.module.css";


const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <h1>The best coffees from the best beans</h1>
                <button>Buy</button>
            </div>
        </header>
    )
}
export default Header;
