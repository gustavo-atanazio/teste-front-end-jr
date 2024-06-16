import styles from './Brands.module.scss';

function Brands() {
    return (
        <section className={styles.brands}>
            <h2>Navegue por marcas</h2>

            <div className={styles.container}>
                <div>
                    <img src="/img/vtex_logo.svg" alt="Logo da VTEX"/>
                </div>
                <div>
                    <img src="/img/vtex_logo.svg" alt="Logo da VTEX"/>
                </div>
                <div>
                    <img src="/img/vtex_logo.svg" alt="Logo da VTEX"/>
                </div>
                <div>
                    <img src="/img/vtex_logo.svg" alt="Logo da VTEX"/>
                </div>
                <div>
                    <img src="/img/vtex_logo.svg" alt="Logo da VTEX"/>
                </div>
            </div>
        </section>
    );
}

export default Brands;