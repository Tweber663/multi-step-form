import styles from './LeftSection.module.scss'
import ButtonSection from './ButtonsSections';
const LeftSection = () => {
    return (
        <div className={styles.leftSection}>
             <img src={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-desktop.svg`} alt="" />
             <div className={styles.stepsWrapper}>

              
             </div>
        </div>
    )
}

export default LeftSection; 