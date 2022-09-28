import React from 'react';
import {usePopularGenre} from "@/components/layout/Navigation/menucontainer/genres/usePopularGenres";

const GenreMenu = () => {

    const {isLoading,data} = usePopularGenre()
    return (
        <div>
            
        </div>
    );
};

export default GenreMenu;