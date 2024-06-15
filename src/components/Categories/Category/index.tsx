import ICategory from 'types/ICategory';
import styles from './Category.module.scss';

function Category({ name, icon, alt, active }: ICategory) {
    return (
        <div className={styles.category}>
            <div>
                <img src={icon} alt={alt}/>
            </div>

            <p className={active ? styles.active : ''}>
                {name}
            </p>
        </div>
    );
}

export default Category;