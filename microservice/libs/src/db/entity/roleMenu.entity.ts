import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role_menu')
export class RoleMenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '角色ID' })
  @Index()
  roleId: number;

  @Column({ comment: '菜单ID' })
  @Index()
  menuId: number;
}
