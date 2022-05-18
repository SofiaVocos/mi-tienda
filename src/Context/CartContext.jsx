import React, {createContext, useState} from 'react'

export const GlobalContext = createContext ('') //PASO 1: le digo a React que GlobalContext es un Context con el createContext (Hooh para PROVEER información). Va en un export para que lo podamos importar después.

const CartContext = ({children}) => {//PASO 2: le digo al Componente que va a tener muchos children

    const [carrito, setCarrito] = useState ([])
  

    const addItem = (product) => {
      setCarrito([...carrito, product])
    };
    
    const removeItem = (id) =>{
      const remove = carrito.filter (product=>product.id !== id)
      setCarrito(remove)
    }; 

    const clear = () => setCarrito ([]);
  

  return ( //PASO 3: Utilizo el Context, es decir, utilizo el GlobalContext para proveer información. Indico que es el PROVEEDOR
    <GlobalContext.Provider value={{carrito, addItem, removeItem, clear}}>
        {children} 
    </GlobalContext.Provider> 
  ) 
}

export default CartContext

//PASO 4: A todos sus hijos (children) les va a PROVEER esa información
//PASO 5: En el VALUE digo QUÉ voy a proveer. En este caso voy a proveer la info del Carrito