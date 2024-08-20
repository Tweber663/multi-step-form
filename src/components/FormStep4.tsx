import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/store";
import styles from './FormStep4.module.scss';
import { selectedAddOns } from "../store/features/addOnsSlicer";
import clsx from "clsx";
import { counting } from "../store/features/counterSlice";

type RefCheck = {
    triggerFunction: () => void; 
}
interface PropsCheck {
    pageOn: boolean
    changePlan: (e: boolean) => void; 
}

const FormStep4 = forwardRef<RefCheck, PropsCheck>(({changePlan, pageOn}, ref) => {
    const dispatch = useAppDispatch();
    const currentState = useAppSelector(state => state); 
    const moYrState = useAppSelector(state => state.monthlyYearly); 
    const [moYr, setMoYr] = useState(''); 
    
    const statePlan = currentState.totalCost
    const triggerFunction = () => {
        console.log('is this working?')
    };

    let totalPrice = currentState.totalCost.cost;
    const addOns = selectedAddOns(currentState.AddOns); 
    addOns.forEach((e) => {
        totalPrice += e!.cost;
    })

    useEffect(() => {
        moYrState === 'monthly'? setMoYr('mo') : setMoYr('yr');
    }, [moYrState])

    const handler = () => {
        dispatch(counting(2))
    }

    useImperativeHandle(ref, () => ({triggerFunction,}))

    return (
          <div className={clsx(styles.formStep4, pageOn && styles.show)}>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming</p>
            <div className={styles.mainWrapper}>
                <div className={styles.summaryWrapper}>
                    <div className={styles.textWrapper}>
                            
                            <div className={styles.planWrapper}>
                                <div className={styles.plan}>
                                    <h4>Arcade ({moYrState.charAt(0).toUpperCase() + moYrState.slice(1)})</h4>
                                    <h6 onClick={() => {
                                        handler();
                                        changePlan(true)
                                    }}>Change</h6>
                                </div>
                                <div className={styles.cost}>
                                    <h4>${statePlan.cost}/{moYr}</h4>
                                </div>
                            </div>
                         
                            {addOns.length && (
                                addOns.map((e) => (
                                    <div className={styles.addOnsWrapper}>
                                         <div className={styles.planAddOn}>
                                            <h6>{e!.plan}</h6>
                                        </div>
                                        <div className={styles.costAddOn}>
                                            <h4>+${e!.cost}/{moYr}</h4>
                                        </div>
                                    </div>
                                ))
                            )}
                    </div>
                </div>
                <div className={styles.totalWrapper}>
                    <div className={styles.planSummary}>
                        <h6>Total (per {moYrState})</h6>
                    </div>
                    <div className={styles.planAddOn}>
                        <h4>+${totalPrice}/{moYr}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default FormStep4; 