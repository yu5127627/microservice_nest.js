import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ManageCreateDto {
  @ApiProperty({ required: true, default: 'admin', description: '用户名' })
  @IsNotEmpty({ message: '用户名必填' })
  readonly username: string;

  @ApiProperty({
    required: true,
    default: 123456,
    description: '密码',
  })
  @IsNotEmpty({ message: '密码必填' })
  password: string;

  @ApiProperty({ required: true, default: 1, description: '角色ID' })
  @IsNotEmpty({ message: '角色必填' })
  readonly roleId: number;
}
