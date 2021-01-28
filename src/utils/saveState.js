const DBOARD_STATE = "DBOARD_STATE";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(DBOARD_STATE);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(DBOARD_STATE, serializedState);
    } catch (error) {
        console.log("error saving data");
    }
}