import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<ItemListContainer/>}/>
                <Route path="/ItemDetailContainer/:ItemId" element = {<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas