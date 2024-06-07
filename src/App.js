import React from 'react';
import './App.css';
import { TareaProvider } from './hooks/Context';
import { AppUI } from './componentes/AppUI';


function App() {
  return (
    <>
      <TareaProvider>
        <AppUI />
      </TareaProvider>
    </>
  );
}

export { App };
