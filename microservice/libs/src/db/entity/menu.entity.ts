import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('menu')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: 1, comment: '0:目录 1:菜单' })
  type: number;

  @Column({ length: 30, nullable: false, default: '', comment: '图标' })
  icon: string;

  @Column({ default: 0, comment: '外链菜单' })
  islink: boolean;

  @Column({ default: 0, comment: '菜单是否缓存' })
  cache: boolean;

  @Column({ default: 0, comment: '是否在菜单显示' })
  hide: boolean;

  @Column({ length: 30, nullable: false, default: '', comment: '菜单名称' })
  title: string;

  @Column({ length: 100, nullable: false, default: '/', comment: '路由地址' })
  url: string;

  @Column({ length: 20, nullable: false, default: '', comment: '组件名称' })
  name: string;

  @Column({ length: 50, nullable: false, default: '', comment: '操作规则' })
  action: string;

  @Column({ nullable: false, default: 99, comment: '排序' })
  sort: number;

  @Column({ nullable: false, default: '', comment: '组件路径' })
  path: string;

  @Column({ nullable: false, default: 0, comment: '父菜单ID 0:无' })
  pid: number;

  @ManyToMany(() => Role, (role) => role.menu)
  role: Role[];
}
