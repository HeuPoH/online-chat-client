import React from 'react';
import { connect } from 'react-redux';

import { chatSelector } from '../../selectors/chat';
import { chatActions } from '../../store/actions/chat';
import { MessagesList } from './MessagesList';
import { validationChatForm } from '../../settings/settings';
import AddMessageForm from './AddMessageForm';
import { Button } from '../../shared/generic/Button';
import { query } from '../../api';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                value: '',
                error: true
            }
        };

        this.handlerOnChangeInput = this.handlerOnChangeInput.bind(this);
        this.handlerOnSubmitMessage = this.handlerOnSubmitMessage.bind(this);
        this.handlerOnUploadMessages = this.handlerOnUploadMessages.bind(this);
    }

    handlerOnSubmitMessage(event) {
        // Clear input after send the message
        this.setState({ message: { value: '', error: true } });
        this.ws.sendMessage(event.formData.message);
    }

    handlerOnChangeInput(event) {
        const { id, value, error } = event.validatedField;

        this.setState({ [id]: { value, error }});
    }

    handlerOnUploadMessages() {
        // If all messages uploaded exit from function.
        if(this.props.chat.count === this.props.chat.messages.length) return;

        this.props.getMessagesReducer(this.props.chat.startRange);
    }

    componentDidMount() {
        this.props.getMessagesReducer(0);
        this.ws = query.chat.wsConnect();
        this.ws.acceptMessage(this.props.pushNewMessageReducer);
    }

    render() {
        if(!this.props.user.id) return <div className="">Доступ только для авторизованных</div>;
        const { count, countHidden, messages, isLoading } = this.props.chat;

        return (
            <div className="chat">
                <div className="chat__info">Всего сообщений: {count}</div>
                <Button
                    id="uploadMore"
                    handlerOnSubmit={this.handlerOnUploadMessages}
                    name={`Загрузить еще (${countHidden})`}
                    color="green"
                    className="chat__button-upload"
                    disabled={isLoading}
                />
                <MessagesList
                    messages={messages}
                    currentNickname={this.props.user.nickname}
                />
                <AddMessageForm
                    state={this.state}
                    handlerOnChange={this.handlerOnChangeInput}
                    handlerOnSubmit={this.handlerOnSubmitMessage}
                    patternsToValidation={validationChatForm}
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMessagesReducer: startRange => dispatch(chatActions.getMessages(startRange)),
        pushNewMessageReducer: message => dispatch(chatActions.pushMessage(message))
    };
}

export default connect(chatSelector, mapDispatchToProps)(Messages);