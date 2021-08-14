import PropTypes from 'prop-types';

import { Button } from '../../../shared/generic/Button';
import { Input } from '../../../shared/generic/Input';
import { withFormValidation } from '../../../hoc/withFormValidation';

function SignUpForm(props) {
    const { state, handlerOnChange, handlerOnSubmit } = props;

    return (
        <form className="form">
            <Input
                id="nickname"
                label="Никнейм"
                handlerOnChange={handlerOnChange}
                value={state.nickname.value}
                autoFocus={true}
                
                validateInput={true}
                errorMessage="Неверно введен никнейм"
            />

            <Input
                id="password"
                label="Пароль"
                handlerOnChange={handlerOnChange}
                value={state.password.value}
                type="password"
                
                validateInput={true}
                errorMessage="Неверно введен пароль"
            />

            <Input
                id="repeatPassword"
                label="Повторите пароль"
                handlerOnChange={handlerOnChange}
                value={state.repeatPassword.value}
                type="password"
                
                validateInput={true}
                errorMessage="Пароли не совпадают"
            />

            <Button
                id="signUp"
                handlerOnSubmit={handlerOnSubmit}
                name="Зарегистрироваться"
                color="green"
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