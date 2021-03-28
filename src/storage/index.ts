import { combineReducers } from 'redux';
import LoadingReducer from 'modules/service/redux/loadingReducer';

const reducer = combineReducers({
    LoadingReducer,
});

export default reducer;
