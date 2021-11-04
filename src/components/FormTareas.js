import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  //aqui va la logica
  // crear los state necesarios
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState([]);

  /* const guardarTarea = (e)=>{
      console.log(e.target.value);
      setTareaIndividual(e.target.value);
  } */

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('desde handleSubmit');
      setTareas([...tareas,tareaIndividual]);
      //limpiar el input 
      setTareaIndividual('');
  };

  return (
    //aqui va el maquetado
    <>
      <form className="container my-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            placeholder="Ingrese una tareas"
            className="form-control"
            onChange={e => setTareaIndividual(e.target.value)}
            value={tareaIndividual}
          />
          <button className="btn btn-outline-light" type="submit">
            Agregar
          </button>
        </div>
      <ListaTareas arrayTareas={tareas}></ListaTareas>
      </form>
    </>
  );
};

export default FormTareas;
