import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, orderBy, query} from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export const addRecordatorio = async (Recordatorio: any)=>{
    try {

        const recordatorioConTiempoReal = {
            ...Recordatorio,
            createdAt: serverTimestamp()
        }

        const where = collection(db, "Recordatorios");
        await addDoc(where, recordatorioConTiempoReal);
        console.log("se añadió con éxito");
    } catch (error) {
        console.error(error);
    }
}


//la parte de order by es para organizarlo en forma desc//
export const getRecordatorio = async () => {

    const q = query((collection(db, "Recordatorios")), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    const lista: any = [];

    querySnapshot.forEach((doc:any) => {
        const data = doc.data();
        lista.push({id: doc.id, ...data})
    });
  
    return lista;
    
}

export default {
    addRecordatorio, getRecordatorio
}

