import IProduct from 'types/IProduct';
import styles from './Product.module.scss';

function Product({ productName, descriptionShort, photo, price }: IProduct) {
    return (
        <div className={styles.product}>
            <img src={photo} alt={productName}/>

            <p className={styles.description}>{descriptionShort}</p>

            <div>
                <span>R$ 30,90</span>
                <strong>R$ {price}</strong>
                <p>ou 2x de R$ 49,95 sem juros</p>
                <p>Frete grátis</p>
            </div>

            <button>COMPRAR</button>
        </div>
    );
}

export default Product;