import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ManageLocalLoginDto {
  @ApiProperty({ required: true, default: 'admin', description: '用户名' })
  @IsNotEmpty({ message: '用户名不得为空' })
  readonly username: string;

  @ApiProperty({ required: true, default: '123456', description: '密码' })
  @IsNotEmpty({ message: '密码不得为空' })
  readonly password: string;
}
