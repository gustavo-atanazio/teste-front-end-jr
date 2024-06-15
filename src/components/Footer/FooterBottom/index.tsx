import styles from './FooterBottom.module.scss';

function FooterBottom() {
    return (
        <div className={styles.bottom}>
            <p>
                Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
            </p>

            <div>
                <img src="/img/econverse.svg" alt="Logo da Econverse" />
                <img src="/img/vtex_logo_branco.svg" alt="Logo da VTEX" />
            </div>
        </div>
    );
}

export default FooterBottom;