import { createStore, combineReducers } from "redux";
import { counterReducer } from './counterReducer';
import { databaseReducer } from "./databaseReducer";
import { taskReducer } from './taskReducer';

// Utils
import { loadState, saveState } from '../utils/saveState';

const persistedState = loadState();

const appReducer = combineReducers({
    db: databaseReducer,
    task: taskReducer,
    count: counterReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action)
}

const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState())
})

export default store;