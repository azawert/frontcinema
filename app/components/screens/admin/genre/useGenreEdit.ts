import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {IGenreEditInput} from "@/screens/admin/genre/genreedit.interface";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {genreService} from "@/services/genre.service";
import {toastError} from "@/utils/toast-error";
import {getKeys} from "@/utils/object/getKeys";
import {toastr} from "react-redux-toastr";
import {getAdminUrl} from "../../../../config/url.config";

export const useGenreEdit = (setValue:UseFormSetValue<IGenreEditInput>) => {
 const {push,query} = useRouter()

    const genreId = String(`/${query.id}`)

    const {isLoading} = useQuery(['genre',genreId],()=> genreService.getById(genreId),{
        onError() {
            toastError('Ошибка с получением жанра')
        },
        onSuccess: ({data}) => {
            getKeys(data).forEach(key=>setValue(key,data[key]))

        },
        enabled: !!query.id
    })
    const {mutateAsync:updateGenre} = useMutation('update',(data:IGenreEditInput)=>genreService.updateGenre(genreId,data),{
        onError: () => {
            toastError('Проблема с обновлением жанра')
        },
        onSuccess: () => {
            toastr.success('Жанр был обновлен','')
            push(getAdminUrl('genres'))
        }
    })

    const onSubmit:SubmitHandler<IGenreEditInput> = async (data) => {
     await updateGenre(data)
    }

    return {onSubmit,isLoading}
}