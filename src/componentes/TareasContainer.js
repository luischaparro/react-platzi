
const TareasContainer = ({
  inputValue,
  setInputValue,
  children,
  completed,
  total,
  openModal,
  setOpenModal,
}) => {

  return (
    <>
      <div className="contenedor">
        <h1 className="Titulo">Tarea hechas <span>{completed}</span> de <span>{total}</span></h1>
        <input className="Input-tarea"
        placeholder="Tarea"
        value = {inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        />
        <ul className="Tarea-ul">
          {children}
        </ul>
        <button onClick={(event) => {
          setOpenModal(!openModal)
        }} 
        className="BotonAgregar">+</button>
      </div>
    </>
  );
}

export {TareasContainer};
