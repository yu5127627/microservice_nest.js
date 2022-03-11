import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RoleCreateDto {
  @ApiProperty({ required: true, default: '管理员', description: '管理员名称' })
  @IsNotEmpty({ message: '名称必填' })
  readonly name: string;

  @ApiProperty({
    required: true,
    default: 10,
    description: '级别',
  })
  @IsNotEmpty({ message: '级别必填' })
  level: number;

  @ApiProperty({
    required: false,
    default: '我是角儿描述',
    description: '角色描述',
  })
  readonly description: string;
}
