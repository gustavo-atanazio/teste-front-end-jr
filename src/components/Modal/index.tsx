import Counter from './Counter';
import BuyButton from 'components/BuyButton';
import { useModalContext } from 'context/Modal';

import styles from './Modal.module.scss';

function Modal() {
    const { closeModal, productData } = useModalContext();
    const { productName, descriptionShort, photo, price } = productData;

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div
                    title='Botão que fecha o modal'
                    onClick={closeModal}
                    className={styles.close}
                >
                    <img src="/img/close.svg" alt="Ícone de X"/>
                </div>

                <div className={styles.content}>
                    <div className={styles.img_container}>
                        <img src={photo} alt={productName}/>
                    </div>

                    <div className={styles.info}>
                        <h6>{productName}</h6>
                        <strong>R$ {price}</strong>
                        <p>{descriptionShort}</p>
                        <a href='#'>{'Veja mais detalhes do produto >'}</a>
                        
                        <Counter/>
                        <BuyButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;