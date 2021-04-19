import theme from 'modules/common/general/theme';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const RegistrationFormStyles = styled(Card)`
    padding: 30px;
    max-width: 500px;
    margin: 50px auto 0;

    form {
        h4 {
            margin: 20px 0;
        }

        .form-group {
            .form-label {
                font-size: 14px;
            }
            .form-control {
                &:hover,
                &:focus,
                &:active {
                    outline: none;
                    box-shadow: none;
                    border: 1px solid ${theme.colors.pastelblue};
                }
            }
        }

        .btn {
        }
    }
`;

export default RegistrationFormStyles;
