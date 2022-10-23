import { User } from '../entities/user.entity';
import { GroupResultDto } from '../../group/dto/group-result.dto';

export class UserResultDto {
  user_id: string;

  user_name: string;

  mb_tell: string;

  email: string;

  group: GroupResultDto;

  static fromUserEntity(user: User) {
    let result = new UserResultDto();
    result = {
      user_id: user.user_id,
      user_name: user.user_name,
      mb_tell: user.mb_tell,
      email: user.email,
      group: GroupResultDto.fromGroupEntity(user.group),
    };
    return result;
  }
}
