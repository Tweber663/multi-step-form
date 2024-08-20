import styles from './ButtonSections.module.scss'
import { FormEvent, useEffect } from 'react';
import { counting } from '../store/features/counterSlice';
import { useAppSelector, useAppDispatch } from '../store/store';
import { useState } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import clsx from 'clsx';

type Checking = {
    parentTrigger: (e: boolean, b: number) => void; 
    // switchForm1: (e: boolean, counter: number) => void;
}

export interface refChecking {
    returnVeirfyRequest: (e: boolean, formNumber: number) => void;
    changeCounter?: () => void; 
}

const ButtonSection = forwardRef<refChecking, Checking>(({parentTrigger}, ref) => {
    
    let currentState = useAppSelector(state => state); 
    const dispatch = useAppDispatch()
    const [counter, setCounter] = useState<number>(1)
    useEffect(() => {
        dispatch(counting(counter))
    }, [counter])

    //1.Requesting Form verification based on current step counter
    const triggerHandler = () => {
        if (counter === 1) {
            console.log('request have been sentto from 1')
            parentTrigger(true, counter); 
        }
        if (counter === 2) {
            console.log('request have been sentto from 2')
            parentTrigger(true, counter); 
        }
        if (counter === 3) {
            console.log('request have been sentto from 3')
            parentTrigger(true, counter); 
        }
        if (counter === 4) {
            console.log('request have been sentto from 4')
            parentTrigger(true, counter); 
        }
    }

    //2. Retunrs back confirmation from requested form
    // false = form has erros,  / true = form found no erros 
    let formVerified = false; 
    const returnVeirfyRequest = (e: boolean, formNumber: number) => {
        console.log(`Form ${formNumber} has returned:`, e)
        if (e === true) formVerified = true; 
        if (e === false) formVerified = false; 
    }

    //3.If the verify retunrs false (no erros), it triggers and increments counter++ 
    const plus = () => {
        if (formVerified === true) {
            setCounter(prev => {
                let count = prev; 
                if (prev < 4) count = prev + 1
                return count; 
            })
        }
    }

    //Viceversa applies to decrements
    const minus = () => {
        setCounter(prev => {
            let count = prev;
            if (prev > 1)  count = prev - 1;
            return count;
        });
    }

    const changeCounter = () => setCounter(2);

    // responsbile for travelling 
    useImperativeHandle(ref, () => ({
        changeCounter,
        returnVeirfyRequest, 
    }));


    return (
        <div className={styles.buttonSection}>
            <button
                onClick={minus}
                value="back"
                type="button" 
                className={clsx(styles.btnBack, counter === 1 && styles.hide)}> 
                Go Back
            </button>
            <button 
                onClick={() => {
                    triggerHandler();
                    plus()
                }}
                value="next"
                type="button" 
                className={clsx(styles.btnNext, counter === 4 && styles.hide)}> 
                Next Step
            </button>
            <button 
                onClick={() => triggerHandler()}
                value="next"
                type="submit" 
                className={clsx(styles.btnConfirm, counter === 4 && styles.confirm)}> 
                Confirm
            </button>
        </div>
    )
})

export default ButtonSection