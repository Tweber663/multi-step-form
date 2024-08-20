import styles from './RightSection.module.scss';
import ButtonSection from './ButtonsSections';
import { useEffect, useState, useRef } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FormStepSubmitted from './FormStepSubmitted';
import { Checking } from './FormStep1';
import { refChecking } from './ButtonsSections';
import { useAppSelector } from '../store/store';
import { FormEvent } from 'react';
import clsx from 'clsx';

export type confirmInter = {
    form1?: boolean;
    form2?: boolean; 
}

const RightSection = () => {
    const currentState = useAppSelector(state => state)
    const refForm1 = useRef<Checking>(null); 
    const refForm2 = useRef<Checking>(null); 
    const refForm3 = useRef<Checking>(null); 
    const refForm4 = useRef<Checking>(null); 
    const refButtonSection = useRef<refChecking>(null)
    const [pageOn1, setPageOn1] = useState(false); 
    const [pageOn2, setPageOn2] = useState(false); 
    const [pageOn3, setPageOn3] = useState(false); 
    const [pageOn4, setPageOn4] = useState(false); 
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        currentState.counterReducer === 1?  setPageOn1(true) : setPageOn1(false) 
        currentState.counterReducer === 2?  setPageOn2(true) : setPageOn2(false) 
        currentState.counterReducer === 3?  setPageOn3(true) : setPageOn3(false) 
        currentState.counterReducer === 4?  setPageOn4(true) : setPageOn4(false)
    }, [currentState.counterReducer])
    
    const changePlan = (e: boolean) => {
        refButtonSection.current!.changeCounter!();
    }

    /*'next btn' triggers this function passing current count. Based on the count, a 
    'triggerFunction' function is activated in a particular form */
    const connection = (e: boolean = false, counter: number) => {
        console.log('hey I got tirggerd')

       if (e === true && refForm1.current && counter === 1) {
        refForm1.current.triggerFunction(); 
       }

       if (e === true && refForm2.current && counter === 2) {
        refForm2.current.triggerFunction(); 
       }
       
       if (e === true && refForm3.current && counter === 3) {
        refForm3.current.triggerFunction(); 
       }

       if (e === true && refForm4.current && counter === 4) {
        console.log('attempting to trigger form 4')
        refForm4.current.triggerFunction(); 
       }
    }

    // transfering Form verify request between button and form
    const retrunConfirm = (e: boolean, formNumber: number) => {
        if (refButtonSection.current && formNumber === 1) {
            refButtonSection.current.returnVeirfyRequest(e, formNumber); 
        }
        if (refButtonSection.current && formNumber === 2) {
            refButtonSection.current.returnVeirfyRequest(e, formNumber); 
        }
        if (refButtonSection.current && formNumber === 3) {
            refButtonSection.current.returnVeirfyRequest(e, formNumber); 
        }
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        setFormSubmitted(true); 
    }


    return (
        <div className={styles.righSection}>
            <form onSubmit={submitHandler}>
                <div className={clsx(formSubmitted && styles.submitted)}>
                    <FormStep1 pageOn={pageOn1}  returnFunc={retrunConfirm} ref={refForm1}/>
                    <FormStep2 pageOn={pageOn2} returnFunc={retrunConfirm} ref={refForm2}/>
                    <FormStep3 pageOn={pageOn3} returnFunc={retrunConfirm} ref={refForm3}/>
                    <FormStep4 pageOn={pageOn4} ref={refForm4} changePlan={changePlan}/>
                    <ButtonSection ref={refButtonSection} parentTrigger={connection} />
                </div>
                <div className={clsx(!formSubmitted && styles.submitted)}> 
                    <FormStepSubmitted/>
                </div>
            </form>
        </div>
    )
}

export default RightSection;
