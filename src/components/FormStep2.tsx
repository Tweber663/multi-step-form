
import styles from './FormStep2.module.scss';


import { useEffect, useState} from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useAppDispatch} from '../store/store';
import clsx from 'clsx';
import { billingType } from '../store/features/monthlyYearlySlicer';
import { useAppSelector } from '../store/store';
import { addCost } from '../store/features/totalPriceSlicer';
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
    const currentState = useAppSelector(state => state)
    const [current, setCurrent] = useState(0)
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [toggle, setToggle] = useState(false);
    const checkArr: boolean[] = [isChecked1, isChecked2, isChecked3];


    const checkboxHandler1 = () => {
        setCurrent(1)
        setIsChecked1(prev => !prev); 
        setIsChecked2(false);
        setIsChecked3(false);
        !toggle? dispatch(addCost(9)) : dispatch(addCost(90))
    } 
    const checkboxHandler2 = () => {
        setCurrent(2)
        setIsChecked2(prev => !prev); 
        setIsChecked3(false);
        setIsChecked1(false);
        !toggle? dispatch(addCost(12)) : dispatch(addCost(120))
    } 
    const checkboxHandler3 = () => {
        setCurrent(3)
        setIsChecked3(prev => !prev); 
        setIsChecked2(false);
        setIsChecked1(false);
        !toggle? dispatch(addCost(15)) : dispatch(addCost(150))
    } 

    const triggerFunction = () => {
        return false; 
    }

    useEffect(() => {
        if (current === 1) {
            !toggle? dispatch(addCost(9)) : dispatch(addCost(90))
        } else if (current === 2) {
            !toggle? dispatch(addCost(12)) : dispatch(addCost(120))
        } else {
            !toggle? dispatch(addCost(15)) : dispatch(addCost(150))
        }
    }, [toggle])

    useImperativeHandle(ref, () => ({
        triggerFunction,
    }));
 
    !toggle? dispatch(billingType('monthly')): dispatch(billingType('yearly'))
    console.log(currentState)
    return (
        <div className={clsx(styles.formStep2, pageOn && styles.show)}>
              <h1>Select your plan</h1>
              <p>You have the option of monthly or yearly billing.</p>
            <div className={styles.checkBoxWrapper}>
                <div onClick={checkboxHandler1} className={clsx(styles.box, isChecked1 && styles.arcadeChecked)}>
                    <input type="checkbox" checked={isChecked1} name="arcade" id=""/>
                    <img className={styles.iconImg} src={`${process.env.PUBLIC_URL}/assets/images/icon-arcade.svg`} alt="" />
                    <div className={styles.boxTitleWrapper}>
                        <h4>Arcade</h4>
                        {currentState.monthlyYearly === 'monthly'?  
                        <h5>$9/mo</h5> 
                        :
                        <div className={styles.yearlyWrapper}>
                            <h5>$90/yr</h5>
                            <h6>2 months free</h6>
                        </div>}
                    </div>
                </div>
                <div onClick={checkboxHandler2} className={clsx(styles.box, isChecked2 && styles.advancedChecked)}>
                    <input type="checkbox" checked={isChecked2} name="advanced" id=""/>
                </div>
                <div onClick={checkboxHandler3} className={clsx(styles.box, isChecked3 && styles.proChecked)}>
                    <input type="checkbox" checked={isChecked3} name="pro" id=""/>
                </div>
            </div>

            <div className={styles.radioWrapper}>
                <label className={styles.switch}>
                    <input onChange={() => {
                            setToggle(!toggle)
                    }} className={clsx(styles.checkboxInput)} name="switch" type="checkbox"/>
                    <span className={clsx(styles.slider, styles.round)}></span>
                </label>
            </div>
           
        </div>
        
    )
})

export default FormStep2;
