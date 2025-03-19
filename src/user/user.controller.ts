import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService :UserService){}


@Post()
createUser(@Body() data){
    return this.userService.create(data);
}

@Get()
findAll(@Body() body ){
return this.userService.findAll();
}

@Get(":id")
findOne(@Param('id') id:number){
    return this.userService.findOne(id);
}

@Patch()
update(@Param("id") id:number,@Body() data){
    return this.userService.update(id,data);

}

@Delete(":id")
remove(@Param("id") id:number){
    return this.userService.remove(id);
}

}
