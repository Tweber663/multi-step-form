
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { checkingSteps } from "../store/features/formVerifySlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { currentAddOns } from "../store/features/addOnsSlicer";
import { addCost } from "../store/features/totalPriceSlicer";
import styles from './FormStep3.module.scss';
import clsx from "clsx";

interface PropsCheck {
    pageOn: boolean;
    returnFunc: (a: boolean, b: number) => void;
}

interface RefCheck {
    triggerFunction: () => void;
}

const FormStep3 = forwardRef<RefCheck, PropsCheck>(({pageOn, returnFunc}, ref) => {
    const dispatch = useAppDispatch(); 
    const currentState = useAppSelector(state => state)
    const [addOnOne, setAddOnOne] = useState(false);
    const [addOnTwo, setAddOnTwo] = useState(false);
    const [addOnThree, setAddOnThree] = useState(false); 
    
    const triggerFunction = () => {
        dispatch(checkingSteps({step3: true})); 
        returnFunc(true, 3)
    }

    useImperativeHandle(ref, () => ({
        triggerFunction, 
    }))

    useEffect(() => {
      addOnOne? dispatch(currentAddOns({addOn1: {active: true, cost: currentState.monthlyYearly === 'monthly'? 1 : 10}})) : dispatch(currentAddOns({addOn1: {active: false, cost: 0}}))
      addOnTwo? dispatch(currentAddOns({addOn2: {active: true, cost: currentState.monthlyYearly === 'monthly'? 2 : 20}})) : dispatch(currentAddOns({addOn2: {active: false, cost: 0}}))
      addOnThree? dispatch(currentAddOns({addOn3: {active: true, cost: currentState.monthlyYearly === 'monthly'? 2 : 20}})) : dispatch(currentAddOns({addOn3: {active: false, cost: 0}}))
    }, [addOnOne, addOnTwo, addOnThree, currentState.monthlyYearly])


    
    return (
        <div className={clsx(styles.formStep3, pageOn && styles.show)}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div className="checkBoxWrapper">

            <div className={clsx(styles.box, styles.box1, addOnOne && styles.selected)}>
            <div onClick={() => {
                setAddOnOne(prev => !prev); 
            }} className={styles.layer}></div>
                <div className={styles.inputWrapper}>
                    <input checked={addOnOne} type="checkbox"/>
                </div>
                <div className={styles.textWrapper}>
                    <h4>Online service</h4>
                    <h5>Access to multiplayer games</h5>
                </div>
                <div className={styles.priceWrapper}>
                    {currentState.monthlyYearly === 'monthly'? 
                    <h5>+$1/mo</h5> 
                    : 
                    <h5>+$10/yr</h5>}  
                </div>
            </div>

            <div className={clsx(styles.box, styles.box2, addOnTwo && styles.selected)}>
            <div onClick={() => setAddOnTwo(prev => !prev)} className={styles.layer}></div>
                <div className={styles.inputWrapper}>
                    <input checked={addOnTwo} type="checkbox"/>
                </div>
                <div className={styles.textWrapper}>
                    <h4>Larger storage</h4>
                    <h5>Extra 1TB of cloud save</h5>
                </div>
                <div className={styles.priceWrapper}>
                    {currentState.monthlyYearly === 'monthly'? 
                    <h5>+$2/mo</h5> 
                    : 
                    <h5>+$20/yr</h5>}  
                </div>
            </div>

            <div className={clsx(styles.box, styles.box3)}>
            <div onClick={() => setAddOnThree(prev => !prev)} className={styles.layer}></div>
                <div className={styles.inputWrapper}>
                    <input checked={addOnThree} type="checkbox"/>
                </div>
                <div className={styles.textWrapper}>
                    <h4>Customizable profile</h4>
                    <h5>Custom theme on your profile</h5>
                </div>
                <div className={styles.priceWrapper}>
                    {currentState.monthlyYearly === 'monthly'? 
                    <h5>+$2/mo</h5> 
                    : 
                    <h5>+$20/yr</h5>}  
                </div>
            </div>
        </div>
  </div>
    );
});

// Export the component
export default FormStep3;