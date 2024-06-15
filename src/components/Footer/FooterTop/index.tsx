import Form from './Form';
import styles from './FooterTop.module.scss';

function FooterTop() {
    return (
        <div className={styles.top}>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <h6>Sobre nós</h6>

                    <div className={styles.container_media}>
                        <ul>
                            <li>
                                <a href="#">Conheça</a>
                            </li>
                            <li>
                                <a href="#">Como comprar</a>
                            </li>
                            <li>
                                <a href="#">Indicação e desconto</a>
                            </li>
                        </ul>

                        <div className={styles.icons}>
                            <a href="https://www.facebook.com" target='_blank' rel='noreferrer'>
                                <img src="/img/facebook.svg" alt="Ícone do Facebook" />
                            </a>
                            <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                                <img src="/img/instagram.svg" alt="ícone do Instagram" />
                            </a>
                            <a href="https://youtube.com" target='_blank' rel='noreferrer'>
                                <img src="/img/youtube.svg" alt="Ícone do YouTube" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.flex}>
                    <h6>INFORMAÇÕES ÚTEIS</h6>

                    <ul>
                        <li>
                            <a href="#">Fale conosco</a>
                        </li>
                        <li>
                            <a href="#">Dúvidas</a>
                        </li>
                        <li>
                            <a href="#">Prazos de entrega</a>
                        </li>
                        <li>
                            <a href="#">Formas de pagamento</a>
                        </li>
                        <li>
                            <a href="#">Política de privacidade</a>
                        </li>
                        <li>
                            <a href="#">Trocas e devoluções</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.flex}>
                    <h6>FORMAS DE PAGAMENTO</h6>

                    <div className={styles.grid}>
                        <img src="/img/visa.svg" alt="Logo da Visa" />
                        <img src="/img/elo.svg" alt="Logo da Elo" />
                        <img src="/img/alelo.svg" alt="Logo da Alelo" />
                        <img src="/img/dinners.svg" alt="Logo da Diners Club" />
                        <img src="/img/ifood.svg" alt="Logo do iFood" />
                        <img src="/img/mastercard.svg" alt="Logo da Mastercard" />
                        <img src="/img/pix.svg" alt="Logo do Pix" />
                        <img src="/img/amex.svg" alt="Logo da American Express" />
                        <img src="/img/ticket.svg" alt="Logo do Ticket" />
                        <img src="/img/sodexo.svg" alt="Logo da Sodexo" />
                    </div>
                </div>
            </div>

            <Form/>
        </div>
    );
}

export default FooterTop;