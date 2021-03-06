import React,{Fragment} from 'react';
import { RouterProps } from 'react-router';
import Header from './Header';

interface Props extends RouterProps{
    children : JSX.Element | JSX.Element[];
}


const ScreenWrapper = (props:Props) =>{
    return <Fragment>
        <Header history={props.history}/>
        {props.children}
    </Fragment>
}

export default ScreenWrapper;