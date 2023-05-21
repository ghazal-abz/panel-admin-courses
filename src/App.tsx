// import Login from "./features/Identity/components/register";
import {RouterProvider} from "react-router-dom"
import router from "./router";
import './services/i18n.js'
import {useAppContext} from "./contexts/app/app-context";
import {useEffect} from "react";

function App() {
    const {theme} = useAppContext();

    useEffect(() => {
        const head = document.head;
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href= `/css/${theme}.css`;
        head.appendChild(link);

        return () => {head.removeChild(link)}
    },[theme])
    return (
        <RouterProvider router={router} />
    )
}

export default App
