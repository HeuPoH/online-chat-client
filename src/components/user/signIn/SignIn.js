import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withAsyncResponse } from '../../../hoc/withAsyncResponse';
import { validationFields } from '../../../functions/validationFields';
import { userActions } from '../../../store/actions/user';
import SignInForm from './SignInForm';

class SignIn extends React.Component {
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
            }
        };

        this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
        this.handlerOnChange = this.handlerOnChange.bind(this);
    }

    /**
    * Validation form doing in the hoc withFormValidation.
    * If in form has errors, this reducer not called.
    * 
    * @param {Object} event 
    */
    handlerOnSubmit(event) {
        this.props.signInReducer({ ...event.formData });
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

    render() {
        document.title = 'Авторизация';
        if(this.props.user.id) return <div className="error-nameplate">Вы авторизованы</div>;

        return (
            <SignInForm
                state={this.state}
                patternsToValidation={validationFields}
                handlerOnSubmit={this.handlerOnSubmit}
                handlerOnChange={this.handlerOnChange}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInReducer: candidateData => dispatch(userActions.signIn(candidateData))
    }
}

SignIn.propTypes = {
    signInReducer: PropTypes.func,
    user: PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        role: PropTypes.number
    })
}

export default connect(null, mapDispatchToProps)(withAsyncResponse(SignIn));