import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { withAsyncResponse } from '../../../hoc/withAsyncResponse';
import { userSelector } from '../../../selectors/user';
import { validationUserForm } from '../../../settings/settings';
import { userSignInAction } from '../../../store/actions/user';
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
            [event.validatedField.id]: {
                value: event.validatedField.value,
                error: event.validatedField.error }
            }
        );
    }

    render() {
        if(this.props.user.id) return <Redirect to="/" />;
        document.title = 'Авторизация';

        return (
            <SignInForm
                state={this.state}
                patternsToValidation={validationUserForm}
                handlerOnSubmit={this.handlerOnSubmit}
                handlerOnChange={this.handlerOnChange}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInReducer: candidateData => dispatch(userSignInAction(candidateData))
    }
}

export default connect(userSelector, mapDispatchToProps)(withAsyncResponse(SignIn));