import React, {createContext, useState} from 'react'

export const GlobalContext = createContext ('') //PASO 1: le digo a React que GlobalContext es un Context con el createContext (Hooh para PROVEER información). Va en un export para que lo podamos importar después.


const CartContext = ({children}) => {//PASO 2: le digo al Componente que va a tener muchos children

    const [carrito, setCarrito] = useState ([]);
  
    const addItem = (item) => {
      if (isInCart(carrito, item)) {
        setCarrito(joinItem(carrito, item))
        alert ("el producto ya fue agregado")
      } else {
        setCarrito([...carrito, item])
        alert ("producto correctamente agregado")
      }
    };

    const isInCart = (carrito, item) => {
      return carrito.some( x => x.id === item.id )
    };

    const joinItem = (carrito, item) =>{
      return carrito.map((x) => {
        if(x.id === item.id){
          x.quantity = item.quantity;
          x.stock = item.stock;
        }
        return x;
      } )
    };
    
    const removeItem = (id) =>{
      setCarrito(carrito.filter (y => y.id !== id)) 
    }; 

    const clear = () => {
      setCarrito ([])
    };

    const total = (carrito) => {
      let suma = 0;
      for (let i = 0; i < carrito.length; i++) {
        suma = suma + carrito[i].quantity * carrito[i].price;
      }
      return suma;
    };

  return ( //PASO 3: Utilizo el Context, es decir, utilizo el GlobalContext para proveer información. Indico que es el PROVEEDOR
    <GlobalContext.Provider value={{
      carrito, 
      addItem,
      isInCart,
      removeItem, 
      clear, 
      total, 
      }}>
        {children} 
    </GlobalContext.Provider> 
  ) 
}

export default CartContext

//PASO 4: A todos sus hijos (children) les va a PROVEER esa información
//PASO 5: En el VALUE digo QUÉ voy a proveer. En este caso voy a proveer la info del Carrito