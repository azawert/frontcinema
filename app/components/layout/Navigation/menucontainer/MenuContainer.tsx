import React from 'react';
import Menu from "@/components/layout/Navigation/menucontainer/Menu";
import {firstMenu, userMenu} from "@/components/layout/Navigation/menucontainer/menu.data";

const MenuContainer = () => {
    return (
        <div>
            <Menu menu={firstMenu}/>

            <Menu menu={userMenu}/>
        </div>
    );
};

export default MenuContainer;