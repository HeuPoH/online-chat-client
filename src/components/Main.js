import { Link } from "react-router-dom";

function Main() {
    document.title = 'Главная';

    return (
        <div className="main-page main-page_mg-l-r-5">
            <div className="main-page__section"><Link to="/user/signIn"><img className="icon icon_24" src="/style/icons/login.png" alt="Авторизация"/> Авторизация</Link></div>
            <div className="main-page__section"><Link to="/user/signUp"><img className="icon icon_24" src="/style/icons/reg.png" alt="Регистрация"/> Регистрация</Link></div>
            <div className="main-page__section"><Link to="/chat"><img className="icon icon_24" src="/style/icons/chat.png" alt="Чат"/> Чат</Link></div>
        </div>
    );
}

export default Main;