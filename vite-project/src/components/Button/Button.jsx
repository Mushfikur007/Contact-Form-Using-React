
import styles from './Button.module.css'

const Button = (props) => {

    const {isOutline, icon, text} = props;

    return (
        <div className={isOutline ? styles.outline_btn : styles.primary_btn}>
            {icon}
            {text}
        </div>
    );
};

export default Button;