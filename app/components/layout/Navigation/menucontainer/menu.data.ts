import {IMenu} from "@/components/layout/Navigation/menucontainer/menu.interface";

export const firstMenu:IMenu = {
    items: [{
        icon:'MdHome',
        link:'/',
        title:'Home'
    }, {
        icon:'MdExplore',
        link:'/genres',
        title:'Discovery',

    },{
        icon:'MdRefresh',
        link:'/fresh',
        title:'Fresh movies'
    },{
        icon:'MdFireplace',
        link:'/trending',
        title:'Trending now'
    }],
    title:"Menu"

}

export const userMenu:IMenu = {
    title:"General",
    items:[]
}


