import { Assistant } from './Assistant';
import { Data } from './Data';
import style from './Main.module.css';
import { Top } from './Top';


function Main() {
    return  (
        <main className={style.main}>
            <Top />
            <Data />
            <Assistant />

        </main>
    );
}

export { Main };