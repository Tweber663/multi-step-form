import styles from './RightSection.module.scss';
import ButtonSection from './ButtonsSections';
import { FormEvent, useState, useRef, useCallback } from 'react';
import { useAppDispatch } from '../store/store';
import { counting } from '../store/features/counterSlice';
import FormStep1 from './FormStep1';
import { formRefrenceType } from './FormStep1';

const RightSection = () => {
    const dispatch = useAppDispatch(); 
    const [count, setCount] = useState<number>(1); 
    const [formVerified, setFormVerified] = useState(false);
    dispatch(counting(count)); 

    const form1RefTrigger = useRef<formRefrenceType>(null);

    // Use useCallback to memoize the verification logic
    const verificationLogic = useCallback((confirm?: string) => {
        console.log(confirm);
        form1RefTrigger.current?.verify(); 
    }, []);

    const buttonLogic = (e: FormEvent<HTMLButtonElement>): void => {
        const target = e.target as HTMLButtonElement; 
        if (target.value === 'next' && count < 4 ) {
            setCount(prev => prev + 1);
        } else if (target.value === 'back' && count > 1) {
            setCount(prev => prev - 1);
        }
    }

    return (
        <div className={styles.righSection}>
            <form>
                <FormStep1 verification={verificationLogic} ref={form1RefTrigger}/>
                <ButtonSection verification={verificationLogic} buttonFunction={buttonLogic}/>
            </form>
        </div>
    )
}

export default RightSection;
