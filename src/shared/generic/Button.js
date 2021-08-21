import PropTypes from 'prop-types';

/**
 * Button component.
 * 
 * @param {Object} props {
 *                            id: string,
 *                            handlerOnSubmit: function,
 *                            name: string,
 *                            color: string,
 *                            className?: string
 *                       }
 * @returns 
 */
export function Button(props) {
    const { id, handlerOnSubmit, name, color, className, disabled } = props;
    const colors = {
        green: 'button_green',
        red: 'button_red'
    }

    return (
        <button id={id} className={`button ${colors[color]} ${className}`} onClick={handlerOnSubmit} disabled={disabled}>
            {name}
        </button>
    );
}

Button.propTypes = {
    id: PropTypes.string,
    handlerOnSubmit: PropTypes.func,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    color: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    className: '',
    disabled: false
};