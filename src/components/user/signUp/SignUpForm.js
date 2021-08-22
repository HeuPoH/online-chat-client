import PropTypes from 'prop-types';

import { Button } from '../../../shared/generic/Button';
import { Input } from '../../../shared/generic/Input';
import { withFormValidation } from '../../../hoc/withFormValidation';

function SignUpForm(props) {
    const { state, handlerOnChange, handlerOnSubmit } = props;

    return (
        <form className="form-sign">
            <h1>Регистрация</h1>
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

            <div className="field">
                <img className="icon icon_32 field__icon" src="/style/icons/password.png" alt="Повторите пароль" />
                <Input
                    id="repeatPassword"
                    placeholder="Повторите пароль"
                    handlerOnChange={handlerOnChange}
                    value={state.repeatPassword.value}
                    type="password"
                />
            </div>

            <Button
                id="signUp"
                handlerOnSubmit={handlerOnSubmit}
                name="Зарегистрироваться"
                color="green"
                className="form-sign__button-sign"
            />
        </form>
    );
}

export default withFormValidation(SignUpForm);

SignUpForm.propTypes = {
    state: PropTypes.shape({
        nickname: PropTypes.shape({
            value: PropTypes.string,
            errro: PropTypes.bool
        }),
        password: PropTypes.shape({
            value: PropTypes.string,
            error: PropTypes.bool
        }),
        repeatPassword: PropTypes.shape({
            value: PropTypes.string,
            error: PropTypes.bool
        }),
    }),
    handlerOnChange: PropTypes.func,
    handlerOnSubmit: PropTypes.func,
    patternsToValidation: PropTypes.func
}