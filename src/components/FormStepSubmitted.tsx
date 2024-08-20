import styles from './FormStepSubmitted.module.scss'

const FormStepSubmitted = () => {
    
    
    return (
        <div className={styles.formStepSubmitted}>
           <img src={`${process.env.PUBLIC_URL}/assets/images/icon-thank-you.svg`} alt="" />
           <h1>Thank you!</h1>
           <h6>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</h6>
        </div>
    )
}

export default FormStepSubmitted; 