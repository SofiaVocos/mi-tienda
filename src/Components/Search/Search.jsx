import React, { useState, useEffect } from 'react';
import Icons from '../Icons/Icons';
import { FaSearch } from 'react-icons/fa';
import db from '../../Service/Firebase';
import { getDocs, collection} from 'firebase/firestore';

const Search = () => {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);


  const fetchGetDataCollection = async () => {

    const col = collection(db, 'productos')

    try {
      const data = await getDocs(col)
      const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
      setProducts(result)
      console.log(result)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    fetchGetDataCollection();

  }, []);


  const handleChange = (e) => {
    setSearch(e.target.value)
    // console.log(e.target.value)
  }

  let result = []

  if (!search) {
    result = products
  } else {
    result = products.filter((dato) =>
      dato.category.toLowerCase().includes(search.toLocaleLowerCase())
    )
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