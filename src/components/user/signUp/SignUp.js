import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { withAsyncResponse } from '../../../hoc/withAsyncResponse';

import { userSelector } from '../../../selectors/user';
import { validationUserForm } from '../../../settings/settings';
import { userSignUpAction } from '../../../store/actions/user';
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
            [event.validatedField.id]: {
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
        if(this.props.user.id) return <Redirect to="/" />;

        return (
            <SignUpForm
                state={this.state}
                handlerOnChange={this.handlerOnChange}
                handlerOnSubmit={this.handlerOnSubmit}
                patternsToValidation={validationUserForm}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUpReducer: candidateData => dispatch(userSignUpAction(candidateData))
    }
}

export default connect(userSelector, mapDispatchToProps)( withAsyncResponse(SignUp));