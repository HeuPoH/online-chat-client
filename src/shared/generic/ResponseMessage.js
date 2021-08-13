import PropTypes from 'prop-types';

/**
 * Show async pesponse message.
 * 
 * @param {Object} response {
 *                               status: boolean,
 *                               message: string
 *                          }
 * @returns {Function}
 */
export function ResponseMessage(props) {
    const className = props.response?.status ? "response-message__successfully" : "response-message__error" ;

    return props.response ? <div className={`response-message ${className}`}>{props.response.message}</div> : null;
}

ResponseMessage.propTypes = {
    response: PropTypes.shape({
        status: PropTypes.bool,
        message: PropTypes.string
    })
}