import { database } from '../utils/base_db';

const initialState = [...database];

export const databaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DB_EDIT_ACTION':
            return state.map(user => {
                if(user.id === action.payload.id) {
                    return {...user, ...action.payload}
                } else {
                    return user;
                }
            })
        default:
            return state;
    }
}