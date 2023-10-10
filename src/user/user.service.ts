import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto, IUser } from './user.dto';
import {CreatedUser} from "./user.dto"
import {UserById} from './user.dto'
import { Responser } from 'src/lib';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(dto: CreateUserDto):Promise<CreatedUser> {
          return this.prisma.user.create({
            data:{
            name: dto.name,
            address:dto.address,
            phone:dto.phone
            }
        }).then((data)=>{
            return data
        }).catch((error)=>{
            throw error
        })
    }

    async findById(dto:UserById):Promise<IUser>{
        return this.prisma.user.findUniqueOrThrow({
            where:{
                id:dto.id
            }
        }).then((data)=>{
           // return data
            return Responser({
                statusCode:200,
                messageEn:'success',
                messageMm:'success',
                body:data
            })
        }).catch(error =>{
            throw error
        })
    }


    async findAll():Promise<{users:CreatedUser[]}>{
        return this.prisma.user.findMany({
        }).then((data)=>{
            console.log(data)
            return {users:data}
        }).catch(error =>{
            throw error
        })
    }

    async update(dto:CreatedUser):Promise<CreatedUser>{
        return this.prisma.user.update({
            where:{id:dto.id},
            data:{
                name:dto.name,
                address:dto.address,
                phone:dto.phone
            }
        }).then((updated)=>{
            return updated
        }).catch(error =>{
            throw error
        })
    }


    async delete(dto:UserById):Promise<UserById>{
        return this.prisma.user.delete({
            where:{id:dto.id}
        }).then(data =>{
            return data
        }).catch(error =>{
            throw error
        })
    }


    
}
