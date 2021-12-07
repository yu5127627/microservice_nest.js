import { ApiProperty } from '@nestjs/swagger';

export class ManageUpdateDto {
  @ApiProperty({ required: false, default: 'admin', description: '用户名' })
  readonly username: string;

  @ApiProperty({
    required: false,
    default: 123456,
    description: '密码',
  })
  password: string;

  @ApiProperty({ required: false, default: 1, description: '角色ID' })
  readonly roleId: number;
}
