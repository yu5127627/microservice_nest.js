import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Manage } from './manage.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  name: string;

  @Column({ select: false })
  level: number;

  @Column({ nullable: true })
  description: string;

  @OneToMany((type) => Manage, (manage) => manage.role)
  manage: Manage[];
}
