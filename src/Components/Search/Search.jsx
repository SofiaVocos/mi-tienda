import React, {useContext} from 'react'
import Icons from '../Icons/Icons';
import { FaSearch } from 'react-icons/fa';
import { GlobalContext } from '../../Context/CartContext';

const Search = () => {

  const {search, setSearch} = useContext (GlobalContext);


  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log (e.target.value);
  }

  return (
    <>
      <form className="d-flex input-group w-auto my-auto mb-3">
        <input value={search} onChange={handleChange} type="search" className="form-control" placeholder="¿Qué estás buscando?" />
        <span className="input-group-text border-0 d-flex ml-1">
          <Icons Icon={FaSearch} color={"FCE373"} size={"20px"} />
        </span>
      </form>
    </>
  )
}

export default Search