import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TareaContext = React.createContext();

function TareaProvider({ children }) {
    const {
        item: tareas, 
        saveItem: saveTareas,
        loading,
        error,
    } = useLocalStorage("Tareas_V1", []);
    const [inputValue, setInputValue] = React.useState("");

    const [openModal, setOpenModal] = React.useState(false);
    
    const tareasCompletadas = tareas.filter(
        (tarea) => !!tarea.completed)
        .length;
    const tareasTotal = tareas.length;
    
    const tareasEncontradas = tareas.filter(
        (tarea) => {
            return tarea.text.toLowerCase().includes(inputValue.toLowerCase());
        }
    );
    
    const completeTarea = (text) => {
        const newTareas = [...tareas];
        const tareaIndex = newTareas.findIndex(
            (tarea => tarea.text === text)
        );
        newTareas[tareaIndex].completed = true;
        saveTareas(newTareas);
    };
    
    const deleteTarea = (text) => {
        const newTareas = [...tareas];
        const tareaIndex = newTareas.findIndex(
            (tarea => tarea.text === text)
        );
        newTareas.splice(tareaIndex, 1);
        saveTareas(newTareas);
    };

    return (
        <TareaContext.Provider value={{
            loading,
            error,
            tareasCompletadas,
            tareasTotal,
            inputValue,
            setInputValue,
            tareasEncontradas,
            completeTarea,
            deleteTarea,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TareaContext.Provider>
    );
}

export {TareaContext, TareaProvider};
