import styles from './FormStep2.module.scss'; 
import { useState} from 'react'; 
import { forwardRef } from 'react';
import { useAppDispatch } from '../store/store';
import { useImperativeHandle } from 'react';
import { checkingSteps } from '../store/features/formVerifySlice';
import clsx from 'clsx';
import { confirmInter } from './RightSection';

export type formRefrenceType = {
    verify: () => void; 
}

type pageVerify = {
    nextPage: boolean; 
}


const FormStep2 = forwardRef<formRefrenceType, pageVerify>(({nextPage}, ref) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [errOn1, setErrOn1] = useState(false); 
    const [errOn2, setErrOn2] = useState(false); 
    const [errOn3, setErrOn3] = useState(false); 
    const [isVerified, setisVerified] = useState(true)
    
    const confirm = () => {
        dispatch(checkingSteps({step2: true})); 
    }
    
    const verify = () => {
    let noErros = true; 
      if (!name) {
        // console.log('Name form: this field is required')
        setErrOn1(true); 
        noErros = false;
      } else {
        setErrOn1(false); 
      }


      if(!email) {
        setErrOn2(true); 
        // console.log('Email inpuit: this field is required')
        noErros = false;
      } else {
        setErrOn2(false); 
      }

      if(!number) {
        setErrOn3(true); 
        // console.log('Number input: this field is required'); 
        noErros = false;
      } else {
        setErrOn3(false)
      }
      
      if (noErros) confirm(); 
    }


    useImperativeHandle(ref, () => ({
        verify
    }))


    return (
        <div className={clsx(styles.formStep2, nextPage && styles.nextPage)}>
            <h1>Personal info</h1>
            <p>Please provide your name, email address and phone number</p>
            
            <div className={styles.labelWrapper}>
                <label>Name</label>
                <label  className={clsx(styles.errMsg, errOn1 && styles.errMsgVisible)}>This field is required</label>
            </div>
            <input onChange={((e) => setName(e.target.value))} placeholder="e.g Agent Smith" type="text" name="" id="" />
          
          
            <div className={styles.labelWrapper}>
                <label>Email Address</label>
                <label  className={clsx(styles.errMsg, errOn2 && styles.errMsgVisible)}>This field is required</label>
            </div>
            <input onChange={((e) => setEmail(e.target.value))} placeholder='e.g hello@hotmail.com' type="text" name="" id="" />
           
           
            <div className={styles.labelWrapper}>
                <label>Phone Number</label>
                <label  className={clsx(styles.errMsg, errOn3 && styles.errMsgVisible)}>This field is required</label>
            </div>
            <input onChange={((e) => setNumber(e.target.value))} placeholder='e.g +44 4567872465' type="text" name="" id="" />
        </div>
    )
})

export default FormStep2