import theme from 'modules/common/general/theme';
import styled from 'styled-components';

export const TodoScreenStyles = styled.div`
    && {
        .todo {
            &__screen {
                padding: 30px 0;

                .content {
                    &__header {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        h2 {
                            text-align: center;
                            font-size: 22px;
                            line-height: 1.6;

                            span {
                                margin: 0 5px;
                                color: ${theme.colors.red};

                                &.clock {
                                    min-width: 100px;
                                }
                            }
                        }
                        .addNewTodo {
                            &__wrapper {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                flex-direction: column;
                                margin-top: 30px;
                                min-width: 30%;
                            }

                            &__input {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                .newTodoInput {
                                    display: flex;
                                    flex: 1;
                                    border: 2px solid ${theme.colors.babyblue};
                                    min-width: 300px;
                                    border-radius: 5px;
                                    padding: 5px 10px;
                                    transition: all 0.5s ease;
                                    &:hover,
                                    &:active,
                                    &:focus {
                                        outline: none;
                                        box-shadow: none;
                                    }
                                }

                                .btn {
                                    border: none;
                                    background: transparent;
                                    outline: none;
                                    box-shadow: none;
                                    color: ${theme.colors.green};

                                    &:hover,
                                    &:active,
                                    &:focus {
                                        border: none;
                                        background: transparent;
                                        outline: none;
                                        box-shadow: none;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            /* &__wrapper {
                display: flex;
                align-items: center;
                justify-content: flex-start;
            } */
        }
    }
`;
