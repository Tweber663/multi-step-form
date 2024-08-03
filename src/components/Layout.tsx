import { useAppSelector } from "../store/store"; 
import styles from './Layout.module.scss'; 
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Layout = () => {

    const state  = useAppSelector(state => state); 
    console.log(state)
    return (
        <div className={styles.layout}>
            <LeftSection/>
            <RightSection/>
        </div>
    )
}

export default Layout