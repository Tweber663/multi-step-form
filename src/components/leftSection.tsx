import styles from './LeftSection.module.scss'
const LeftSection = () => {
    return (
        <div className={styles.leftSection}>
             <img src={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-desktop.svg`} alt="" />
        </div>
    )
}

export default LeftSection; 