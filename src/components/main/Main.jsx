import { Assistant } from './Assistant';
import { Data } from './Data';
import style from './Main.module.css';
import { Top } from './Top';



function Main() {
    return  (
        <main className={style.main}>
            <Top />
                <h4> Today's data</h4>
                <div className={style.data}>
                    <div className={style.columncolor1}><Data  title='Payment amount' number={8.992} number2={8638}/> </div>
                    <div className={style.columncolor2}><Data title='Payment order' number={793} number2={753}/> </div>
                    <div className={style.columncolor3}><Data title='Paying customer' number={280} number2={320}/> </div>
                    <div className={style.columncolor4}><Data title='Pending orders' number={480} number2={470}/> </div>
                    <div className={style.columncolor5}><Data title='Live stream viewers' number={23.466} number2={22089}/> </div>
                    <div className={style.columncolor5}><Data title='New attention' number={4.890} number2={3800}/> </div>
                    <div className={style.columncolor5}><Data title='Comulative attention' number={135.743} number2={130493}/> </div>
                    <div className={style.columncolor5}><Data title='Number of orders' number={5.249} number2={4680}/> </div>
                </div>
            <Assistant />

        </main>
    );
}

export { Main };