import ScreenWrapper from 'modules/common/components/ScreenWrapper';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { RouterProps } from 'react-router';
import LoginForm from '../../components/LoginForm';

interface Props extends RouterProps {}

const RegistrationScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <Container>
                <Card>{/* <LoginForm /> */}</Card>
            </Container>
        </ScreenWrapper>
    );
};

export default RegistrationScreen;
