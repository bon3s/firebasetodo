import theme from 'modules/common/general/theme';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRotate = () => {
    return `rotate3d(${getRandomInt(-3, 3)}deg)`;
};

export const TodoItemStyles = styled(Card)`
    margin: 20px 0 0;
    border-radius: 5px;
    border: none;
    outline: none;
    min-height: 300px;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);

    .card {
        &-header {
            padding: 10px;
            margin: 0 10px;
            border: none;
            border-bottom: 1px solid ${theme.colors.pastelblue};
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
            font-family: 'Poppins', sans-serif;
            color: ${theme.colors.pastelblue};
            .todo {
                &__handlers {
                    &__btn {
                        color: ${theme.colors.pastelblue};
                        background: transparent;
                        border: none;
                        outline: none;
                        padding: 5px;
                        margin: 0;
                        cursor: pointer;
                        position: relative;
                        z-index: 3;

                        &:focus,
                        &:active,
                        &:hover {
                            border: none;
                            outline: none;
                            opacity: 0.75;
                        }
                    }

                    &__delete {
                    }
                }
            }
        }

        &-body {
            padding: 10px 20px;
            background: transparent;
            border: none;
            border-radius: 0 0 5px 5px;
        }

        &-footer {
            background: transparent;
            border: none;
            box-shadow: none;
            display: flex;
            align-items: center;
            justify-content: center;

            .btn {
                color: ${theme.colors.pastelblue};
                background: transparent;
                border: none;
                outline: none;
                padding: 5px;
                margin: 0;
                cursor: pointer;
                position: relative;
                z-index: 3;

                &:focus,
                &:active,
                &:hover {
                    color: ${theme.colors.pastelblue};
                    background: transparent;
                    border: none;
                    outline: none !important;
                    box-shadow: none !important;
                    opacity: 0.75;
                }
            }
        }
    }
`;
