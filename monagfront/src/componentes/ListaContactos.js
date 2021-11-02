import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { rellenarListaContactos } from "../features/contactosSlice";

import { selectListContactos } from "../features/contactosSlice";

function ListaContactos() {
  //  const [persons,setPerson] =useState([]);si quieres hacerlo sin redux.
  const dispatch = useDispatch();
  const listContactos = useSelector(selectListContactos);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8081/ListaContactos")
      .then((response) => {
        //  setPerson(response.data);si quieres hacerlo sin redux.
        console.log("esto es persons", listContactos);
        dispatch(rellenarListaContactos(response.data));
      })
      .catch((err) => {
        // Capturamos los errores
      });
  }, []);

  return (
    <>
      <ul>
        {listContactos.map((person) => (
          <li>
            {person.nombre}
            <br />
            {person.apellidos}
            <br />
            {person.email}
            <br />
            {person.telefono}
            <br />
            {person.direccion}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListaContactos;
