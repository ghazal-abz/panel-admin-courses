import {useContext, useEffect} from "react";
import { createContext, useReducer } from "react";
import appReducer from "./app-reducer";
import {ContextAppProp} from './app-context-prop';
import {useTranslation} from "react-i18next";

const AppContext = createContext();
const initialState = {
    language: localStorage.getItem('language') || 'fa',
    theme: localStorage.getItem('theme') || 'light',
    howSidebar: true
};

const AppProvider =  ({children}: ContextAppProp) => {
    const {i18n} = useTranslation();
    const [state, dispatch] = useReducer(appReducer, initialState);

    const changeLanguage = (language) => {
        dispatch({type: 'CHANGE_LANGUAGE', payload: language});
    }

    const changeTheme = (theme) => {
        dispatch({type: 'CHANGE_THEME', payload: theme});
    }

    const toggleSidebar = () => {
        dispatch({type: 'TOGGLE_SIDEBAR'});
    }

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language);
        document.body.dataset.direction = state.language === 'fa' ? 'rtl' : 'ltr';
        document.body.dataset.sidebarPosition = state.language === 'fa' ? 'right' : 'left';

    },[state.language])

    useEffect(() => {
        localStorage.setItem('theme', state.theme);

    },[state.theme])

    return <AppContext.Provider value={{...state, changeLanguage, changeTheme, toggleSidebar}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {useAppContext, AppProvider}
