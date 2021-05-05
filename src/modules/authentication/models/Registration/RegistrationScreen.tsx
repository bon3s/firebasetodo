import RegistrationForm, {
    SubmitRegistrationType,
} from 'modules/authentication/components/RegistrationForm';
import ScreenWrapper from 'modules/common/components/ScreenWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import { RouterProps } from 'react-router';

interface Props extends RouterProps {
    handleSubmit: (value: SubmitRegistrationType) => void;
}

const RegistrationScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <Container>
                <Row>
                    <Col>
                        <RegistrationForm
                            history={props.history}
                            handleSubmit={props.handleSubmit}
                        />
                    </Col>
                </Row>
            </Container>
        </ScreenWrapper>
    );
};

export default RegistrationScreen;
