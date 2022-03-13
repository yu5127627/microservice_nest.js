import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('login_log')
export class LoginLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64, comment: '用户名' })
  username: string;

  @Column({ comment: '关联ID' })
  manageId: number;

  @Column({ comment: '登录IP' })
  ip: string;

  @Column({ comment: '所属地址', default: '' })
  address: string;

  @Column({ comment: '登录平台' })
  ua: string;

  @CreateDateColumn({ type: 'datetime' })
  login_time: string;

  // @ManyToMany(() => Menu, (menu) => menu.role)
  // @JoinTable({
  //   name: 'role_menu',
  //   // joinColumns: [{ name: 'user_id' }],
  //   // inverseJoinColumns: [{ name: 'role_id' }],
  // })
  // menu: Menu[];
}
