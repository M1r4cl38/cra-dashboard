import style from './Top.module.css';

function Top() {
    return  (
        <div>
            <div className={style.top}>
                <div>
                    <h2 className={style.title}> Well begun is half done</h2>
                    <p className={style.text1}>Complete the following steps to sell.</p>
                </div>
                    <div className={style.go}>
                        <div className={style.first}>
                            <h4>1.Certification</h4>
                            <p className={style.text2}>Upload qualification information</p>
                            <a href="/">Go</a>
                        </div>
                        <div className={style.second}>
                            <h4>2.Upload product</h4>
                            <p className={style.text2}>Fill in product information</p>
                            <a href="/">Go</a>
                        </div>
                        <div className={style.third}>
                            <h4>3.Open for sale</h4>
                            <p className={style.text2}>Choose to open any sales channel</p>
                            <a href="/">Go</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Top };