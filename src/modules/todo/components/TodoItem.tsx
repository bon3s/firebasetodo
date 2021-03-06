import React from 'react';
import { Card } from 'react-bootstrap';
import { RouterProps } from 'react-router';
import TodoEntry, { TodoItemType } from './TodoEntry';

interface Props extends RouterProps {
    title: string;
    items: TodoItemType[];
}

const TodoItem = (props: Props) => {
    const { title, items } = props;
    return (
        <div className="todo-item">
            <Card border="primary">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    {items.map((item: TodoItemType) => {
                        return (
                            <TodoEntry
                                history={props.history}
                                content={item.content}
                                id={item.id}
                                handleEdit={item.handleEdit}
                            />
                        );
                    })}
                </Card.Body>
            </Card>
        </div>
    );
};

export default TodoItem;
