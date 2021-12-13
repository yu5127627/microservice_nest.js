import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('setting')
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, comment: '名称', nullable: false })
  name: string;

  @Column({ length: 30, comment: '键名', unique: true, nullable: false })
  key: string;

  @Column({ type: 'text', comment: '键值', nullable: false })
  value: string;

  @Column({ length: 30, comment: '分组', default: '', nullable: false })
  group: string;

  @Column({
    length: 10,
    comment: '数据类型',
    nullable: false,
  })
  valuetype: string;

  @Column({ comment: '排序', nullable: false, default: 10 })
  sort: number;

  @Column({ type: 'text', comment: '备注' })
  common: string;
}
