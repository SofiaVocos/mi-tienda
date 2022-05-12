import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Contact from '../Contact/Contact';
import Error from '../Error/Error';
import Cart from '../Cart/Cart';

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Layout/>}>
                  <Route index element= {<Home/>}/>
                  <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/ItemDetailContainer/:ItemId" element = {<ItemDetailContainer/>}/>
                  <Route path="/ItemListContainer/:CategoryId" element = {<ItemListContainer/>}/>
                  <Route path="/Cart" element = {<Cart/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas