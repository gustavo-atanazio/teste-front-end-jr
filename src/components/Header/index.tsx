import HeaderTop from './HeaderTop';
import HeaderMid from './HeaderMid';
import Navigation from './Navigation';

import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <HeaderTop/>
            <HeaderMid/>
            <Navigation/>
        </header>
    );
}

export default Header;