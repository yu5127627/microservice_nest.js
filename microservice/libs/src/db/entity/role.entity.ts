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
}
