import { createStore, combineReducers } from "redux";
import { counterReducer } from './counterReducer';
import { databaseReducer } from "./databaseReducer";
import { taskReducer } from './taskReducer';

const store = createStore(
    combineReducers({
        db: databaseReducer,
        task: taskReducer,
        count: counterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;