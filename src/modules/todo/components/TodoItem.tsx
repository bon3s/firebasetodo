import React, { SyntheticEvent } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { RouterProps } from 'react-router';
import TodoEntry, {
    TodoEntryActionHandlerType,
    TodoEntryType,
} from './TodoEntry';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { TodoItemStyles } from './styles/TodoItemStyles';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
interface Props extends RouterProps {
    id: string;
    title: string;
    items: TodoEntryType[];
    editingMode: boolean;
    style?: React.CSSProperties;

    handleEdit: (id: string, action: TodoActionHandlerType) => void;
    handleEntryChange: (
        value: string,
        id: string,
        entryId: string,
        action: TodoEntryActionHandlerType
    ) => void;
    handleAddEntry: (id: string) => void;
}

export enum TodoActionHandlerType {
    EditItem = 'edit',
    DeleteItem = 'delete',
    SaveChanges = 'save',
}

const TodoItem = (props: Props) => {
    const { title, items, id, editingMode } = props;

    return (
        <Col lg={4} md={6} sm={12}>
            <TodoItemStyles
                style={props.style}
                className="todo__item"
                border="primary"
                onClick={(e: SyntheticEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    props.handleEdit('', TodoActionHandlerType.EditItem);
                }}>
                <Card.Header>
                    <p>{title}</p>
                    <div className="todo__handlers">
                        {props.editingMode ? (
                            <button
                                className="todo__handlers__btn todo__handlers__edit"
                                onClick={(e: SyntheticEvent) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    props.handleEdit(
                                        id,
                                        TodoActionHandlerType.SaveChanges
                                    );
                                }}>
                                <SaveOutlinedIcon />
                            </button>
                        ) : (
                            <button
                                className="todo__handlers__btn todo__handlers__edit"
                                onClick={(e: SyntheticEvent) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    props.handleEdit(
                                        id,
                                        TodoActionHandlerType.EditItem
                                    );
                                }}>
                                <EditOutlinedIcon />
                            </button>
                        )}
                        <button
                            className="todo__handlers__btn todo__handlers__delete"
                            onClick={(e: SyntheticEvent) =>
                                props.handleEdit(
                                    id,
                                    TodoActionHandlerType.DeleteItem
                                )
                            }>
                            <DeleteOutlinedIcon />
                        </button>
                    </div>
                </Card.Header>
                <Card.Body className="todo__item__body">
                    {props.items.map((item: any) => {
                        return (
                            <TodoEntry
                                done={item.done}
                                history={props.history}
                                content={item.content}
                                entryId={item.entryId}
                                id={props.id}
                                dateCreated={item.dateCreated}
                                editMode={editingMode}
                                handleEntryChange={props.handleEntryChange}
                            />
                        );
                    })}
                </Card.Body>
                <Card.Footer>
                    <Button
                        onClick={(e: SyntheticEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            props.handleAddEntry(id);
                        }}>
                        <AddCircleOutlineOutlinedIcon fontSize="large" />
                    </Button>
                </Card.Footer>
            </TodoItemStyles>
        </Col>
    );
};

export default TodoItem;
