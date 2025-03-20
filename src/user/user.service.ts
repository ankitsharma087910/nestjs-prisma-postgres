import { ConflictException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prismaORM/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    const newUser = await this.prisma.user.create({
      data,
    });
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
      data: newUser,
    };
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // async update(id:number,data:Prisma.UserUpdateInput){
  //   return this.prisma.user.update({where :{id},data})
  // }

  async update(id: number, data: CreateUserDto) {
   const user = await this.prisma.user.findUnique({ where: { id } });
   if (!user) {
     throw new NotFoundException('User not found');
   }

   return this.prisma.user.update({
     where: { id }, 
     data,
   });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
