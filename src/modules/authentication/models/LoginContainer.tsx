import React from 'react';
import { RouterProps } from "react-router"
import LoginScreen from './LoginScreen';

interface Props extends RouterProps{}


const LoginContainer = (props:Props) =>{
    return <LoginScreen history={props.history}/>
}

export default LoginContainer;