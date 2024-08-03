import styles from './RightSection.module.scss'
const RightSection = () => {



    return (
        <div className={styles.righSection}>

            <form>
                <input type="text" />

                <div className="buttonWrapper">
                    <button type="submit"> Go Back</button>
                    <button type="button"> Next </button>
                </div>
            </form>
        </div>
    )
}

export default RightSection; 