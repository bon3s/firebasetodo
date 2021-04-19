import { Button } from '@material-ui/core';
import GeneralButton from 'modules/common/components/styles/ButtonStyles';
import { Col, Form } from 'react-bootstrap';

const LoginForm = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Row className="text-center">
                <Col>
                    <GeneralButton className="btn" type="submit">
                        Sign In
                    </GeneralButton>
                    <h4>Don't have an account yet ?</h4>
                    <GeneralButton className="btn--register" type="submit">
                        Sign Up
                    </GeneralButton>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default LoginForm;
