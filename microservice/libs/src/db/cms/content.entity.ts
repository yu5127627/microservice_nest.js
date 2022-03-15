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

  @Column({ comment: '内容' })
  content: string;

  @Column({ comment: '浏览数量' })
  scan: number;

  @Column({ comment: '推荐指数' })
  recom: number;

  @Column({ comment: '置顶' })
  top: boolean;

  @Column({ comment: '状态' })
  status: string;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  ctime: string;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  utime: string;

  @ManyToMany((type) => Tag, (tag) => tag.content)
  @JoinTable({ name: 'content_tag' })
  tags: Tag[];

  @ManyToMany((type) => Category, (category) => category.content)
  @JoinTable({ name: 'content_category' })
  categorys: Category[];
}
