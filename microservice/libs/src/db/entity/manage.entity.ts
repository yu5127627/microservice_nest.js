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

  @Column({ length: 64, default: '管理员' })
  nickname: string;

  @Column({
    default:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erWiafXdE7AmAm4F90UJd6yungJRRZPibibTOgIFsF4vq7LSHLiaGWZmltIO2cLibia3L3UzWlSXI4Y6ofg/132',
  })
  avatar: string;

  @CreateDateColumn({ type: 'datetime' })
  ctime: string;

  @Column()
  @Index()
  roleId: number;
}
