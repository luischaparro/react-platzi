import React from 'react'
import { TareasContainer } from './TareasContainer';
import { Tarea } from './Tarea';
import { TareasLoading } from './TareasLoading';
import { TareasError } from './TareasError';
import { TareasEmpty } from './TareasEmpty';
import { TareaContext } from '../hooks/Context';
import { Modal } from './Modal';

const AppUI = () => {
    const {
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
      } = React.useContext(TareaContext);

  return (
    <>
        <TareasContainer 
            total={tareasTotal} 
            completed={tareasCompletadas} 
            inputValue={inputValue} 
            setInputValue={setInputValue}
            openModal={openModal}
            setOpenModal={setOpenModal}
        >
            {loading && (
            <>
                <TareasLoading/>
                <TareasLoading/>
                <TareasLoading/>
            </>
            )}
            {error && <TareasError/>}
            {(!loading && tareasEncontradas.length === 0) && <TareasEmpty/>}

            {tareasEncontradas.map(dato => (
            <Tarea 
                key={dato.text} 
                text={dato.text}
                completed={dato.completed}
                onComplete={() => completeTarea(dato.text)}
                onDelete={() => deleteTarea(dato.text)}
            />
            ))}
        </TareasContainer>

        {openModal && (
            <Modal>
                Modal
            </Modal>
        )}
    </>
  )
}

export {AppUI};
