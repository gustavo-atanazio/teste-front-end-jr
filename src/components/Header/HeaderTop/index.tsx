import styles from './HeaderTop.module.scss';

function HeaderTop() {
    return (
        <div className={styles.top}>
            <div className={styles.container}>
                <div>
                    <img src="/img/ShieldCheck.svg" alt="Ícone de escudo" />
                    <p>Compra <strong>100% segura</strong></p>
                </div>

                <div>
                    <img src="/img/Truck.svg" alt="Ícone de escudo" />
                    <p><strong>Frete grátis</strong> acima de R$ 200</p>
                </div>

                <div>
                    <img src="/img/CreditCard.svg" alt="Ícone de escudo" />
                    <p><strong>Parcele</strong> suas compras</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;