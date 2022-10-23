import { Group } from '../entities/group.entity';

export class CreateGroupDto {
  group_name: string;
  group_code: string;

  static toEntity(createGroupDto: CreateGroupDto) {
    let group = new Group();
    group = {
      ...createGroupDto,
    };
    return group;
  }
}
