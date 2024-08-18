import styles from './RightSection.module.scss';
import ButtonSection from './ButtonsSections';
import { useEffect, useState, useRef } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import { Checking } from './FormStep1';
import { refChecking } from './ButtonsSections';
import { useAppSelector } from '../store/store';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export type confirmInter = {
    form1?: boolean;
    form2?: boolean; 
}

const RightSection = () => {
    const [refresh, setRefresh] = useState(false);
    const currentState = useAppSelector(state => state)
    const refForm1 = useRef<Checking>(null); 
    const refForm2 = useRef<Checking>(null); 
    const refButtonSection = useRef<refChecking>(null)
    const [pageOn1, setPageOn1] = useState(false); 
    const [pageOn2, setPageOn2] = useState(false); 
    const [pageOn3, setPageOn3] = useState(false); 
    const [pageOn4, setPageOn4] = useState(false); 


    useEffect(() => {
        currentState.counterReducer === 1?  setPageOn1(true) : setPageOn1(false) 
        currentState.counterReducer === 2?  setPageOn2(true) : setPageOn2(false) 

    }, [currentState.counterReducer])

    const connection = (e: boolean = false, counter: number) => {
        console.log('hey I got tirggerd')

       if (e === true && refForm1.current && counter === 1) {
        refForm1.current.triggerFunction(); 
       }

       if (e === true && refForm2.current && counter === 2) {
        refForm2.current.triggerFunction(); 
       }

    }

    // transfering Form verify request between button and form
    const retrunFromOne = (e: boolean, formNumber: number) => {
        if (refButtonSection.current && formNumber === 1) {
            refButtonSection.current.returnVeirfyRequest(e, formNumber); 
        }
        if (refButtonSection.current && formNumber === 2) {
            refButtonSection.current.returnVeirfyRequest(e, formNumber); 
        }
    }


    return (
        <div className={styles.righSection}>
            <form>
                <FormStep1 pageOn={pageOn1}  returnFunc={retrunFromOne} ref={refForm1}/>
                <FormStep2 pageOn={pageOn2} returnFunc={retrunFromOne} ref={refForm2}/>
                <ButtonSection ref={refButtonSection} parentTrigger={connection} />
            </form>
        </div>
    )
}

export default RightSection;
