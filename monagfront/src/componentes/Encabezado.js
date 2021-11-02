import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Encabezado(props) {
      
    



  


      return (
        <>
        <div className="App">
        <Link to="/AltaContactos"><button>Alta Contacto</button></Link>
        <Link to="/ListaContactos"><button>Lista Contactos</button></Link>
        <Link to="/Buscador"><button>Buscador de Contactos</button></Link>
        </div>    
        </>
      );
    

}
  export default Encabezado