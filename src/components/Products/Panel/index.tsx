import { useRef } from 'react';
import Product from './Product';
import { useProductsContext } from 'context/Products';
import styles from './Panel.module.scss';

function Panel() {
    const { products } = useProductsContext();
    const itemsRef = useRef<HTMLDivElement>(null);

    function scrollLeft() {
        if (itemsRef.current) {
            itemsRef.current.scrollBy({ left: -270 * 4, behavior: 'smooth' });
        }
    }

    function scrollRight() {
        if (itemsRef.current) {
            itemsRef.current.scrollBy({ left: 270 * 4, behavior: 'smooth' });
        }
    }

    return (
        <div className={styles.panel}>
            <div className={styles.categories}>
                <a href='#'>Celular</a>
                <a href='#'>Acessórios</a>
                <a href='#'>Tablets</a>
                <a href='#'>Notebooks</a>
                <a href='#'>TVS</a>
                <a href='#'>Ver todos</a>
            </div>

            <div className={styles.carousel}>
                <button
                    className={styles.leftArrow}
                    onClick={scrollLeft}
                    type='button'
                    title='Voltar'
                ></button>

                <div className={styles.items} ref={itemsRef}>
                    {products.map(item =>
                        <Product
                            productName={item.productName}
                            photo={item.photo}
                            descriptionShort={item.descriptionShort}
                            price={item.price}
                            key={item.productName}
                        />
                    )}
                </div>

                <button
                    className={styles.rightArrow}
                    onClick={scrollRight}
                    type='button'
                    title='Avançar'
                ></button>
            </div>
        </div>
    );
}

export default Panel;