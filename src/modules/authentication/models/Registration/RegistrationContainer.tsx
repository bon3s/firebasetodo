import React from 'react';
import { RouterProps } from 'react-router';
import RegistrationScreen from './RegistrationScreen';

interface Props extends RouterProps {}

const RegistrationContainer = (props: Props) => {
    return <RegistrationScreen history={props.history} />;
};

export default RegistrationContainer;
