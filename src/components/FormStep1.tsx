import styles from './FormStep1.module.scss';
import { useState} from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useAppDispatch} from '../store/store';
import { checkingSteps } from '../store/features/formVerifySlice';
import clsx from 'clsx';

// Define the props interface
export interface Checking {
    triggerFunction: () => void; 
    changePage: (e: boolean) => void; 
}

interface propsCheck {
    returnFunc: (e: boolean, b: number) => void; 
    pageOn: boolean;
}

const FormStep1 = forwardRef<Checking, propsCheck>(({returnFunc, pageOn}, ref) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [errOn1, setErrOn1] = useState(false); 
    const [errOn2, setErrOn2] = useState(false); 
    const [errOn3, setErrOn3] = useState(false); 
    const [pageSwapNext, setPageSwapNext] = useState(false); 



    const triggerFunction = () => {        //First loop checks if "ANY" inptus are empty
        if (!name || !email || !number) {
            //Checks if all inputs are empty. 
            if (!name && !email && !number) {
                console.log('ERROR: All needs filled in')
                setErrOn1(true); 
                setErrOn2(true); 
                setErrOn3(true); 
            } 
            !name ? setErrOn1(true) : setErrOn1(false); 
            !email? setErrOn2(true) : setErrOn2(false); 
            !number? setErrOn3(true) : setErrOn3(false);

            returnFunc(false, 1); 
            dispatch(checkingSteps({step1: false}))
        } else {
            dispatch(checkingSteps({step1: true}))
            returnFunc(true, 1); 
            setErrOn1(false); 
            setErrOn2(false); 
            setErrOn3(false); 
        }
    }


    const changePage = (e: boolean = false) => {
        console.log('changePage function has been triggered:', e); 
        setPageSwapNext(e)
    }
    
    useImperativeHandle(ref, () => ({
        triggerFunction,
        changePage,
    }));

    return (
        <div className={clsx(styles.formStep1, pageOn && styles.show)}>
            <h1>Personal info</h1>
            <p>Please provide your name, email address and phone number</p>
            
            <div className={styles.labelWrapper}>
                <label>Name</label>
                <label className={clsx(styles.errMsg, errOn1 && styles.errMsgVisible)}>This field is required</label>
            </div>
            <input onChange={((e) => setName(e.target.value))} placeholder="e.g Agent Smith" type="text" name="" id="" />
          
            <div className={styles.labelWrapper}>
                <label>Email Address</label>
                <label className={clsx(styles.errMsg, errOn2 && styles.errMsgVisible)}>This field is required</label>
            </div>
            <input onChange={((e) => setEmail(e.target.value))} placeholder='e.g hello@hotmail.com' type="text" name="" id="" />
           
            <div className={styles.labelWrapper}>
                <label>Phone Number</label>
                <label className={clsx(styles.errMsg, errOn3 && styles.errMsgVisible)}>This field is required</label>
            </div>
            <input onChange={((e) => setNumber(e.target.value))} placeholder='e.g +44 4567872465' type="text" name="" id="" />
        </div>
    )
})

export default FormStep1;
