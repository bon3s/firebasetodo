import theme from 'modules/common/general/theme';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const GeneralButton = styled(Button)`
    &&.btn {
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

        &--register {
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

        &--cta {
            background: ${theme.colors.green};
            color: ${theme.colors.white};
            padding: 5px 30px;
            border: 1px solid ${theme.colors.green};

            &:hover,
            :active,
            :focus {
                opacity: 0.75;
                outline: none;
                background: ${theme.colors.green};
                color: ${theme.colors.white};
                border: 1px solid ${theme.colors.green};
                box-shadow: none;
            }
        }
        &:hover,
        :active,
        :focus {
            border: none;
            opacity: 0.85;
            outline: none;
        }
    }
`;

export default GeneralButton;
