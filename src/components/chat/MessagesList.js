import PropTypes from 'prop-types';

import { getDateString } from '../../functions/getDateString';

export function MessagesList(props) {
    if(props.messages.length === 0) return <div className="info-nameplate">Нет сообщений</div>;

    return (
        <ul className="chat__list">
            {props.messages.map(message => messageCard(message, props.currentNickname))}
        </ul>
    );
}

/**
 * 
 * @param {Object} item 
 * @param {string} currentNickname nickname in user state
 * @returns {Object}
 */
function messageCard(item, currentNickname) {
    const { id, nickname, message, date } = item;
    const isMyMessage = nickname === currentNickname ? 'message_selected' : '';

    return (
        <li key={id} className={`message ${isMyMessage}`}>
            <div className="message__head">{nickname}</div>
            <div className="message__body">{message}</div>
            <div className="message__footer">{getDateString(date)}</div>
        </li>
    );
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        message: PropTypes.string,
        date: PropTypes.number | PropTypes.string
    })),
    currentNickname: PropTypes.string
}