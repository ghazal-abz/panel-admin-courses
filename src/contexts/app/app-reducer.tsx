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
        case 'TOGGLE_SIDEBAR': {
            return {
                ...state,
                showSidebar: !state.showSidebar
            }
        }

    }
}

export default appReducer;
