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

  @Column({ length: 10 })
  username: string;

  @Column({ select: false, length: 60 })
  password: string;

  @CreateDateColumn({ type: 'datetime' })
  ctime: string;

  @Column()
  @Index()
  roleId: number;
}
