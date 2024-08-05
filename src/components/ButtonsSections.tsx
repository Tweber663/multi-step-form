import styles from './ButtonSections.module.scss'
import { FC, useEffect } from 'react';
import { counting } from '../store/features/counterSlice';
import { useAppSelector, useAppDispatch } from '../store/store';
import { useState } from 'react';

type Checking = {
    parentTrigger: (e: boolean) => void; 
}

const ButtonSection:FC<Checking> = ({parentTrigger}) => {
    
    let currentState = useAppSelector(state => state); 
    const dispatch = useAppDispatch()
    const [counter, setCounter] = useState<number>(1)
    const [errDetect, setErrDetect] = useState(false); 

 
    useEffect(() => {
        dispatch(counting(counter))
    }, [counter, currentState])


    const plus = () => {
        setCounter(prev => {
            let check = prev; 
            if (prev !< 4 && errDetect === false) check = prev + 1; 
            return check; 
        })
    }
    const minus = () => {
        setCounter(prev => {
            let check = prev;
            if (prev !> 1 && errDetect === false) check = prev - 1;
            console.log('CHECK', check)
            return check 
        })
    }

    //Stops the counter from going forward if error is detected
    console.log("COUNTER:", counter)
    useEffect(() => {
        if (counter === 1 && currentState.verifyRedcuer.step1 === true && errDetect) {
            console.log('no erros'); 
            setErrDetect(false); 
            setCounter(prev => prev + 1); 
        } else if (counter === 1 && currentState.verifyRedcuer.step1 === false) {
            setErrDetect(true); 
        } 


    }, [plus, minus, counter, errDetect])


    //If the counter stopped sent's a trigged to parent element to activate form check
    const triggerHandler = () => {
        if (counter === 1 && currentState.verifyRedcuer.step1 === false) {
            parentTrigger(true); 
        } 


    }

    console.log('BtnSectionCurrentState:', currentState);


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
                    plus();
                    triggerHandler();
                }}
                value="next"
                type="button" 
                className={styles.btnNext}> 
                Next Step 
            </button>
        </div>
    )
}

export default ButtonSection