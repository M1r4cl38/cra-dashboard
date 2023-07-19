import style from './Header.module.css';

function Header() {
    return  (
        <header className={style.header}>
            <img className={style.logo} src='' alt='Logo' />
            Aoki's shop
            <nav>
                <a href="/">Notice</a>
                <a href="/">Help center</a>
            </nav>
            <img className={style.logo} src='' alt='User' />
            
        </header>
    );
}

export { Header };