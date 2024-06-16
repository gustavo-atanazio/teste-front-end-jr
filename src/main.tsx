import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsContextProvider } from 'context/Products/index.tsx';
import { ModalContextProvider } from 'context/Modal/index.tsx';
import App from './App.tsx';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ProductsContextProvider>
            <ModalContextProvider>
                <App/>
            </ModalContextProvider>
        </ProductsContextProvider>
    </React.StrictMode>
);