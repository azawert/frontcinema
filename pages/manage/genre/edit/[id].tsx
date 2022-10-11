import React from 'react'

import { NextPageAuth } from '@/shared/types/auth.types'
import GenreEdit from "@/screens/admin/genre/GenreEdit";

const GenreEditPage: NextPageAuth = () => {
    return <GenreEdit />
}
GenreEditPage.isOnlyAdmin = true
export default GenreEditPage
