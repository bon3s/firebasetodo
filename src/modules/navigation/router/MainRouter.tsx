import React from 'react';
import { Switch, Route, RouterProps, Redirect } from 'react-router';
import { connect } from 'react-redux';
import AllTodosContainer from 'modules/todo/models/Todos/AllTodosContainer';
import AppState from 'storage/AppState';
import LoginContainer from 'modules/authentication/models/Login/LoginContainer';
import RegistrationContainer from 'modules/authentication/models/Registration/RegistrationContainer';
interface Props extends RouterProps {}

const Router = (props: Props) => {
    return (
        <Switch>
            {/* <Route exact path="/" render={(props)=><AllTodosContainer history={props.history}/>} /> */}
            <Route
                exact
                path="/"
                render={(props) => (
                    <AllTodosContainer history={props.history} />
                )}
            />

            <Route
                exact
                path="/login"
                render={(props) => <LoginContainer history={props.history} />}
            />

            <Route
                exact
                path="/register"
                render={(props) => (
                    <RegistrationContainer history={props.history} />
                )}
            />
            <Redirect to="/" />
        </Switch>
    );
};

const mapStateToProps = (state: AppState) => {
    return {};
};
export default connect(mapStateToProps)(Router);
