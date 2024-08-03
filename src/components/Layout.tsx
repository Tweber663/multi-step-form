import { useAppSelector } from "../store/store"; 
import styles from './Layout.module.scss'; 

const Layout = () => {

    const state  = useAppSelector(state => state); 
    console.log(state)
    return (
        <div className={styles.layout}>
            <div className={styles.leftSection}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-desktop.svg`} alt="" />
            </div>

            <div className={styles.righSection}>

            </div>
        </div>
    )
}

export default Layout