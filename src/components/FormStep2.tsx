import styles from './FormStep2.module.scss';
import { useState} from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useAppDispatch} from '../store/store';
import { checkingSteps } from '../store/features/formVerifySlice';
import clsx from 'clsx';
import Form from 'react-bootstrap/Form';

// Define the props interface
export interface Checking {
    triggerFunction: () => void; 
}

interface propsCheck {
    returnFunc: (e: boolean, b: number) => void; 
    pageOn: boolean
}

const FormStep2 = forwardRef<Checking, propsCheck>(({returnFunc, pageOn}, ref) => {
    const dispatch = useAppDispatch();
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const checkArr: boolean[] = [isChecked1, isChecked2, isChecked3];


    const checkboxHandler1 = () => {
        setIsChecked1(prev => !prev); 
        setIsChecked2(false);
        setIsChecked3(false);

    } 
    const checkboxHandler2 = () => {
        setIsChecked2(prev => !prev); 
        setIsChecked3(false);
        setIsChecked1(false);
    } 
    const checkboxHandler3 = () => {
        setIsChecked3(prev => !prev); 
        setIsChecked2(false);
        setIsChecked1(false);
    } 

    const triggerFunction = () => {
       
        return false; 
    }

    const boxCheckHandler = () => {
       
    }

    
    useImperativeHandle(ref, () => ({
        triggerFunction,
    }));

    console.log(pageOn)
    return (
        <div className={clsx(styles.formStep2, pageOn && styles.show)}>
              <h1>Select your plan</h1>
              <p>You have the option of monthly or yearly billing.</p>
            <div onClick={boxCheckHandler} className={styles.checkBoxWrapper}>
                <div onClick={checkboxHandler1} className={clsx(styles.box, isChecked1 && styles.arcadeChecked)}>
                    <input type="checkbox" checked={isChecked1} name="arcade" id=""/>
                </div>
                <div onClick={checkboxHandler2} className={clsx(styles.box, isChecked2 && styles.advancedChecked)}>
                    <input type="checkbox" checked={isChecked2} name="advanced" id=""/>
                </div>
                <div onClick={checkboxHandler3} className={clsx(styles.box, isChecked3 && styles.proChecked)}>
                    <input type="checkbox" checked={isChecked3} name="pro" id=""/>
                </div>
            </div>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            </div>

           
           
        </div>
        
    )
})

export default FormStep2;
