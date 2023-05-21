interface IAction {
    type: string,
    CHANGE_LANGUAGE?: string,
    payload: string
}
const appReducer = (state, action: IAction) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE': {
            return {
                ...state,
                language: action.payload
            }
        }
        case 'CHANGE_THEME': {
            return {
                ...state,
                theme: action.payload
            }
        }

    }
}

export default appReducer;
