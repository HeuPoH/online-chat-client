import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import SignIn from "./components/user/signIn/SignIn";
import SignOut from "./components/user/SignOut";
import SignUp from "./components/user/signUp/SignUp";
import Chat from "./components/chat/Chat";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import { userSelector } from "./selectors/user";
import { userRestoreState } from "./store/actions/user";
import './styles/scss/index.scss';

class App extends React.Component {
    componentDidMount() {
        /**
         * If user have the cookie connect.sid, send request to server for restore state.
         * If the cookie are correct to get data and restore state.
         */
        this.props.restoreStateReducer();
    }

    render() {
        return (
            <>
                <Header user={this.props.user} />
                <section>
                    <Switch>
                        <Route path="/user/signUp">
                            <SignUp />
                        </Route>
                        <Route path="/user/signIn">
                            <SignIn />
                        </Route>
                        <Route path="/user/signOut">
                            <SignOut />
                        </Route>
                        <Route path="/chat">
                            <Chat user={this.props.user} />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>
                    </Switch>
                </section>
                <Footer />
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        restoreStateReducer: () => dispatch(userRestoreState())
    };
}

export default connect(userSelector, mapDispatchToProps)(App);
