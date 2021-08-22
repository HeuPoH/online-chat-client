import PropTypes from 'prop-types';

import { withFormValidation } from '../../../hoc/withFormValidation';
import { Button } from '../../../shared/generic/Button';
import { Input } from "../../../shared/generic/Input";

/**
* Form for signIn
* 
* @param {Object} props 
* @returns {Object}
*/
function SignInForm(props) {
    const { state, handlerOnChange, handlerOnSubmit } = props;

    return (
        <form className="form-sign">
            <h1>Авторизация</h1>
            <div className="field">
                <img className="icon icon_32 field__icon" src="/style/icons/nickname.png" alt="Никнейм" />
                <Input
                    id="nickname"
                    placeholder="Никнейм"
                    handlerOnChange={handlerOnChange}
                    value={state.nickname.value}
                    autoFocus={true}
                />
            </div>

            <div className="field">
                <img className="icon icon_32 field__icon" src="/style/icons/password.png" alt="Пароль" />
                <Input
                    id="password"
                    placeholder="Пароль"
                    handlerOnChange={handlerOnChange}
                    value={state.password.value}
                    type="password"
                />
            </div>

            <Button
                id="signIn"
                handlerOnSubmit={handlerOnSubmit}
                name="Войти"
                color="green"
                className="form-sign__button-sign"
            />
        </form>
    );
}

SignInForm.propTypes = {
    state: PropTypes.shape({
        nickname: PropTypes.shape({
            value: PropTypes.string,
            error: PropTypes.bool
        }),
        password: PropTypes.shape({
            value: PropTypes.string,
            error: PropTypes.bool
        })
    }),
    handlerOnChange: PropTypes.func,
    handlerOnSubmit: PropTypes.func
};

export default withFormValidation(SignInForm);