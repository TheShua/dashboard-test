export const taskReducer = (state = [], action) => {
    switch (action.type) {
        case 'TASK_ADD_ACTION':
            return [...state, { ...action.payload }]
        case 'TASK_DEL_ACTION':
            console.log("State >");
            console.log(state);
            console.log("Action >");
            console.log(action);
            return state.filter(task => task.id !== action.payload.id);
        default:
            return state;
    }
}