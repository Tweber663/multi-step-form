import styles from './StepsDash.module.scss'
import { useAppSelector } from '../store/store';
import clsx from 'clsx';
const StepsDash = () => {
    const currentState = useAppSelector(state => state);
 
    return (
            <div className={styles.stepsWrapper}>
                <ul>
                    <li>
                        <div className={clsx(styles.circle, currentState.counterReducer === 1 && styles.active)}><h4>1</h4></div>
                        <div className={styles.textWrapper}>
                            <h6>STEP 1</h6>
                            <h5>YOUR INFO</h5>
                        </div>
                    </li> 
                    <li>
                        <div className={clsx(styles.circle, currentState.counterReducer === 2 && styles.active)}><h4>2</h4></div>
                        <div className={styles.textWrapper}>
                            <h6>STEP 2</h6>
                            <h5>SELECT PLAN</h5>
                        </div>
                    </li> 
                    <li>
                        <div className={clsx(styles.circle, currentState.counterReducer === 3 && styles.active)}><h4>3</h4></div>
                        <div className={styles.textWrapper}>
                            <h6>STEP 3</h6>
                            <h5>ADD-ONS</h5>
                        </div>
                    </li> 
                    <li>
                        <div className={clsx(styles.circle, currentState.counterReducer === 4 && styles.active)}><h4>4</h4></div>
                        <div className={styles.textWrapper}>
                            <h6>STEP 4</h6>
                            <h5>SUMMARY</h5>
                        </div>
                    </li> 
                </ul>
            </div>
    )
}

export default StepsDash