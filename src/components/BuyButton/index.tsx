import styles from './BuyButton.module.scss';

function BuyButton() {
    return (
        <button
            className={styles.buy_button}
            type='button'
            title='Botão para efetuar compra'
        >
            COMPRAR
        </button>
    );
}

export default BuyButton;