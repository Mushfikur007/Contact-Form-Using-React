import styles from './Nav.module.css'

const nav = () => {
    return (
        <nav className={`${styles.Nav} container`}>
            <div className="logo">
                <img src='/src/assets/img/logo.png' alt="logo" />
            </div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default nav;