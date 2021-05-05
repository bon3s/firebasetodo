import { fbAuth } from '../../../../firebase';
import { SubmitRegistrationType } from 'modules/authentication/components/RegistrationForm';
import { RouterProps } from 'react-router';
import RegistrationScreen from './RegistrationScreen';
interface Props extends RouterProps {}

const RegistrationContainer = (props: Props) => {
    const handleSubmit = (value: SubmitRegistrationType) => {
        fbAuth.createUserWithEmailAndPassword(value.email, value.password);
    };

    return (
        <RegistrationScreen
            handleSubmit={handleSubmit}
            history={props.history}
        />
    );
};

export default RegistrationContainer;
