import { PaginationDto } from '@app/libs/common/dto/pagination.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RolePagesDto extends PaginationDto {
  @ApiProperty({ required: false, default: '管理员', description: '名称' })
  readonly name: string;

  @ApiProperty({ required: false, default: 1, description: '级别' })
  readonly level: number;
}
