import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import companyReducer from '../reducers/companies';

export default () => {
    return createStore(
        combineReducers({
            current: companyReducer
        }),
        applyMiddleware(ReduxThunk)
    );
};