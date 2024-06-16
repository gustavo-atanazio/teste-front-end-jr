import Panel from './Panel';
import Partners from './Partners';
import styles from './Products.module.scss';

function Products({ showPanel }: { showPanel: boolean }) {
    return (
        <section className={styles.products}>
            <h2>Produtos relacionados</h2>

            {showPanel
                ? <Panel/>
                : <span className={styles.see_all}>Ver todos</span>
            }

            <div className={styles.partners_container}>
                <Partners/>
                <Partners/>
            </div>
        </section>
    );
}

export default Products;