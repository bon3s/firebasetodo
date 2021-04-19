import RegistrationForm from 'modules/authentication/components/RegistrationForm';
import ScreenWrapper from 'modules/common/components/ScreenWrapper';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RouterProps } from 'react-router';
import RegistrationFormStyles from 'modules/authentication/components/styles/RegistrationFormStyles';

interface Props extends RouterProps {}

const RegistrationScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <Container>
                <Row>
                    <Col>
                        <RegistrationForm />
                    </Col>
                </Row>
            </Container>
        </ScreenWrapper>
    );
};

export default RegistrationScreen;
