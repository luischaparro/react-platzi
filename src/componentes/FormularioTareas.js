import React from 'react'
import { TareaContext } from '../hooks/Context';

const FormularioTareas = () => {
    const {
        addTarea,
        setOpenModal,
    } = React.useContext(TareaContext);

    const [newTareaValue, setNewTareaValue] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        addTarea(newTareaValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTareaValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}
            className='form-tareas'
        >
            <label className='form-label'>Escribe tu nueva Tarea</label>
            <textarea 
                className='form-textarea' 
                placeholder='Estudiar React'
                value={newTareaValue}
                onChange={onChange}
            />
            <div className='form-container--btn'>
                <button
                    type='button'
                    onClick={onCancel}
                    className='form-tareas--btn form-tareas--btn---cancel'
                >Cancelar</button>
                <button
                    type='submit'
                    className='form-tareas--btn form-tareas--btn---add'
                >Agregar
                </button>
            </div>

        </form>
    )
}

export { FormularioTareas }
