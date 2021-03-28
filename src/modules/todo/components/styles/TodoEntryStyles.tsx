import theme from 'modules/common/general/theme';
import styled from 'styled-components';

const TodoEntryStyles = styled.div`
    .todo-entry {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;

        &__data {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .input-wrapper {
                display: flex;
                flex-direction: column;
                flex: 1;
                .content {
                    padding: 7px 0 3px;
                    font-family: 'Poppins', sans-serif;
                }

                .date-created {
                    font-family: 'Poppins', sans-serif;
                    font-size: 12px;
                }
            }

            .btn {
                border: none;
                background: transparent;
                outline: none;
                box-shadow: none;
                color: ${theme.colors.red};
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

        &__input {
            background: transparent;
            border: none;
            outline: none;
            padding: 0;
            margin: 0;
            width: 100%;
            font-family: 'Poppins', sans-serif;
            padding: 7px 0 3px;
            &:hover,
            :active,
            :focus {
                border: none;
                background: transparent;
                outline: none;
            }
        }

        &__handlers {
            display: inline-flex;
            margin-left: 15px;

            .btn {
                background: transparent;
                border: none;
                outline: none;

                &:hover,
                :active,
                :focus {
                    border: none;
                    background: transparent;
                    outline: none;
                    color: red;
                }
            }

            &__edit {
            }
        }
    }
`;

export default TodoEntryStyles;
