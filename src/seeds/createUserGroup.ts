import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Group } from '../group/entities/group.entity';

export default class CreateUserGroup implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Group)
      .values([
        { group_code: 'grp1', group_name: '관리자' },
        { group_code: 'grp2', group_name: '서브관리자' },
        { group_code: 'grp3', group_name: '사용자' },
      ])
      .execute();
  }
}
