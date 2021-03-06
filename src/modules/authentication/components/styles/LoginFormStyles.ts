import theme from 'modules/common/general/theme';
import { Card, Form } from 'react-bootstrap';
import styled from 'styled-components';

const LoginFormStyles = styled(Card)`
    padding: 30px;
    max-width: 500px;
    margin: 50px auto 0;

    form {
        .form-group {
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
        h4 {
            font-size: 22px;
            margin: 30px 0 0;
        }
    }
`;
export default LoginFormStyles;
