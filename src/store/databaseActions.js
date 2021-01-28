export const editState = ({id, state}) => {
    return {
        type: 'DB_EDIT_ACTION',
        payload: {id: id, state: state}
    }
}