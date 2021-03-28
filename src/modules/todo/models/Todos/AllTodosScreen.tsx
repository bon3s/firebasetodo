import ScreenWrapper from 'modules/common/components/ScreenWrapper';
import { getRotate } from 'modules/todo/components/styles/TodoItemStyles';
import { TodoEntryActionHandlerType } from 'modules/todo/components/TodoEntry';
import TodoItem, {
    TodoActionHandlerType,
} from 'modules/todo/components/TodoItem';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { RouterProps } from 'react-router';
import { TodoScreenStyles } from './styles/TodoScreenStyles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';
import moment from 'moment';
interface Props extends RouterProps {
    clock: string;
    editingMode: string;
    handleEdit: (id: string, action: TodoActionHandlerType) => void;
    handleDone: (id: string, entryId: string) => void;
    handleEntryChange: (
        value: string,
        id: string,
        entryId: string,
        action: TodoEntryActionHandlerType
    ) => void;
    handleAddEntry: (id: string) => void;
}

const AllTodosScreen = (props: Props) => {
    const [newTodo, setNewTodo] = useState('');

    const items = [
        <TodoItem
            title="nekititle"
            handleEdit={props.handleEdit}
            handleEntryChange={props.handleEntryChange}
            handleAddEntry={props.handleAddEntry}
            editingMode={props.editingMode === 'abc123'}
            id="abc123"
            history={props.history}
            items={[
                {
                    content: 'napravito',
                    done: false,
                    editMode: props.editingMode === 'abc123',
                    entryId: 'abc213',
                    dateCreated: '09/09/2020',
                    handleEntryChange: props.handleEntryChange,
                    id: 'abc123',
                },
                {
                    content: 'napravito2',
                    done: false,
                    editMode: props.editingMode === 'abc123',
                    entryId: 'abc217',
                    dateCreated: '09/09/2020',
                    handleEntryChange: props.handleEntryChange,
                    id: 'abc123',
                },
            ]}
        />,
        <TodoItem
            title="nekititle2"
            handleEdit={props.handleEdit}
            handleEntryChange={props.handleEntryChange}
            handleAddEntry={props.handleAddEntry}
            editingMode={props.editingMode === 'abc127'}
            id="abc127"
            history={props.history}
            items={[
                {
                    content: 'napravito',
                    done: false,
                    editMode: props.editingMode === 'abc127',
                    entryId: 'abc222',
                    dateCreated: '11/09/2020',
                    handleEntryChange: props.handleEntryChange,
                    id: 'abc127',
                },
                {
                    content: 'napravito332',
                    done: false,
                    editMode: props.editingMode === 'abc127',
                    entryId: 'abc333',
                    dateCreated: '14/09/2020',
                    handleEntryChange: props.handleEntryChange,
                    id: 'abc127',
                },
            ]}
        />,
    ];

    return (
        <ScreenWrapper history={props.history}>
            <TodoScreenStyles>
                <div className="todo__screen">
                    <Container>
                        <Row>
                            <Col>
                                <div className="content__header">
                                    <h2>
                                        Hello User, it is
                                        <br />
                                        <span className="clock">
                                            {props.clock}
                                        </span>
                                        <span className="date">
                                            {moment().format('DD/MM/YYYY')}
                                        </span>
                                        <br />
                                        Would you like to add a todo list ?
                                    </h2>
                                    <div className="addNewTodo__wrapper">
                                        <label htmlFor="addNewTodo__label">
                                            Please enter a todo title
                                        </label>
                                        <div className="addNewTodo__input">
                                            <input
                                                id="addNewTodoInput"
                                                className="newTodoInput"
                                                type="text"
                                                onChange={(
                                                    e: React.FormEvent<HTMLInputElement>
                                                ) =>
                                                    setNewTodo(
                                                        e.currentTarget.value
                                                    )
                                                }
                                            />
                                            <Button
                                                className="btn"
                                                onClick={() => {}}>
                                                <AddCircleOutlineIcon />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>{items}</Row>
                    </Container>
                </div>
            </TodoScreenStyles>
        </ScreenWrapper>
    );
};

export default AllTodosScreen;
