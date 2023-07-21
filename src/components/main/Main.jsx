import { Assistant } from './Assistant';
import { Data } from './Data';
import style from './Main.module.css';
import { Top } from './Top';
import {HiUserGroup} from 'react-icons/hi';
import {AiOutlineAccountBook} from 'react-icons/ai';
import {RiFileList2Line} from 'react-icons/ri';
import {BiSolidTruck} from 'react-icons/bi';



function Main() {
    return  (
        <main className={style.main}>
            <Top />
                <h3 className={style.colname1}> Today's data</h3> 
                <div className={style.data}>
                    <div className={style.box2}>
                        <div className={style.columncolor1}><Data  title='Payment amount' number={8.992} number2={8638}/> </div>
                        <div className={style.icon}><AiOutlineAccountBook className={style.innericon} size='2em' color='#FFE9ED'/></div>
                    </div>
                    <div className={style.box2}>
                        <div className={style.columncolor2}><Data title='Payment order' number={793} number2={753}/> </div>
                        <div className={style.icon2}><RiFileList2Line className={style.innericon} size='2em' color='#E4EEFF'/></div>
                    </div>
                    <div className={style.box2}>
                        <div className={style.columncolor3}><Data title='Paying customer' number={280} number2={320}/> </div>
                        <div className={style.icon3}><HiUserGroup className={style.innericon} size='2em' color='#EEE5FF'/></div>
                    </div>
                    <div className={style.box2}>
                        <div className={style.columncolor4}><Data title='Pending orders' number={480} number2={470}/> </div>
                        <div className={style.icon4}><BiSolidTruck className={style.innericon} size='2em' color='#D7F1E3'/></div>
                    </div>    
                    <div className={style.columncolor5}><Data title='Live stream viewers' number={23.466} number2={22089}/></div>
                    <div className={style.columncolor5}><Data title='New attention' number={4.890} number2={3800}/> </div>
                    <div className={style.columncolor5}><Data title='Comulative attention' number={135.743} number2={130493}/> </div>
                    <div className={style.columncolor5}><Data title='Number of orders' number={5.249} number2={4680}/> </div>
                </div>
                <h3 className={style.colname2}> Operations Assistant</h3>
                <div className={style.data}>
                    <div className={style.columnnocolor}><Assistant title2='Small telecast live' text='Live sales in WeChat'/> </div>
                    <div className={style.columnnocolor}><Assistant title2='Mini Program Store' text='WeChat Mini Program Store'/> </div>
                    <div className={style.columnnocolor}><Assistant title2='Distribution market' text='One-click promotion'/> </div>
                    <div className={style.columnnocolor}><Assistant title2='Coupon' text='Store marketing essentials'/> </div>
                    <div className={style.columnnocolor}><Assistant title2='Store construction' text='Can be customized'/> </div>
                    <div className={style.columnnocolor}><Assistant title2='Promoting ads' text='WeChat billion-level exposure'/> </div>
                    <div className={style.columnnocolor}><Assistant title2='Promotion rebate' text='Help you sell goods'/> </div>
                    <div className={style.columnnocolor}><Assistant title2='Asset Management' text='Income and withdrawal'/> </div>
                </div>
        </main>
    );
}

export { Main };