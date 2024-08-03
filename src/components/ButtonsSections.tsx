import styles from './ButtonSections.module.scss'
import { FormEvent } from 'react';

const ButtonSection = () => {

    const buttonHandler = (e: FormEvent<HTMLButtonElement>) => {
        console.log(e);
    }

    return (
        <div className={styles.buttonSection}>
            <button 
                onClick={(e) => buttonHandler(e)}
                type="button" 
                className={styles.btnBack}> 
                Go Back
            </button>
            <button 
                onClick={(e) => buttonHandler(e)} 
                type="button" 
                className={styles.btnNext}> 
                Next Step 
            </button>
        </div>
    )
}

export default ButtonSection