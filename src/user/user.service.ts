import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prismaORM/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    console.log(data);
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll(){
    return this.prisma.user.findMany();
  }

  async findOne(id:number){
    return this.prisma.user.findUnique({where:{id}});
  }

  async update(id:number,data:Prisma.UserUpdateInput){
    return this.prisma.user.update({where :{id},data})
  }

  async remove(id:number){
    return this.prisma.user.delete({where:{id}});
  }

}
