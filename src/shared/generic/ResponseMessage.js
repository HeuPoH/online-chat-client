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
    const className = props.response?.result ? "success-nameplate" : "error-nameplate" ;

    return props.response ? <div className={className}>{props.response.message}</div> : null;
}

ResponseMessage.propTypes = {
    response: PropTypes.shape({
        status: PropTypes.bool,
        message: PropTypes.string
    })
}