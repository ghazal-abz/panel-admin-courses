// import Login from "./features/Identity/components/register";
import {RouterProvider} from "react-router-dom"
import router from "./router";
import './services/i18n.js'

function App() {

    return (
        <RouterProvider router={router} />
    )
}

export default App
