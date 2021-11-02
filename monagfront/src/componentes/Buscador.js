import React, {useState} from "react";
import { useSelector } from 'react-redux';
import { 

    selectListContactos 

} from '../features/contactosSlice'; 


function Buscador () {

  const [busqueda, setBusqueda] = useState("");
  const [resultBusqueda, setResultBusqueda] = useState([]);
  const listContactos = useSelector(selectListContactos);





  const updateSearch = (event) => {
      if(event.target.value === ""){
          setResultBusqueda([]);
          setBusqueda("");
          return;
      }
    console.log(event);
    console.log(listContactos);
    const resultBusqueda = listContactos.filter(function (contact) {
        
      if (contact.nombre.toUpperCase().includes(event.target.value.toUpperCase())){
        return contact;
      }
    });
    setBusqueda(event.target.value);
    setResultBusqueda(resultBusqueda);
  }



console.log("resultado busquedas")
 console.log(resultBusqueda)
    return (
      <div className="App">
        <input
          class="form-control"
          type="text"
          placeholder="Search"
          value={busqueda}
          onChange={(updateSearch)}
        />

        {resultBusqueda.map((contact) => {
          return <>

          <div className="card text-white bg-info mb-3">

                <div>Nombre:{' '}{contact.nombre}</div>
                <div>apellidos:{' '}{contact.apellidos}</div>
                <div>Email:{' '}{contact.email}</div>
                <div>Telefono:{' '}{contact.telefono}</div>
                <div>Dirección:{' '}{contact.direccion}</div>
                
                

            </div> 
          </>
        })}
      </div>
    );
  }


export default Buscador;