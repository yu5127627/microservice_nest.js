import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  // @ManyToMany(() => Menu, (menu) => menu.role)
  // @JoinTable({
  //   name: 'role_menu',
  //   // joinColumns: [{ name: 'user_id' }],
  //   // inverseJoinColumns: [{ name: 'role_id' }],
  // })
  // menu: Menu[];
}
