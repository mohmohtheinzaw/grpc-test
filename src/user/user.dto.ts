import { Interface } from "readline";

export class CreateUserDto{
    name: string;
    address: string;
    phone: string;
}

export class CreatedUser{
    id:string
    name:string
    address:string
    phone:string
}

export class UserById{
    id:string
}


export interface IUser{
    meta:{
        success:boolean
        messageEn:string
        messageMm:string
    },
    body:CreatedUser
}
