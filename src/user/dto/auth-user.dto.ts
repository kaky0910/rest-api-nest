import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class AuthUserDto extends PartialType(CreateUserDto) {
  constructor(id: string, password: string) {
    super();
    this.user_id = id;
    this.user_pwd = password;
  }

  @IsNotEmpty()
  user_id: string;
  @IsNotEmpty()
  user_pwd: string;

  static toEntity(authUserDto: AuthUserDto) {
    let user = new User();
    user = {
      ...user,
      ...authUserDto,
    };
    return user;
  }
}
