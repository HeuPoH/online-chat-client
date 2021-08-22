import PropTypes from 'prop-types';

/**
 * Input component.
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
            role } = props;

    return (
        <>
            { label ? <label className={classNameLabel} htmlFor={id}>{label}</label> : null}
            <input
                className={classNameInput}
                onChange={handlerOnChange}
                id={id}
                value={value}
                type={type}
                placeholder={placeholder}
                autoFocus={autoFocus}
                role={role}
            />
        </>
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
    role: PropTypes.string
};

Input.defaultProps = {
    classNameLabel: "",
    classNameInput: "",
    type: "text",
    placeholder: "",
    autoFocus: false,
    role: ""
}