import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import './styles/main.scss';


const root = ReactDOM.createRoot( document.getElementById('app'));
root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);

