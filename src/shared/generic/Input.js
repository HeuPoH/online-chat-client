import PropTypes from 'prop-types';

/**
 * Input component
 * 
 * @param {Object} props {
 *                            classNameLabel?: string,
 *                            id: number,
 *                            label: string,
 *                            classNameInput?: string,
 *                            handlerOnChange: function,
 *                            value: string,
 *                            type?: string,
 *                            placeholder?: string,
 *                            autoFocus?: boolean,
 *                            validateInput?: boolean,
 *                            errorMessage?: string,
 *                            helpButton?: node,
 *                            role?: string
 *                       }
 * @returns {Object}
 */
export function Input(props) {
    const { classNameLabel,
            id,
            label,
            classNameInput,
            handlerOnChange,
            value,
            type,
            placeholder,
            autoFocus,
            validateInput,
            errorMessage,
            helpButton,
            role } = props;

    return (
        <div className="form__field">
            <label className={classNameLabel} htmlFor={id}>{label}{helpButton}:</label>
            <input
                className={validateInput ? `${classNameInput} form__field_input-bd-r` : classNameInput}
                onChange={handlerOnChange}
                id={id}
                value={value}
                type={type}
                placeholder={placeholder}
                autoFocus={autoFocus}
                role={role}
            />
    
            {validateInput ? <span id={`${id}Error`} data-text-error>{errorMessage}</span> : null}
        </div>
    );
}

Input.propTypes = {
    classNameLabel: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    classNameInput: PropTypes.string,
    handlerOnChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    validateInput: PropTypes.bool,
    errorMessage: PropTypes.string,
    helpButton: PropTypes.node,
    role: PropTypes.string
};

Input.defaultProps = {
    classNameLabel: "",
    classNameInput: "",
    type: "text",
    placeholder: "",
    autoFocus: false,
    validateInput: false,
    errorMessage: "",
    helpButton: null,
    role: ""
}