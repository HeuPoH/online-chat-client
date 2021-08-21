import { getDateString } from '../../functions/getDateString';

export function MessagesList(props) {
    if(props.messages?.length === 0) return <div>Нет сообщений</div>;

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