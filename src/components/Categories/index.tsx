import Category from './Category';
import categories from './categories';
import styles from './Categories.module.scss';

function Categories() {
    return (
        <div className={styles.categories}>
            {categories.map(category => 
                <Category
                    name={category.name}
                    icon={category.icon}
                    alt={category.alt}
                    active={category.active}
                    key={category.name}
                />
            )}
        </div>
    );
}

export default Categories;