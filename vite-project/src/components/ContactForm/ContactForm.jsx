import Button from '../Button/Button';
import styles from './ContactFrom.module.css'
import { RiMessage2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactForm = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon= {<RiMessage2Fill fontSize="24px"/>} />
                <Button text="VIA CALL" icon= {<FaPhoneAlt fontSize="24px"/>} />
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon= {<MdOutlineMail fontSize="24px"/>} />
            </div>
            <div className={styles.contact_image}></div>
        </section>
    );
};
export default ContactForm;