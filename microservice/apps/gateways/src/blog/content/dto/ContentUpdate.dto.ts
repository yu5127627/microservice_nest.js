import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class ContentUpdateDto {
  @ApiProperty({ required: true, default: '默认标题', description: '文章标题' })
  @IsNotEmpty({ message: '标题不得为空' })
  readonly title: string;

  @ApiProperty({
    required: true,
    default: '我是文章的默认内容',
    description: '文章内容',
  })
  @IsNotEmpty({ message: '内容不得为空' })
  readonly content: string;

  @ApiProperty({ required: false, default: 0, description: '浏览量' })
  readonly scan?: number;

  @ApiProperty({ required: true, default: 10, description: '推荐指数' })
  readonly recom: number;

  @ApiProperty({ required: true, default: true, description: '是否置顶' })
  readonly top: boolean;

  @ApiProperty({ required: false, default: 'up_rack', description: '内容状态' })
  readonly status: string;
}
