import axios from 'axios';
import {IFlat} from "../types.ts";

export const editFlatAPI = async (flat: IFlat, onSuccess?: () => void) => {
    try {
        await axios.put(`https://flatkeeper-api.onrender.com/flats/${flat.id}`, flat, {
            headers: {"Access-Control-Allow-Origin": "*",}
        });
        onSuccess ? onSuccess() : null
    } catch (error) {
        console.error(error); // Handle error
    }
};