import React from 'react';
import {usePopularGenre} from "@/components/layout/Navigation/menucontainer/genres/usePopularGenres";
import Menu from "@/components/layout/Navigation/menucontainer/Menu";

const GenreMenu = () => {

    const {isLoading,data,isSuccess} = usePopularGenre()
    return (
        <div>
            {isLoading?<div className='mx-11 mb-6'>Loading</div> : <Menu menu={{title:"Популярные жанры",items:data||[]}} />}
        </div>
    );
};

export default GenreMenu;