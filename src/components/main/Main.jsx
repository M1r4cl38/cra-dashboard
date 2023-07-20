import { Assistant } from './Assistant';
import { Data } from './Data';
import style from './Main.module.css';
import { Top } from './Top';


function Main() {
    return  (
        <main className={style.main}>
            <Top />
            <h4> Today's data</h4>
            <div className={style.data}></div>
                <div className={style.column}></div>
                    <Data title='Payment amount' number={8.992} number2={8638}/>
                    <Data title='Payment order' number={793} number2={753}/>
                    <Data title='Paying customer' number={280} number2={320}/>
                    <Data title='Pending orders' number={480} number2={470}/>
                    <Data title='Live stream viewers' number={23.466} number2={22089}/>
                    <Data title='New attention' number={4.890} number2={3800}/>
                    <Data title='Comulative attention' number={135.743} number2={130493}/>
                    <Data title='Number of orders' number={5.249} number2={4680}/>
            <Assistant />

        </main>
    );
}

export { Main };