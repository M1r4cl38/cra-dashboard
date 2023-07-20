import style from './Data.module.css';

//funkcija gauna objekta su key value. 
//reikia istraukti tinkama reiksme ir ja panaudoti
//rasoma dinamine informacija {x.title}
function Data(x) {
    console.log(x);
    return  (
            <div className={style.columncolor1}>
                <p>{x.title}</p>
                <p>{x.number}</p>
                <p>Yesterday {x.number2}</p>
            </div>
    );
}

export { Data };