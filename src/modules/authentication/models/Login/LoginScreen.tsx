import LoginFormStyles from 'modules/authentication/components/styles/LoginFormStyles';
import ScreenWrapper from 'modules/common/components/ScreenWrapper';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { RouterProps } from 'react-router';
import LoginForm from '../../components/LoginForm';

interface Props extends RouterProps {}

const LoginScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <Container>
                <Row>
                    <Col>
                        <LoginFormStyles>
                            <LoginForm />
                        </LoginFormStyles>
                    </Col>
                </Row>
            </Container>
        </ScreenWrapper>
    );
};

export default LoginScreen;
