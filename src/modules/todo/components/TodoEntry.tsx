import React, { Fragment, SyntheticEvent } from 'react';
import { RouterProps } from 'react-router';

enum TodoActionHandlerType {
    editItem = 'edit',
    deleteItem = 'delete',
    toggleDone = 'done',
}

export interface TodoItemType {
    id: string;
    content: string;
    handleEdit: (id: string, action: TodoActionHandlerType) => void;
}

interface Props extends RouterProps, TodoItemType {}

const TodoEntry = (props: Props) => {
    const handleClick = (e: SyntheticEvent, action: TodoActionHandlerType) => {
        e.preventDefault();
        props.handleEdit(props.id, action);
    };

    return (
        <Fragment>
            <div
                className="todo-entry"
                onClick={(e: SyntheticEvent) =>
                    handleClick(e, TodoActionHandlerType.toggleDone)
                }>
                <div className="entry__data">
                    <p>{props.content}</p>
                </div>
                <div className="entry__handlers">
                    <button
                        className="btn-primary entry__handlers__edit"
                        onClick={(e: SyntheticEvent) =>
                            handleClick(e, TodoActionHandlerType.editItem)
                        }>
                        Edit
                    </button>
                    <button
                        className="btn-primary entry__handlers__edit"
                        onClick={(e: SyntheticEvent) =>
                            handleClick(e, TodoActionHandlerType.deleteItem)
                        }></button>
                </div>
            </div>
        </Fragment>
    );
};

export default TodoEntry;
