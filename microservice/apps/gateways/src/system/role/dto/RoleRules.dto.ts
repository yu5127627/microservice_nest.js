import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class RoleRulesDto {
  @ApiProperty({
    required: true,
    default: [1, 2, 3],
    description: '菜单ID数组',
  })
  @IsArray({ message: '菜单ID必须是一个数组' })
  readonly menuIds: Array<number>;
}
