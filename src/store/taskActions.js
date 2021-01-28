export const addTask = ({id, user, timer}) => {
    return {
        type: 'TASK_ADD_ACTION',
        payload: {id: id, user: user, timer: timer}
    }
}

export const endTask = (id) => {
    return {
        type: 'TASK_DEL_ACTION',
        payload: {id: id}
    }
}