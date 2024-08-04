import styles from './ButtonSections.module.scss'
import { FormEvent, FC } from 'react';

interface btnInterface {
    buttonFunction: (e: FormEvent<HTMLButtonElement>) => void;
    verification: () => void; 
}

const ButtonSection:FC<btnInterface> = ({buttonFunction, verification}) => {

    const buttonHandler = (e: FormEvent<HTMLButtonElement>) => {
        buttonFunction(e);
        verification(); 
    }

    return (
        <div className={styles.buttonSection}>
            <button 
                onClick={(e) => buttonHandler(e)}
                value="back"
                type="button" 
                className={styles.btnBack}> 
                Go Back
            </button>
            <button 
                onClick={(e) => buttonHandler(e)} 
                value="next"
                type="button" 
                className={styles.btnNext}> 
                Next Step 
            </button>
        </div>
    )
}

export default ButtonSection