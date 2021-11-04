import React from 'react';
import ItemTareas from './ItemTareas';

const ListaTareas = (props) => {
    return (
        <ul className="list-group my-5">
            {
                props.arrayTareas.map((elemento, indice) => <ItemTareas key={indice} dato={elemento}></ItemTareas>)
            }
            
        </ul>    
    );
};

export default ListaTareas;
