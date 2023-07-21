import { Assistant } from './Assistant';
import { Data } from './Data';
import style from './Main.module.css';
import { Top } from './Top';
import {HiUserGroup} from 'react-icons/hi';
import {AiOutlineAccountBook} from 'react-icons/ai';
import {RiFileList2Line} from 'react-icons/ri';
import {BiSolidTruck} from 'react-icons/bi';
import {ImPlay2} from 'react-icons/im';
import {RiMiniProgramFill} from 'react-icons/ri';
import {BsDiagram3Fill} from 'react-icons/bs';
import {BiSolidCoupon} from 'react-icons/bi';
import {PiStorefrontFill} from 'react-icons/pi';
import {LiaAdSolid} from 'react-icons/lia';
import {BsBookmarkHeartFill} from 'react-icons/bs';
import {RiPieChartFill} from 'react-icons/ri';



function Main() {
    return  (
        <main>
            <div className={style.top}>
                <div>
                    <h2 className={style.title}> Well begun is half done</h2>
                    <p className={style.text1}>Complete the following steps to sell</p>
                </div>
                <div className={style.go}>
                    <div className={style.topcol}>
                       <div className={style.first}><Top  toptitle='1. Certification' description='Upload qualification information'/> </div>
                       <div className={style.second}><Top toptitle='2. Upload a product' description='Fill in product information'/> </div>
                       <div className={style.third}><Top toptitle='3. Open for sale' description='Choose to open any sales'/> </div>    
                    </div>
                </div>
                </div> 
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
                    <div className={style.box3}>
                        <div className={style.icon5}><ImPlay2 className={style.innericon2} size='2em' color='#FF3D68'/></div>
                        <div className={style.columnnocolor}><Assistant title2='Small telecast live' text='Live sales in WeChat'/> </div>
                    </div>
                    <div className={style.box3}>
                        <div className={style.icon5}><RiMiniProgramFill className={style.innericon2} size='2em' color='#44CC7E'/></div>
                        <div className={style.columnnocolor}><Assistant title2='Mini Program Store' text='WeChat Mini Program Store'/> </div>
                    </div>
                    <div className={style.box3}>
                        <div className={style.icon5}><BsDiagram3Fill className={style.innericon2} size='2em' color='#3A89FF'/></div>
                        <div className={style.columnnocolor}><Assistant title2='Distribution market' text='One-click promotion'/> </div>
                    </div>
                    <div className={style.box3}>
                        <div className={style.icon5}><BiSolidCoupon className={style.innericon2} size='2em' color='#FF3D68'/></div>
                        <div className={style.columnnocolor}><Assistant title2='Coupon' text='Store marketing essentials'/> </div>
                    </div>
                    <div className={style.box3}>
                        <div className={style.icon5}><PiStorefrontFill className={style.innericon2} size='2em' color='#3A89FF'/></div>
                        <div className={style.columnnocolor}><Assistant title2='Store construction' text='Can be customized'/> </div>
                    </div>
                    <div className={style.box3}>
                        <div className={style.icon5}><LiaAdSolid className={style.innericon2} size='2em' color='#FE593D'/></div>
                        <div className={style.columnnocolor}><Assistant title2='Promoting ads' text='WeChat billion-level exposure'/> </div>
                    </div>
                    <div className={style.box3}>
                        <div className={style.icon5}><BsBookmarkHeartFill className={style.innericon2} size='2em' color='#FF3D68'/></div>
                        <div className={style.columnnocolor}><Assistant title2='Promotion rebate' text='Help you sell goods'/> </div>
                    </div>
                    <div className={style.box3}>
                        <div className={style.icon5}><RiPieChartFill className={style.innericon2} size='2em' color='#44CC7E'/></div>
                        <div className={style.columnnocolor}><Assistant title2='Asset Management' text='Income and withdrawal'/> </div>
                    </div>
                    
            </div>
    </main>
    );
}

export { Main };