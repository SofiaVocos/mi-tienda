import {useState} from 'react';
import db from '../Service/Firebase';
import {collection, addDoc} from 'firebase/firestore';

const useFirebase = () => {

    const [loading, setLoading] = useState(false);


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
    loading,
    setLoading,
    fetchGenerateTicket
  )
}

export default useFirebase