export interface User{
    verified:boolean,
    status:boolean,
    _id:string,
    name:string,
    email:string,
    roles:Role[]

}

export interface Role{
    _id:string,
    code:string
}