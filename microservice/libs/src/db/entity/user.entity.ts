import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  @ApiProperty({ description: '用户名' })
  username: string;

  @Column()
  @ApiProperty({ description: '认证平台' })
  provider: string;

  @Column()
  @ApiProperty({ description: '认证平台id' })
  key: string;

  @Column({ length: 10 })
  @ApiProperty({ description: '用户昵称' })
  name: string;

  @Column()
  @ApiProperty({ description: '地址' })
  location: string;

  @Column()
  @ApiProperty({ description: '头像' })
  avatar: string;

  @CreateDateColumn()
  ctime: string;
}
