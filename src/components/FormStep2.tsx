
import styles from './FormStep2.module.scss';
import { useEffect, useState} from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useAppDispatch} from '../store/store';
import clsx from 'clsx';
import { billingType } from '../store/features/monthlyYearlySlicer';
import { useAppSelector } from '../store/store';
import { addCost } from '../store/features/totalPriceSlicer';
import { checkingSteps } from '../store/features/formVerifySlice';
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
        setIsChecked1(prev => {
            return !prev
        }); 
        setIsChecked2(false);
        setIsChecked3(false);
        !toggle? dispatch(addCost({cost: 9, plan: 'arcade'})) : dispatch(addCost({cost: 90, plan: 'arcade'}))
    } 
    const checkboxHandler2 = () => {
        setCurrent(2)
        setIsChecked2(prev => !prev); 
        setIsChecked3(false);
        setIsChecked1(false);
        !toggle? dispatch(addCost({cost: 12, plan: 'advanced'})) : dispatch(addCost({cost: 120, plan: 'advanced'}))
    } 
    const checkboxHandler3 = () => {
        setCurrent(3)
        setIsChecked3(prev => !prev); 
        setIsChecked2(false);
        setIsChecked1(false);
        !toggle? dispatch(addCost({cost: 15, plan: 'pro'})) : dispatch(addCost({cost: 150, plan: 'pro'}))
    } 

    useEffect(() => {
        if (current === 1) {
            !toggle? dispatch(addCost({cost: 9, plan: 'arcade'})) : dispatch(addCost({cost: 90, plan: 'arcade'}));
            dispatch(checkingSteps({step2: true}));
        } else if (current === 2) {
            !toggle? dispatch(addCost({cost: 12, plan: 'advanced'})) : dispatch(addCost({cost: 120, plan: 'advanced'}))
            dispatch(checkingSteps({step2: true}));
        } else if (current === 3) {
            !toggle? dispatch(addCost({cost: 15, plan: 'pro'})) : dispatch(addCost({cost: 150, plan: 'pro'}));
            dispatch(checkingSteps({step2: true}));
        } else {

        }
    }, [toggle])

    const triggerFunction = () => {
        if (isChecked1 === false && isChecked2 === false && isChecked3 === false){
            dispatch(checkingSteps({step2: false}))
            returnFunc(false, 2)
        } else {
            returnFunc(true, 2)
        }
    }

    useImperativeHandle(ref, () => ({
        triggerFunction,
    }));
 
    !toggle? dispatch(billingType('monthly')): dispatch(billingType('yearly'))

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
                        <div className={styles.yearlyWrapper}>
                        <h5>$9/mo</h5> 
                        </div>
                        :
                        <div className={styles.yearlyWrapper}>
                            <h5>$90/yr</h5>
                            <h6>2 months free</h6>
                        </div>}
                    </div>
                </div>
                <div onClick={checkboxHandler2} className={clsx(styles.box, isChecked2 && styles.advancedChecked)}>
                    <input type="checkbox" checked={isChecked2} name="advanced" id=""/>
                    <img className={styles.iconImg} src={`${process.env.PUBLIC_URL}/assets/images/icon-advanced.svg`} alt="" />
                    <div className={styles.boxTitleWrapper}>
                        <h4>Advanced</h4>
                        {currentState.monthlyYearly === 'monthly'?  
                        <div className={styles.yearlyWrapper}>
                        <h5>$12/mo</h5> 
                        </div>
                        :
                        <div className={styles.yearlyWrapper}>
                            <h5>$120/yr</h5>
                            <h6>2 months free</h6>
                        </div>}
                    </div>
                </div>
                <div onClick={checkboxHandler3} className={clsx(styles.box, isChecked3 && styles.proChecked)}>
                    <input type="checkbox" checked={isChecked3} name="pro" id=""/>
                    <img className={styles.iconImg} src={`${process.env.PUBLIC_URL}/assets/images/icon-pro.svg`} alt="" />
                    <div className={styles.boxTitleWrapper}>
                        <h4>Pro</h4>
                        {currentState.monthlyYearly === 'monthly'?  
                        <div className={styles.yearlyWrapper}>
                        <h5>$15/mo</h5> 
                        </div>
                        :
                        <div className={styles.yearlyWrapper}>
                            <h5>$150/yr</h5>
                            <h6>2 months free</h6>
                        </div>}
                    </div>
                </div>
            </div>

            <div className={styles.radioWrapper}>
                <h4 className={clsx(currentState.monthlyYearly === "monthly" && styles.selected)}>Monthly</h4>
                    <label className={styles.switch}>
                        <input onChange={() => {
                                setToggle(!toggle)
                        }} className={clsx(styles.checkboxInput)} name="switch" type="checkbox"/>
                        <span className={clsx(styles.slider, styles.round)}></span>
                    </label>
                <h4 className={clsx(currentState.monthlyYearly !== "monthly" && styles.selected)}>Yearly</h4>
            </div>
           
        </div>
        
    )
})

export default FormStep2;
