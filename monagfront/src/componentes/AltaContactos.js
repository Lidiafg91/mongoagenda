import { useState, useEffect } from "react";
import axios from "axios";
import { añadirContacto } from "../features/contactosSlice";
import {  useDispatch } from "react-redux";
function AltaContactos() {
  const dispatch = useDispatch(); 
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  

  const enviarDatos = () => {
    const data = {
      nombre: nombre,
      apellidos: apellidos,
      telefono: telefono,
      email: email,
      direccion: direccion,
    };
    //comprobar si el contacto ya esta dado de alta, y paRA usariamos
    postData(data);
  };

  async function postData(payload = {}) {
    dispatch(añadirContacto(payload))
    axios
      .post("http://127.0.0.1:8081/procesarPost", payload)
      .then(function (response) {
        console.log(response.data);
        setNombre("");
        setApellidos("");
        setTelefono("");
        setEmail("");
        setDireccion("");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      {/* <form method="" action=""> */}
      <input
        type="text"
        value={nombre}
        placeholder="Nombre"
        name="nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        value={apellidos}
        placeholder="Apellidos"
        name="apellidos"
        onChange={(e) => setApellidos(e.target.value)}
      />
      <input
        type="text"
        value={telefono}
        placeholder="Telefono"
        name="telefono"
        onChange={(e) => setTelefono(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={direccion}
        placeholder="Dirección"
        name="direccion"
        onChange={(e) => setDireccion(e.target.value)}
      />
      <button onClick={enviarDatos}>Enviar</button>
    </div>
  );
}

export default AltaContactos;
