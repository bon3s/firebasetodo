import { Button } from '@material-ui/core';
import GeneralButton from 'modules/common/components/styles/ButtonStyles';
import { Col, Form } from 'react-bootstrap';
import RegistrationFormStyles from './styles/RegistrationFormStyles';

const RegistrationForm = () => {
    return (
        <RegistrationFormStyles>
            <Form>
                <Form.Row className="text-center">
                    <Col>
                        <h4>Fill out the form to create an account.</h4>
                    </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Row className="text-center">
                    <Col>
                        <GeneralButton
                            className="btn--register btn--cta"
                            type="submit">
                            Register
                        </GeneralButton>
                    </Col>
                </Form.Row>
            </Form>
        </RegistrationFormStyles>
    );
};

export default RegistrationForm;
