import style from './Top.module.css';

function Top(x) {
    return  (
        <div>
             <div>
                <p className={style.text1}>{x.toptitle}</p>
                <p className={style.text2}>{x.description}</p>
                <a className={style.golink} href="/">GO</a>
            </div>   
        </div>
    );
}

export { Top };