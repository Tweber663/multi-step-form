import styles from './ButtonSections.module.scss'
import { FC, useEffect } from 'react';
import { counting } from '../store/features/counterSlice';
import { useAppSelector, useAppDispatch } from '../store/store';
import { useState } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';

type Checking = {
    parentTrigger: (e: boolean, b: number) => void; 
    // switchForm1: (e: boolean, counter: number) => void;
}

export interface refChecking {
    returnVeirfyRequest: (e: boolean, formNumber: number) => void
}

const ButtonSection = forwardRef<refChecking, Checking>(({parentTrigger}, ref) => {
    
    let currentState = useAppSelector(state => state); 
    const dispatch = useAppDispatch()
    const [counter, setCounter] = useState<number>(1)
    useEffect(() => {
        dispatch(counting(counter))
    }, [counter, currentState])



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
    }

    //2. Retunrs back confirmation from requested form
    // false = form has erros,  / true = form found no erros 
    let formVerified = false; 
    const returnVeirfyRequest = (e: boolean, formNumber: number) => {
        console.log(`Form ${formNumber} has returned:`, e)
        if (e === true) formVerified = true; 
        if (e === false) formVerified = false; 
    }

    //3.If the verify retunrs true, it triggers and increments counter++ 
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


    // responsbile for travelling 
    useImperativeHandle(ref, () => ({
        returnVeirfyRequest
    }));


    return (
        <div className={styles.buttonSection}>
            <button
                onClick={minus}
                value="back"
                type="button" 
                className={styles.btnBack}> 
                Go Back
            </button>
            <button 
                onClick={() => {
                    triggerHandler();
                    plus()
                }}
                value="next"
                type="button" 
                className={styles.btnNext}> 
                Next Step 
            </button>
        </div>
    )
})

export default ButtonSection