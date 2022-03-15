import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Content } from './content.entity';

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32, comment: '名称' })
  name: string;

  @Column({ comment: '排序' })
  sort: number;

  @Column({ comment: '分类图' })
  simg: string;

  @Column({ comment: '描述' })
  description: string;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  ctime: string;

  @ManyToMany((type) => Content, (content) => content.tags)
  content: Content[];
}
