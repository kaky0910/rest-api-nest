import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'nvarchar',
    length: 30,
  })
  group_name?: string;

  @Column({
    type: 'nvarchar',
    length: 30,
  })
  group_code?: string;

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

  @OneToMany((type) => User, (user) => user.group)
  users?: User[];
}
