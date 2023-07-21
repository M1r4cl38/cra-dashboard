import style from './Assistant.module.css';

function Assistant(x) {
    return  (
        <div className={style.boxtext}>
            <h4>{x.title2}</h4>
            <p className={style.boxtext2}>{x.text}</p>
        </div>
);
}

export { Assistant };