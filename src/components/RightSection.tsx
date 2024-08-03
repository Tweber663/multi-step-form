import styles from './RightSection.module.scss';
import ButtonSection from './ButtonsSections';
const RightSection = () => {



    return (
        <div className={styles.righSection}>
            <form>
                <ButtonSection/>
            </form>
        </div>
    )
}

export default RightSection; 