import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../storage/index';

export const store = createStore(reducer, composeWithDevTools());
