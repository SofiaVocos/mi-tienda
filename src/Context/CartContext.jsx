import React, {createContext, useState} from 'react'

export const GlobalContext = createContext ('') //PASO 1: le digo a React que GlobalContext es un Context con el createContext (Hooh para PROVEER información). Va en un export para que lo podamos importar después.


const CartContext = ({children}) => {//PASO 2: le digo al Componente que va a tener muchos children

    const [carrito, setCarrito] = useState ([])

    const [loading, setLoading] = useState(false)
  
    const addItem = (product) => {
      if (isInCart(carrito, product)) {
        setCarrito(joinItem(carrito,product))
        alert ("el producto ya fue agregado")} else {
        setCarrito([...carrito, product])
      }
    };
    
    const removeItem = (id) =>{
      setCarrito(carrito.filter (product => product.id !== id)) 
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

    // const total = () => {
    //   return carrito.reduce((acc, product) => acc + product.price * product.quantity, 0)
    // }

    // const quantityTotal = () => {
    //   return carrito.reduce((acc, product) => acc + product.quantity, 0)
    // } 

    const isInCart = (carrito, product) => {
      return carrito.some( item => item.id === product.id )
    }

    const joinItem = (carrito,product) =>{
      return carrito.map((item) => {
        if(item.id === product.id){
          item.quantity = product.quantity;
          item.stock = product.stock;
        }
        return item;
      } )
    }

  return ( //PASO 3: Utilizo el Context, es decir, utilizo el GlobalContext para proveer información. Indico que es el PROVEEDOR
    <GlobalContext.Provider value={{
      carrito, 
      addItem, 
      removeItem, 
      clear, 
      total, 
      loading,
      setLoading
      }}>
        {children} 
    </GlobalContext.Provider> 
  ) 
}

export default CartContext

//PASO 4: A todos sus hijos (children) les va a PROVEER esa información
//PASO 5: En el VALUE digo QUÉ voy a proveer. En este caso voy a proveer la info del Carrito