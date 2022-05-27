import {useState} from 'react';
import { GlobalContext } from '../Context/CartContext';
import db from '../Service/Firebase';
import {getDoc, getDocs, collection, doc, addDoc, updateDoc} from 'firebase/firestore';

const useFirebase = () => {

    const [products, setProducts] = useState ([]);
    const [product, setProduct] = useState ([]);

    const {setLoading} = GlobalContext ();

    const fetchGetDataCollection = async () => {
        setLoading (true)
        try {
            const data = collection (db, "productos")
            const col = await getDocs (data)
            const response = col.docs.map (doc => doc = {id:doc.id, ...doc.data()})
            setProducts(response)
            setLoading(false)
        } catch (error) {
            console.log (error);
        }
    };

    const fetchGetIndividualProduct = async ({id}) => {
        setLoading (true)
        try {
            const document = doc (db, "productos",id)
            const response = await getDoc (document)
            let result = response.data()
            setProduct({id:response.id, ...result})
            setLoading(false)
        } catch (error) {
            console.log (error);
        }
    };

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

    const fetchUpdateDoc = async ({id}) => {
        const orderDoc = doc (db, "productos", id);
        try {
            await updateDoc (orderDoc, {precio:2500})
            console.log("Se actualizó correctamente")
        } catch (error) {
            console.log (error);
        }
    };

  return (
    products,
    product,
    fetchGetDataCollection,
    fetchGetIndividualProduct,
    fetchGenerateTicket,
    fetchUpdateDoc
  )
}

export default useFirebase