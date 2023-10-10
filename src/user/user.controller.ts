import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, CreatedUser, IUser, UserById } from './user.dto';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}

    @GrpcMethod('UserService','Create')
    async createUser(dto:CreateUserDto): Promise<CreateUserDto>{
        return  this.userService.createUser(dto)
    }

    @GrpcMethod('UserService','FindById')
    async findById(dto:UserById): Promise<IUser>{
        return  this.userService.findById(dto)
    }

    @GrpcMethod('UserService','FindAll')
    async findAll(){
        console.log(await  this.userService.findAll())
        return  this.userService.findAll()
    }

    @GrpcMethod('UserService','Update')
    async update(dto:CreatedUser){
        return await this.userService.update(dto)
    }

    
}
