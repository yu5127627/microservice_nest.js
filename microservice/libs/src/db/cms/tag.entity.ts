import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Content } from './content.entity';

@Entity({ name: 'tag', database: 'test_blog' })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32, comment: '名称' })
  name: string;

  @Column({ comment: '排序', default: 99 })
  sort: number;

  @Column({ comment: '分类图', default: '' })
  simg: string;

  @Column({ comment: '描述', default: '' })
  description: string;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  ctime: string;

  @ManyToMany(() => Content, (content) => content.tags)
  content: Content[];
}
