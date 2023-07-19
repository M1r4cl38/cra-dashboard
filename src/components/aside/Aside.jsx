import {GrHomeRounded} from 'react-icons/gr';
import {RiLiveLine} from 'react-icons/ri';
import {CiShop} from 'react-icons/ci';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {RiFileList2Line} from 'react-icons/ri';
import {BsClipboardData} from 'react-icons/bs';
import {AiOutlineAccountBook} from 'react-icons/ai';
import {GrAppsRounded} from 'react-icons/gr';
import {AiOutlineSetting} from 'react-icons/ai';
import style from './Aside.module.css';

function Aside() {
    return  (
        <aside>
            <nav className={style.left}>
                <div className={style.rowStyle}>
                    <GrHomeRounded /> 
                    <a href="/">Home</a>
                </div>
                <div className={style.rowStyle}>
                    <RiLiveLine />
                    <a href="/">Live</a>
                </div>
                <div className={style.rowStyle}>
                    <CiShop />
                    <a href="/">Shop</a>
                </div>
                <div className={style.rowStyle}>
                    <HiOutlineShoppingBag />
                    <a href="/">Commodity</a>
                </div>
                <div className={style.rowStyle}>
                    <RiFileList2Line />
                    <a href="/">Order</a>
                </div>
                <div className={style.rowStyle}>
                    <BsClipboardData />
                    <a href="/">Data</a>
                </div>
                <div className={style.rowStyle}>
                    <AiOutlineAccountBook />
                    <a href="/">Assets</a>
                </div>
                <div className={style.rowStyle}>
                    <GrAppsRounded />
                    <a href="/">Application</a>
                </div>
                <div className={style.rowStyle}>
                    <AiOutlineSetting />
                    <a href="/">Set up</a>
                </div>
            </nav>
        </aside>
    );
}

export { Aside };