import theme from 'modules/common/general/theme';
import styled from 'styled-components';

export const HeaderStyles = styled.div`
    && {
        .header {
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;

            h1 {
                color: #fff;
                font-family: 'Lobster', cursive;
                display: inline-block;
                font-weight: 600;
                color: ${theme.colors.pastelblue};
                font-size: 36px;
            }
            img {
                width: 100px;
                height: auto;
                display: inline-block;
            }
        }
    }
`;
