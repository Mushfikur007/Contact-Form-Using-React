import logo from "./../assets/img/logo.png";

const nav = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
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