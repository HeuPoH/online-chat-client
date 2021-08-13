import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { userSelector } from "../../selectors/user";
import { userSignOutAction } from "../../store/actions/user";

class SignOut extends React.Component {
    componentDidMount() {
        this.props.signOutReducer();
    }

    render() {
        if(!this.props.user.id) return <Redirect to="/" />;

        return null;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOutReducer: () => dispatch(userSignOutAction())
    }
}

export default connect(userSelector, mapDispatchToProps)(SignOut);