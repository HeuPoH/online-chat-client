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
        <form className="form">
            <Input
                id="nickname"
                label="Никнейм"
                handlerOnChange={handlerOnChange}
                value={state.nickname.value}
                autoFocus={true}

                validateInput={true}
                errorMessage="Не верно введены данные"
            />

            <Input
                id="password"
                label="Пароль"
                handlerOnChange={handlerOnChange}
                value={state.password.value}
                type="password"

                validateInput={true}
                errorMessage="Не верно введены данные"
            />

            <Button
                id="signIn"
                handlerOnSubmit={handlerOnSubmit}
                name="Войти"
                color="green"
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