import {
  MinLength,
  Matches,
  Length,
  IsOptional,
  IsEmail,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class SearchUserDto extends PartialType(CreateUserDto) {
  @MinLength(8, { message: 'too short id' })
  @IsOptional()
  user_id: string;

  @IsOptional()
  user_name: string;

  @Matches(/[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}/, {
    message: 'invalid mobile number',
  })
  @IsOptional()
  mb_tell: string;

  @IsEmail({
    message: 'invalid email',
  })
  @IsOptional()
  email: string;

  static toEntity(searchUserDto: SearchUserDto) {
    let user = new User();
    user = {
      ...user,
      ...searchUserDto,
    };
    return user;
  }
}
