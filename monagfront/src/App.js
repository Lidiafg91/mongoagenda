// import AltaContacto from './AltaContactos';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Encabezado from"./componentes/Encabezado"
import AltaContactos from"./componentes/AltaContactos";
import ListaContactos from './componentes/ListaContactos';
import Buscador from "./componentes/Buscador";

function App() {

  
  return (
    
     <>
     <div className="App">
     <Router>
       <Encabezado/>      
       <Switch>
       <Route  path="/AltaContactos">
       <AltaContactos/>
       </Route>
       <Route path="/ListaContactos">
        <ListaContactos/>
        </Route>
        <Route  path="/Buscador">
        <Buscador/>
        </Route>
        </Switch>
      
      </Router>
      </div>
     </>
   
  );
}

export default App;
