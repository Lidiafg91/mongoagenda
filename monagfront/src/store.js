import { configureStore } from "@reduxjs/toolkit";
import contactosReducer from './features/contactosSlice'
// ejemplo1 import pedidosReducer from './features/pedidosReducer'
// ejemplo2 import clientesReducer from './features/clientesReducer'


export const store = configureStore({
    reducer:{
        contactos : contactosReducer,
        // ejemplo1: clientes : clientesReducer,
        //ejemplos2: pedidos:pedidosReducer
    }
})