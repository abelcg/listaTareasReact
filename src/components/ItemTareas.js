import React from "react";

const ItemTareas = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {props.dato} <button className="btn btn-danger" onClick={() => props.borrarTarea(props.dato)}>Borrar</button>
    </li>
  );
};

export default ItemTareas;
