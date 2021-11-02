import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    listContactos: [],
  
}

export const contactosSlice = createSlice({
     name: 'contactos',
     initialState,

    reducers:{
         añadirContacto:(state,action)=> {
           state.listContactos.push(action.payload);
         },
         rellenarListaContactos:(state,action)=>{
            state.listContactos=action.payload;
            console.log("Prueba",action.payload)
         },
         

     }

})
export const {añadirContacto, rellenarListaContactos} = contactosSlice.actions;

export const selectListContactos = (state) => state.contactos.listContactos;
export const selectListPedios = (state) => state.contactos.listPedidos;


export default contactosSlice.reducer;