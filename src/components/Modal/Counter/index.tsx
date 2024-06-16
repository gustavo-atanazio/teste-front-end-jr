import { useState } from 'react';
import styles from './Counter.module.scss';

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div className={styles.counter}>
            <button title='Diminuir' onClick={() => {
                if (counter >= 1) setCounter(prev => prev - 1);
            }}>
                <img src="/img/minus.svg" alt="ícone de menos"/>
            </button>

            <strong>{counter}</strong>

            <button title='Acrescentar' onClick={() => setCounter(prev => prev + 1)}>
                <img src="/img/plus.svg" alt="Ícone de mais"/>
            </button>
        </div>
    );
}

export default Counter;