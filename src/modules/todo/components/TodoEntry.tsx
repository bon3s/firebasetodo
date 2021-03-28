import React, { Fragment, SyntheticEvent, useState } from 'react';
import { RouterProps } from 'react-router';
import TodoEntryStyles from './styles/TodoEntryStyles';
import CloseIcon from '@material-ui/icons/Close';
import { TodoActionHandlerType } from './TodoItem';
import { Button } from 'react-bootstrap';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

export enum TodoEntryActionHandlerType {
    Done = 'done',
    DeleteItem = 'delete',
    SaveChanges = 'save',
}
export interface TodoEntryType {
    done: boolean;
    id: string;
    entryId: string;
    content: string;
    editMode: boolean;
    dateCreated: string;
    handleEntryChange: (
        value: string,
        id: string,
        entryId: string,
        action: TodoEntryActionHandlerType
    ) => void;
}

interface Props extends RouterProps, TodoEntryType {}

const TodoEntry = (props: Props) => {
    const { content, done, entryId, id } = props;
    const [value, setValue] = useState<string>('');
    const [hasChanged, setHasChanged] = useState<boolean>(false);

    return (
        <TodoEntryStyles>
            <div className="todo-entry__data">
                <div className="input-wrapper">
                    <input
                        type="text"
                        className={'todo-entry__input'}
                        disabled={!props.editMode}
                        value={
                            value === '' && !hasChanged ? props.content : value
                        }
                        onClick={(e: SyntheticEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onFocus={(e: SyntheticEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            e.preventDefault();
                            e.stopPropagation();
                            props.handleEntryChange(
                                e.target.value,
                                id,
                                entryId,
                                TodoEntryActionHandlerType.SaveChanges
                            );
                            setValue(e.target.value);
                            setHasChanged(true);
                        }}
                        // onBlur={(e: SyntheticEvent) => {
                        //     e.preventDefault();
                        //     e.stopPropagation();
                        //     props.handleEntryChange(value, id, entryId);
                        // }}
                    />
                    <p className="date-created">{props.dateCreated}</p>
                </div>
                {props.editMode ? (
                    <Button
                        onClick={(e: SyntheticEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            props.handleEntryChange(
                                value,
                                id,
                                entryId,
                                TodoEntryActionHandlerType.SaveChanges
                            );
                        }}>
                        <CancelOutlinedIcon />
                    </Button>
                ) : null}
            </div>
        </TodoEntryStyles>
    );
};

export default TodoEntry;
