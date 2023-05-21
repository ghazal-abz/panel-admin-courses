import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {AppProvider} from "./contexts/app/app-context";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AppProvider>
        <App />
    </AppProvider>
)
