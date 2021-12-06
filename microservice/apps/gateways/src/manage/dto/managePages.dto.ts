import { ApiProperty } from '@nestjs/swagger';

export class ManagePagesDto {
  @ApiProperty({ required: false, default: 'admin', description: '用户名' })
  readonly username: string;

  @ApiProperty({
    required: false,
    default: 1,
    description: '页码',
  })
  readonly page: number;

  @ApiProperty({ required: false, default: 20, description: '数量' })
  readonly limit: number;
}
