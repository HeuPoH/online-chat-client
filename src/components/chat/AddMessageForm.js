import PropTypes from 'prop-types';

import { Button } from '../../shared/generic/Button';
import { Input } from '../../shared/generic/Input';
import { withFormValidation } from '../../hoc/withFormValidation';

function AddMessageForm(props) {
    const { handlerOnChange, handlerOnSubmit, state } = props;

    return (
        <form className="form">
            <Input
                id="message"
                handlerOnChange={handlerOnChange}
                handlerOnSubmit={handlerOnSubmit}
                placeholder="Введите сообщение..."
                value={state.message.value}

                validateInput={true}
                errorMessage="Не корректный текст"
            />

            <Button
                id="send"
                handlerOnSubmit={handlerOnSubmit}
                name="Добавить"
                className="form__button-add"
            />
        </form>
    );
}

AddMessageForm.propTypes = {
    handlerOnSubmit: PropTypes.func,
    handlerOnChange: PropTypes.func,
    state: PropTypes.shape({
        message: PropTypes.shape({
            value: PropTypes.string,
            error: PropTypes.bool
        })
    })
}

export default withFormValidation(AddMessageForm);