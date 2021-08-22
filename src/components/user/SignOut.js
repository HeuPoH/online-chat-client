import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import PropTypes from 'prop-types';

import { userActions } from "../../store/actions/user";

class SignOut extends React.Component {
    componentDidMount() {
        if(!this.props.user.id) return;
        this.props.signOutReducer();
    }

    render() {
        return <Redirect to="/" />;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOutReducer: () => dispatch(userActions.signOut())
    }
}

SignOut.propTypes = {
    signOutReducer: PropTypes.func,
    user: PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        role: PropTypes.number
    })
}

export default connect(null, mapDispatchToProps)(SignOut);