import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {

  @ApiProperty({description:"name of the user",example:"ankit sharma"})
  @IsString()
  name: string;

  @ApiProperty({description:"email address of the user",example:"ankit@gmail.com"})
  @IsEmail()
  email: string;
}
