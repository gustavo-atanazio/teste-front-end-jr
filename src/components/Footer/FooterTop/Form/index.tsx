import styles from './Form.module.scss';

function Form() {
    return (
        <form className={styles.form}>
            <p className={styles.headline}>
                Cadastre-se e receba nossas
                <strong>novidades e promoções</strong>
            </p>

            <p>
                Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
            </p>

            <div>
                <input type='email' placeholder='SEU EMAIL'/>

                <button type='submit'>OK</button>
            </div>
        </form>
    );
}

export default Form;