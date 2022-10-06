import React, {FC, useEffect} from 'react';
import {TypeComponentAuthFields} from "@/shared/types/auth.types";
import {useAuth} from "@/hooks/useAuth";
import {useActions} from "@/hooks/useActions";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";

const DynamicCheckRole = dynamic(()=>import('./CheckRole'),{ssr:false})

const AuthProvider:FC<TypeComponentAuthFields> = ({Component:{children,isOnlyAdmin,isOnlyUser}}) => {
    const {user} = useAuth()
    const {logout,checkAuth} = useActions()
    const {pathname} = useRouter()

    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        if(accessToken) checkAuth()
    }, []);

    useEffect(()=>{
        const refreshToken = Cookies.get('refreshToken')
        if(!refreshToken && user) logout()
    },[pathname])
    return !isOnlyUser && !isOnlyAdmin ? <>{children}</> : <DynamicCheckRole Component={{isOnlyUser,isOnlyAdmin,children}}>
        {children}
    </DynamicCheckRole>

};

export default AuthProvider;