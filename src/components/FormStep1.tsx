import styles from './FormStep1.module.scss'; 
import { useEffect, useState} from 'react'; 
import { forwardRef } from 'react';
import { useAppSelector, useAppDispatch } from '../store/store';
import { useImperativeHandle } from 'react';
import { checkingSteps } from '../store/features/formVerifySlice';
import { FC } from 'react';
import clsx from 'clsx';

export type formRefrenceType = {
    verify: () => void; 
}

type formProps = {verification: (e: string) => void}

const FormStep1 = forwardRef<formRefrenceType, formProps>(({verification}, ref) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [errOn, setErrOn] = useState(false); 
    const [isVerified, setisVerified] = useState(true)
    
    const confirm = () => {
        dispatch(checkingSteps({step1: true})); 
    }
    
     
    const verify = () => {
      if (!name) {
        console.log('Im getting triggerd')
        setisVerified(false); 
      }
    }

    verification('bla')


    useImperativeHandle(ref, () => ({
        verify
    }))

    return (
        <div className={styles.formStep1}>
            <h1>Personal info</h1>
            <p>Please provide your name, email address and phone number</p>
            
            <div className={styles.labelWrapper}>
                <label>Name</label>
                <label className={clsx(styles.errMsg, errOn && styles.errMsgVisible)}>'This field is required'</label>
            </div>
            <input onChange={((e) => {
                setName(e.target.value);
                verify();
            })} placeholder="e.g Agent Smith" type="text" name="" id="" />
            
            
            <label>Email Address</label>
            <input placeholder='e.g hello@hotmail.com' type="text" name="" id="" />
            <label>Phone Number</label>
            <input placeholder='e.g +44 4567872465' type="text" name="" id="" />
        </div>
    )
})

export default FormStep1