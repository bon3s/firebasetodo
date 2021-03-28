import { State as LoadingState } from 'modules/service/redux/loadingReducer';

export default interface AppState {
    readonly loading: LoadingState;
}
