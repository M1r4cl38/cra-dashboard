import style from './Assistant.module.css';

function Assistant(x) {
    return  (
        <div>
            <h4>{x.title2}</h4>
            <p>{x.text}</p>
        </div>
);
}

export { Assistant };