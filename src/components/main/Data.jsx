import style from './Data.module.css';

function Data() {
    return  (
        <div className={style.data}>
           <h4> Today's data</h4>
           <div className={style.column}>
                <div className={style.columncolor1}>
                    <p>text</p>
                    <p>number</p>
                    <p>text</p>
                </div>
                <div className={style.columncolor2}>
                    <p>text</p>
                    <p>number</p>
                    <p>text</p>
                </div>
                <div className={style.columncolor3}>
                    <p>text</p>
                    <p>number</p>
                    <p>text</p>
                </div>
                <div className={style.columncolor4}>
                    <p>text</p>
                    <p>number</p>
                    <p>text</p>
                </div>
                <div className={style.columncolor5}>
                    <p>text</p>
                    <p>number</p>
                    <p>text</p>
                </div>
                <div className={style.columncolor5}>
                    <p>text</p>
                    <p>number</p>
                    <p>text</p>
                </div>
                <div className={style.columncolor5}>
                    <p>text</p>
                    <p>number</p>
                    <p>text</p>
                </div>
                <div className={style.columncolor5}>
                    <p>text</p>
                    <p>number</p>
                    <p>text</p>
                </div>
            </div>
        </div>
    );
}

export { Data };