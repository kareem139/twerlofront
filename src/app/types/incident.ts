import { User } from "./user"

export interface AddIncidentModel{
    Title:string,
    Description:string,
    AsignTo:string
}
export interface IncidentListResponse{
    _id:string,
    title:string,
    description:string,
    author:User,
    asignTo:User,
    status:boolean,
    createdAt:Date,
    updatedAt:Date
}

