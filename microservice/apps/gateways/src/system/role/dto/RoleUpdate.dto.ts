import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RoleUpdateDto {
  @ApiProperty({
    required: false,
    default: '管理员',
    description: '管理员名称',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    required: false,
    default: 10,
    description: '级别',
  })
  @IsNotEmpty()
  level: number;

  @ApiProperty({
    required: false,
    default: '我是角儿描述',
    description: '角色描述',
  })
  readonly description: string;
}
