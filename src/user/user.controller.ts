import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('')
  async findAll() {
    return this.userService
      .findAll()
      .then((result) => User.toResultDto(result));
  }

  @Get('/search')
  async findBy(@Query() searchUserDto: SearchUserDto) {
    return this.userService
      .findBy(searchUserDto)
      .then((result) => User.toResultDto(result));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService
      .findOne(+id)
      .then((result) => User.toResultDto(result));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
