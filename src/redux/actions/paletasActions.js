import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { paletasTypes } from "../types/paletasTypes";

const collectionName = 'paletas';
const paletasCollection = collection(dataBase, collectionName);



export const actionFillPaletasAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(paletasCollection);
        const paletas = [];
        try {
            querySnapshot.forEach(element => {
                const paleta = {
                    id: element.id,
                    ...element.data()
                }
                paletas.push(paleta)
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionFillPaletasSync(paletas));

        }
    }
}

const actionFillPaletasSync = (paletas) => {
    return {
        type: paletasTypes.PALETAS_FILL,
        payload: paletas
    }
}