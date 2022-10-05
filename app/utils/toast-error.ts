import {errorCatch} from "../api/api.helpers";
import {toastr} from "react-redux-toastr";

export const toastError = (e:any,title?:string) => {
    const message = errorCatch(e)
    toastr.error(title || 'Error request',message)
    throw message
}