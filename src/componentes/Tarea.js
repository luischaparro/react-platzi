
const Tarea = (props) => {
  return (
    <>
      <li className="Tarea-li">
        <span 
          className={`Tarea-icon ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}>
          V
        </span>
        <p 
          className={`Tarea-p ${props.completed && "Tarea-p-completed"}`}>
          {props.text}
        </p>
        <span 
          className="Tarea-icon Tarea-x"
          onClick={props.onDelete}>
          X
        </span>
      </li>
    </>
  );
}

export { Tarea };
