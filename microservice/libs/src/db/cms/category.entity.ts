import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Content } from './content.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32, comment: '名称' })
  name: string;

  @Column({ length: 32, comment: '分组' })
  group: string;

  @Column({ comment: '排序' })
  sort: number;

  @Column({ comment: '分类图' })
  simg: string;

  @Column({ comment: '描述' })
  description: string;

  @Column({ comment: '父ID' })
  pid: number;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  ctime: string;

  @ManyToMany(() => Content, (content) => content.categorys)
  content: Content[];
}
