import styles from './LeftSection.module.scss'
import clsx from 'clsx';
import StepsDash from './StepsDash';
const LeftSection = () => {



    return (
        <div className={styles.leftSection}>
             <StepsDash/>
             <img src={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-desktop.svg`} alt="" />
        </div>
    )
}

export default LeftSection; 