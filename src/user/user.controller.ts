import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';



@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'create new user' })
  @ApiCreatedResponse({ description: 'user created successfully' })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  @ApiResponse({ status: 409, description: 'email already exists' })
  createUser(@Body() data : CreateUserDto) {
    return this.userService.create(data);
    
  }

  @Get()
  @ApiOperation({ summary: 'get all users' })
  @ApiCreatedResponse({ description: 'all users retrieved successfully' })
  findAll(@Body() body) {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'fetch single user with id' })
  @ApiResponse({ status: 200, description: 'user fetched successfully' })
  @ApiOkResponse({ description: 'user found' })
  @ApiNotFoundResponse({ description: 'user not found' })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: 'update an existing user' })
  @ApiOkResponse({ description: 'user updated successfully' })
  @ApiNotFoundResponse({ description: 'user not found' })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  update(@Param('id',ParseIntPipe) id: number, @Body() data : CreateUserDto) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete or remove an existing user' })
  @ApiOkResponse({ description: 'user deleted successfully' })
  @ApiNotFoundResponse({ description: 'user not found' })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
