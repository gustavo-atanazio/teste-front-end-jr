import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterTop/>
            <FooterBottom/>
        </footer>
    );
}

export default Footer;