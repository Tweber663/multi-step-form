import styles from './RightSection.module.scss';
import ButtonSection from './ButtonsSections';
import { useEffect, useState, useRef } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import { Checking } from './FormStep1';
import { refChecking } from './ButtonsSections';
import { compileString } from 'sass';

export type confirmInter = {
    form1?: boolean;
    form2?: boolean; 
}

const RightSection = () => {
    const [refresh, setRefresh] = useState(false);
    

    const refForm = useRef<Checking>(null); 
    const refButtonSection = useRef<refChecking>(null)

    const connection = (e: boolean = false, counter: number) => {
       if (e === true && refForm.current && counter === 1) {
        refForm.current.triggerFunction(); 
       }

       if (e === true && refForm.current && counter === 2) {
        refForm.current.triggerFunction(); 
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


    const switchingForms = (form: boolean = false, counter: number) => {
        refForm.current!.changePage(form);
    }

    return (
        <div className={styles.righSection}>
            <form>
                <FormStep1  returnFunc={retrunFromOne} ref={refForm}/>
                {/* <FormStep2 /> */}
                <ButtonSection switchForm1={switchingForms} ref={refButtonSection} parentTrigger={connection} />
            </form>
        </div>
    )
}

export default RightSection;
