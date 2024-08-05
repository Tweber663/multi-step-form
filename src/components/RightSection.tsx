import styles from './RightSection.module.scss';
import ButtonSection from './ButtonsSections';
import { useEffect, useState, useRef } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import { Checking } from './FormStep1';

export type confirmInter = {
    form1?: boolean;
    form2?: boolean; 
}

const RightSection = () => {
    const [refresh, setRefresh] = useState(false);
    

    const refFormOne = useRef<Checking>(null); 
    const connection = (e: boolean = false) => {
       if (e === true && refFormOne.current) {
        refFormOne.current.triggerFunction(); 
       }
    }


    return (
        <div className={styles.righSection}>
            <form>
                <FormStep1 ref={refFormOne}/>
                {/* <FormStep2/> */}
                <ButtonSection parentTrigger={connection} />
            </form>
        </div>
    )
}

export default RightSection;
