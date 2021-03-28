import { TodoEntryActionHandlerType } from 'modules/todo/components/TodoEntry';
import TodoItem, {
    TodoActionHandlerType,
} from 'modules/todo/components/TodoItem';
import { FC, useState } from 'react';
import { RouterProps } from 'react-router';
import AllTodosScreen from './AllTodosScreen';
import moment from 'moment';
interface Props extends RouterProps {}

const AllTodosContainer = (props: Props) => {
    const [editMode, setEditMode] = useState('');
    const [clock, setClock] = useState('');

    const currentTime = setInterval(() => {
        setClock(moment().format('hh:mm:ss'));
    }, 1000);

    const handleItemEdit = (id: string, action: TodoActionHandlerType) => {
        switch (action) {
            case 'save':
                setEditMode('');
                break;
            case 'edit':
                setEditMode(id);
                break;
            default:
                break;
        }
    };

    const handleEntryEdit = (
        id: string,
        entryId: string,
        todo: string,
        action: TodoEntryActionHandlerType
    ) => {
        switch (action) {
            case 'save':
                return;
            case 'delete':
                return;
            case 'done':
                return;
            default:
                break;
        }
    };

    const handleDone = (id: string, entryId: string) => {
        console.log('done', id, entryId);
    };

    const handleAddEntry = () => {
        console.log('addnewentry');
    };

    return (
        <AllTodosScreen
            clock={clock}
            handleEdit={handleItemEdit}
            handleDone={handleDone}
            handleAddEntry={handleAddEntry}
            history={props.history}
            editingMode={editMode}
            handleEntryChange={handleEntryEdit}
        />
    );
};

export default AllTodosContainer;
