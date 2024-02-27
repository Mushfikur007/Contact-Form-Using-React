import Button from '../Button/Button';
import styles from './ContactFrom.module.css'
import { RiMessage2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactForm = () => {

    const onViaCallSubmit = () => {
        console.log("I am call");
    }


    return (
        <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon= {<RiMessage2Fill fontSize="24px"/>} />
                <Button
                
                onClick={onViaCallSubmit}
                
                text="VIA CALL" icon= {<FaPhoneAlt fontSize="24px"/>} />
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon= {<MdOutlineMail fontSize="24px"/>} />

            <form>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">text</label>
                    <textarea name='text' rows="7"/>
                </div>
                <div style={{display: "flex", justifyContent: "end"}}>
                    <Button text="Submit"/>
                </div>
            </form>

            </div>
            <div className={styles.contact_image}>
                <img src="/src/assets/img/contact.jpg" alt="" />
            </div>
        </section>
    );
};
export default ContactForm;