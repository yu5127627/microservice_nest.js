import { PaginationDto } from '@app/libs/common/dto/pagination.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ManagePagesDto extends PaginationDto {
  @ApiProperty({ required: false, default: 'admin', description: '用户名' })
  readonly username: string;

  @ApiProperty({
    required: false,
    default: '将梦拉到现实',
    description: '昵称',
  })
  readonly nickname: string;

  @ApiProperty({ required: false, default: 1, description: '角色ID' })
  readonly roleId: number;
}
