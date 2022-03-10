import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Index,
} from 'typeorm';

@Entity('manage')
export class Manage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  username: string;

  @Column({ select: false, length: 128 })
  password: string;

  @Column({ length: 64 })
  nickname: string;

  @Column()
  avatar: string;

  @CreateDateColumn({ type: 'datetime' })
  ctime: string;

  @Column()
  @Index()
  roleId: number;
}
