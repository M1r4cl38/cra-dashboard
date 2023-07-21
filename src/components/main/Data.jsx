import style from './Data.module.css';

//funkcija gauna objekta su key value. 
//reikia istraukti tinkama reiksme ir ja panaudoti
//rasoma dinamine informacija {x.title}
function Data(x) {
    console.log(x);
    return  (
            <div>
                <p className={style.title3}>{x.title}</p>
                <div className={style.num}> {x.number}</div>
                <p className={style.past}>Yesterday {x.number2}</p>
            </div>
    );
}

export { Data };