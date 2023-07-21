import style from './Header.module.css';
import logo from '../../img/logo.png';
import admin from '../../img/admin.png';
import basic from '../../img/basic.png';

function Header() {
    return  (
        <header className={style.header}>
            <div className={style.group}>
                <div className={style.left}>
                    <img className={style.logo} src={logo} alt='Logo' />
                    <h3>Aoki's shop</h3>
                    <img className={style.basic} src={basic} alt='Basic' />
                </div>    
                <nav className={style.navtop}>
                    <a href="/">Notice</a>
                    <a href="/">Help center</a>
                    <img className={style.admin} src={admin} alt='Admin' />
                </nav>
            </div>
        </header>
    );
}

export { Header };