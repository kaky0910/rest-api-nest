import { MinLength, Matches, Length, IsEmail } from 'class-validator';
import { User } from '../entities/user.entity';
import { GroupResultDto } from '../../group/dto/group-result.dto';

export class CreateUserDto {
  @MinLength(6, { message: 'too short id' })
  user_id: string;

  @Length(6, 20)
  user_pwd: string;

  user_name: string;

  @Matches(/[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}/, {
    message: 'invalid mobile number',
  })
  mb_tell: string;

  @IsEmail({
    message: 'invalid email',
  })
  email: string;

  group_id: number;

  static toEntity(createUserDto: CreateUserDto) {
    let user = new User();
    user = {
      ...createUserDto,
      group: {
        id: createUserDto.group_id,
      },
    };
    return user;
  }
}
