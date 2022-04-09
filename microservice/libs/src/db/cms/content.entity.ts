import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Tag } from './tag.entity';

@Entity('content')
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '标题' })
  title: string;

  @Column({ type: 'longtext', comment: '内容', select: false })
  content: string;

  @Column({ comment: '浏览数量', default: 0 })
  scan: number;

  @Column({ comment: '推荐指数', default: 0 })
  recom: number;

  @Column({ comment: '置顶', default: false })
  top: boolean;

  @Column({ default: 'draft', comment: '状态' }) // draft:草稿  up_rack:上架  down_rack:下架
  status: string;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  ctime: string;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  utime: string;

  @ManyToMany(() => Tag, (tag) => tag.content)
  @JoinTable({ name: 'content_tag' })
  tags: Tag[];

  @ManyToMany(() => Category, (category) => category.content)
  @JoinTable({ name: 'content_category' })
  categorys: Category[];
}
