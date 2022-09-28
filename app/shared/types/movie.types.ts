import {TypeIconName} from "@/shared/types/icons.types";

export interface IGenre {
    _id:string,
    name:string,
    slug:string,
    description:string,
    icon:TypeIconName,
}