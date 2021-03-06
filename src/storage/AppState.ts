import { State as LoadingState } from './loadingReducer';

export default interface AppState {  
    readonly loading: LoadingState;
}