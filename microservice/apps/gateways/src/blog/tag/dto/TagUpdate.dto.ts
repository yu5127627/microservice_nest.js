import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class TagUpdate {
  @ApiProperty({ required: true, default: '测试标签', description: '名称' })
  @IsNotEmpty({ message: '标签名称必填' })
  readonly name: string;

  @ApiProperty({ required: false, default: 99, description: '排序' })
  @IsNotEmpty({ message: '标签排序必填' })
  readonly sort: number;

  @ApiProperty({
    required: false,
    default:
      'http://qapp-lm.oss-cn-hangzhou.aliyuncs.com/upload/lwyd/cover/1634138768954_1fht45hhr.jpg',
    description: '封面图',
  })
  readonly simg?: string;

  @ApiProperty({
    required: false,
    default: '我是描述的内容',
    description: '描述',
  })
  readonly description?: string;
}
