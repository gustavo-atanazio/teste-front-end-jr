import Panel from './Panel';
import Partners from './Partners';
import styles from './Products.module.scss';

function Products() {
    return (
        <section className={styles.products}>
            <h2>Produtos relacionados</h2>

            <Panel/>

            <div className={styles.partners_container}>
                <Partners/>
                <Partners/>
            </div>
        </section>
    );
}

export default Products;