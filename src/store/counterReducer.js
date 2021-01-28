export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'COUNT_INCREMENT_ACTION':
            return state + 1;
        default:
            return state;
    }
}