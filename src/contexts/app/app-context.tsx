import {useContext, useEffect} from "react";
import { createContext, useReducer } from "react";
import appReducer from "./app-reducer";
import {ContextAppProp} from './app-context-prop';
import {useTranslation} from "react-i18next";

const AppContext = createContext();
const initialState = {
    language: localStorage.getItem('language') || 'fa'
};

const AppProvider =  ({children}: ContextAppProp) => {
    const {i18n} = useTranslation();
    const [state, dispatch] = useReducer(appReducer, initialState);

    const changeLanguage = (language) => {
        dispatch({type: 'CHANGE_LANGUAGE', payload: language});
    }

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language);
        document.body.dataset.direction = state.language === 'fa' ? 'rtl' : 'ltr';

    },[state.language])

    return <AppContext.Provider value={{...state, changeLanguage}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {useAppContext, AppProvider}
