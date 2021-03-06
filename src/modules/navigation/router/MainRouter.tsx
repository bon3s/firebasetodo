import React from 'react';
import { Switch, Route, RouterProps, Redirect } from 'react-router';
import { connect } from 'react-redux';
import AllTodosContainer from 'modules/todo/models/Todos/AllTodosContainer';
import AppState from 'storage/AppState';
interface Props extends RouterProps {
    
}

const Router = (props: Props) => {
    return (
        <Switch>
            <Route exact path="/" render={(props)=><AllTodosContainer history={props.history}/>} />
            {/* <Route
                exact
                path="/todo/:id"
                {...props}
                component={TodoContainer}
            /> */}
            <Redirect to="/" />
        </Switch>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        
    };
};
export default connect(mapStateToProps)(Router);