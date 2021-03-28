import theme from 'modules/common/general/theme';
import { Card, Form } from 'react-bootstrap';
import styled from 'styled-components';

const LoginFormStyles = styled(Card)`
    padding: 30px;
    max-width: 500px;
    margin: 50px auto 0;

    form {
        .form-group {
        }
        .btn {
            background: transparent;
            border: none;
            outline: none;
            background-color: ${theme.colors.pastelblue};
            color: ${theme.colors.white};
            border-radius: 5px;
            padding: 10px 15px;
            display: inline-flex;
            margin: 0 auto;
            justify-content: center;
            align-items: center;
            justify-self: center;
            align-self: center;
            transition: all 0.5s ease;
            &:hover,
            :active,
            :focus {
                border: none;
                opacity: 0.85;
                outline: none;
            }

            &.register {
                width: 200px;
                margin: 30px 0 0;
                background: transparent;
                color: ${theme.colors.darkblue};
                border: 1px solid ${theme.colors.darkblue};

                &:hover,
                :active,
                :focus {
                    background: ${theme.colors.darkblue};
                    color: ${theme.colors.white};
                    outline: none;
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
