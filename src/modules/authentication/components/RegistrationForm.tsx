import GeneralButton from 'modules/common/components/styles/ButtonStyles';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { RouterProps } from 'react-router';
import RegistrationFormStyles from './styles/RegistrationFormStyles';

export interface SubmitRegistrationType {
    email: string;
    password: string;
}
interface Props extends RouterProps {
    handleSubmit: (value: SubmitRegistrationType) => void;
}

const RegistrationForm = (props: Props) => {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        handleValidateEmail();
    }, [email]);

    useEffect(() => {
        handleValidatePassword();
    }, [password]);

    useEffect(() => {
        handleValidatePassword();
    }, [confirmPassword]);

    const handleValidateEmail = () => {
        const rgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email && email.length > 0) {
            if (email && rgx.test(email)) {
                setEmailError('');
                return true;
            } else {
                setEmailError('Please use a valid e-mail address.');
                return false;
            }
        } else {
            setEmailError('E-mail is required.');
            return false;
        }
    };

    const handleValidatePassword = () => {
        if (password && confirmPassword) {
            if (password === confirmPassword) {
                setPasswordError('');
                return true;
            } else {
                setPasswordError('Passwords do not match');
                return false;
            }
        } else {
            setPasswordError('Password fields are required.');
        }
    };

    const handleSubmit = () => {
        if (handleValidatePassword() && handleValidateEmail())
            props.handleSubmit({ email: email, password: password });
    };

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
                    <Form.Control
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(e.target.value);
                        }}
                        onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                            setEmail(e.currentTarget.value);
                        }}
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(e.currentTarget.value);
                        }}
                        type="email"
                        placeholder="Enter email"
                    />
                    <p className="error">{emailError}</p>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setPassword(e.target.value);
                        }}
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(e.currentTarget.value);
                        }}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setConfirmPassword(e.target.value);
                        }}
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(e.currentTarget.value);
                        }}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <p className="error">{passwordError}</p>
                <Form.Row className="text-center">
                    <Col>
                        <GeneralButton
                            className="btn--register btn--cta"
                            onClick={handleSubmit}>
                            Register
                        </GeneralButton>
                    </Col>
                </Form.Row>
            </Form>
        </RegistrationFormStyles>
    );
};

export default RegistrationForm;
