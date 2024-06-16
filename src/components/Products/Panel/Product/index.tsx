import BuyButton from 'components/BuyButton';
import { useModalContext } from 'context/Modal';
import IProduct from 'types/IProduct';

import styles from './Product.module.scss';

function Product({ productName, descriptionShort, photo, price }: IProduct) {
    const { openModal, setProductData } = useModalContext();

    return (
        <div
            className={styles.product}
            onClick={() => {
                openModal();
                setProductData({ productName, descriptionShort, photo, price });
            }}
        >
            <img src={photo} alt={productName}/>

            <p className={styles.description}>{descriptionShort}</p>

            <div>
                <span>R$ 30,90</span>
                <strong>R$ {price}</strong>
                <p>ou 2x de R$ 49,95 sem juros</p>
                <p>Frete grátis</p>
            </div>

            <BuyButton/>
        </div>
    );
}

export default Product;