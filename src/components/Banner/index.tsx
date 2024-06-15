import styles from './Banner.module.scss';

function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1>Venha conhecer nossas promoções</h1>

                <p>50% Off nos produtos</p>

                <button>Ver produto</button>
            </div>
        </div>
    );
}

export default Banner;