import React from "react";

/**
 * This component extends the form component and return only errors of component.
 * Adds validation for fields.
 * 
 * Put this property to form component for work:
 * - handlerOnSubmit - function to click submit (for example send async request)
 * - handlerOnChange - function to change field (for example save value in state)
 * - patternsToValidation - object, which has keys and patterns for validate.
 * 
 * More properties:
 * - langWords - Object. If you have a few languages and you need translate inputs errors, put this object.
 * - state - Object. If you want to check fields as like repeatPassword, put this object.
 * 
 * @param {Object} Component 
 * @returns {Object}
 */
export function withFormValidation(Component) {
    return class extends React.Component {
        /**
         * 
         * @param {Object} props  {
         *                             handlerOnSubmit: function,
         *                             handlerOnChange: function,
         *                             state: Object,
         *                             patternsToValidation: Object
         *                        }
         */
        constructor(props) {
            super(props);
            this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
            this.handlerOnChange = this.handlerOnChange.bind(this);
        }

        /**
         * Extends submit handler from form component.
         * Check all keys in state.
         * If any key of state has error, the form dont send to server and show errors.
         * You can get form data in event.formData
         * 
         * @param {Object} event 
         */
        handlerOnSubmit(event) {
            event.preventDefault();
            event.formData = {};
            const { state, handlerOnSubmit } = this.props;
            let hasError = false;

            for(let field in state) {
                if(state[field].error) {
                    document.getElementById(field).closest('.field').classList.add('field_border-red');
                    hasError = true;
                }
                event.formData[field] = state[field].value;
            }

            if(!hasError) handlerOnSubmit(event);
        }

        /**
         * Extends defaults handlerOnChange in form component.
         * If any current field have error, add red border for field and show text error.
         * Add to event the field a validatedField:
         * {
         *     id: string,
         *     value: string,
         *     error: boolean
         * }
         * 
         * @param {Object} event 
         */
        handlerOnChange(event) {
            const { patternsToValidation, state, handlerOnChange } = this.props;
            const { id, type } = event.target;
            const value = type === 'checkbox' ? event.target.checked : event.target.value;
            const error = patternsToValidation({ id, value, state: state });
            event.validatedField = { id, value, error };

            error ?
                event.target.closest('.field').classList.add('field_border-red')
                :
                event.target.closest('.field').classList.remove('field_border-red');
            handlerOnChange(event);
        }

        render() {
            return (
                <Component { ...this.props } handlerOnSubmit={this.handlerOnSubmit} handlerOnChange={this.handlerOnChange} />
            );
        }
    }
}