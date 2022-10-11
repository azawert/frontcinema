import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IGenreEditInput} from "@/screens/admin/genre/genreedit.interface";
import {useGenreEdit} from "@/screens/admin/genre/useGenreEdit";
import Meta from "@/utils/meta/Meta";
import AdminNavigation from "@/ui/AdminNavigation/AdminNavigation";
import Heading from "@/ui/heading/Heading";
import SkeletonLoader from "@/ui/SkeletonLoader";
import Input from "@/ui/form-elements/Input";

const GenreEdit:FC = () => {
    const {handleSubmit,register,formState:{errors},setValue,getValues} = useForm<IGenreEditInput>({
        mode:'onChange'
    })
    const {onSubmit,isLoading} = useGenreEdit(setValue)
    return (
        <Meta title={'Edit Genre'}>
            <AdminNavigation/>
            <Heading title={'Edit genre'}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                {isLoading? <SkeletonLoader count={3}/> : <>
                <div>
                    <Input {...register('name',{required:'Name is required'})} error={errors.name} placeholder={'Введите новое название'} style={{width:'31%'}} />
                    <div style={{width:'31%'}}>

                    </div>
                    <Input {...register('icon',{required:'Icon is required'})} error={errors.icon} placeholder={'иконка...'} style={{width:'31%'}} />
                    <button>Update</button>
                </div>
                </>}
            </form>
        </Meta>
    );
};

export default GenreEdit;