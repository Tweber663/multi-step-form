
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { checkingSteps } from "../store/features/formVerifySlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { currentAddOns } from "../store/features/addOnsSlicer";
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
       addOnOne === true?  dispatch(currentAddOns({addOn1: true})) : dispatch(currentAddOns({addOn1: false})); 
       addOnTwo === true?  dispatch(currentAddOns({addOn2: true})) : dispatch(currentAddOns({addOn2: false})); 
       addOnThree === true?  dispatch(currentAddOns({addOn3: true})) : dispatch(currentAddOns({addOn3: false})); 
    }, [addOnOne, addOnTwo, addOnThree])

    console.log(currentState);

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
                    <h6>Access to multiplayer games</h6>
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
                    <h6>Extra 1TB of cloud save</h6>
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
                    <h4>Online service</h4>
                    <h6>Access to multiplayer games</h6>
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