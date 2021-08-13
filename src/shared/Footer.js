import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div>
                <Link className="link link_gold" to="/">Главная</Link> | 
                <Link className="link link_gold" to="/chat">Чат</Link>
            </div>
            <div>Copyright 2021</div>
        </footer>
    );
}

export default Footer;