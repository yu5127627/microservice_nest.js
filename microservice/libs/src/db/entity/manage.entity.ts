import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Role } from './role.entity';

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

  @ManyToOne((type) => Role, (role) => role.manage)
  role: Role;
}
