import {useContext } from 'react';
import { GlobalContext } from '../Context/CartContext';
import db from '../Service/Firebase';
import {collection, addDoc} from 'firebase/firestore';

const useFirebase = () => {

    const {setLoading} = useContext(GlobalContext);


    const fetchGenerateTicket = async ({datos}) => {
        setLoading (true)
        try {
            const col = collection (db,"ordenes")
            const order = await addDoc(col, datos)
            setLoading(false)
            console.log(order.id)
        } catch (error) {
            console.log (error);
        }
    };

  return (
    fetchGenerateTicket
  )
}

export default useFirebase