import { Group } from '../entities/group.entity';

export class GroupResultDto {
  id: number;
  group_name: string;
  group_code: string;

  static fromGroupEntity(group: Group) {
    if (!group) return new GroupResultDto();
    let result = new GroupResultDto();
    result = {
      id: group.id,
      group_code: group.group_code,
      group_name: group.group_name,
    };
    return result;
  }
}
