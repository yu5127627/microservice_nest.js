import { PaginationDto } from '@app/libs/common/dto/pagination.dto';
import { ApiProperty } from '@nestjs/swagger';

export class LoginLogPagesDto extends PaginationDto {
  @ApiProperty({ required: false, default: 'admin', description: '用户名' })
  readonly username: string;

  @ApiProperty({ required: false, default: '西安', description: '登录地址' })
  readonly address: string;

  @ApiProperty({ required: false, default: 'window', description: '登录平台' })
  readonly ua: string;
}
