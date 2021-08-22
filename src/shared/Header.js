import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
    const { id, nickname } = props.user;

    return (
        <header>
            <nav>
                <Link className="link link_red" to="/">Главная</Link>
                <div>Добро пожаловать,
                    {id ? ` ${nickname} | ` : 'Гость'}
                    {id ? <Link className="link link_red" to="/user/signOut">Выйти</Link> : null}
                </div>
            </nav>
        </header>
    );
}

Header.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        role: PropTypes.number
    })
}

export default Header;