import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { UserResultDto } from '../dto/user-result.dto';
import { Group } from 'src/group/entities/group.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'nvarchar',
    length: 20,
  })
  user_id: string;

  @Column({
    type: 'nvarchar',
    length: 40,
  })
  user_name: string;

  @Column({
    type: 'nvarchar',
    length: 100,
  })
  user_pwd: string;

  @Column({
    type: 'nvarchar',
    length: 20,
  })
  mb_tell: string;

  @Column({
    type: 'nvarchar',
    length: 100,
  })
  email: string;

  @Column({
    default: 'Y',
  })
  use_yn?: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at?: Date;

  @ManyToOne((type) => Group, (group) => group.users)
  group?: Group;

  static toResultDto(entity: User | User[]): UserResultDto | UserResultDto[] {
    if (entity instanceof User) {
      return UserResultDto.fromUserEntity(entity);
    } else if (entity instanceof Array) {
      return entity.map((e) => UserResultDto.fromUserEntity(e));
    }
    return null;
  }
}
