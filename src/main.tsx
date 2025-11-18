import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'; // Use HashRouter for GitHub Pages


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <HashRouter basename="/diariodaalegria">
            <App />
        </HashRouter>
    </React.StrictMode>
);