import React from 'react';
import Menu from "@/components/layout/Navigation/menucontainer/Menu";
import {firstMenu, userMenu} from "@/components/layout/Navigation/menucontainer/menu.data";
import GenreMenu from "@/components/layout/Navigation/menucontainer/genres/GenreMenu";

const MenuContainer = () => {
    return (
        <div>
            <Menu menu={firstMenu}/>
            <GenreMenu/>
            <Menu menu={userMenu}/>
        </div>
    );
};

export default MenuContainer;