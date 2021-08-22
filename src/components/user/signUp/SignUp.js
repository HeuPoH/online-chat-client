import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withAsyncResponse } from '../../../hoc/withAsyncResponse';
import { validationFields } from '../../../functions/validationFields';
import { userActions } from '../../../store/actions/user';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nickname: {
                value: '',
                error: true
            },
            password: {
                value: '',
                error: true
            },
            repeatPassword: {
                value: '',
                error: true
            }
        };
        this.handlerOnChange = this.handlerOnChange.bind(this);
        this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
    }

    /**
    * This form has wrapper withFormValidation.
    * Object "event" has the property is validatedField: 
    *       {
    *            id: string
    *            value: string
    *            error: boolean
    *       }
    * 
    * @param {Object} event 
    */
     handlerOnChange(event) {
        this.setState({
            [ event.validatedField.id ]: {
                value: event.validatedField.value,
                error: event.validatedField.error }
            }
        );
    }

    /**
    * Validation form doing in the hoc withFormValidation.
    * If in form has errors, this reducer not called.
    * 
    * @param {Object} event 
    */
     handlerOnSubmit(event) {
        this.props.signUpReducer({ ...event.formData });
    }

    render() {
        document.title = 'Регистрация';
        if(this.props.user.id) return <div className="error-nameplate">Вы авторизованы</div>;

        return (
            <SignUpForm
                state={this.state}
                handlerOnChange={this.handlerOnChange}
                handlerOnSubmit={this.handlerOnSubmit}
                patternsToValidation={validationFields}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUpReducer: candidateData => dispatch(userActions.signUp(candidateData))
    }
}

SignUp.propTypes = {
    signUpReducer: PropTypes.func,
    user: PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        role: PropTypes.number
    })
}

export default connect(null, mapDispatchToProps)(withAsyncResponse(SignUp));