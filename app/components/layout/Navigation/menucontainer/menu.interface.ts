import {TypeIconName} from "@/shared/types/icons.types";

export interface IMenuItem {
    icon:TypeIconName,
    title:string,
    link:string,
}

export interface IMenu {
    title?:string,
    items:IMenuItem[],

}