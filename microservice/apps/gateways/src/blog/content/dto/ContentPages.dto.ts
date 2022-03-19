import { PaginationDto } from '@app/libs/common/dto/pagination.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ContentPagesDto extends PaginationDto {
  @ApiProperty({ required: false, default: '测试', description: '文章标题' })
  readonly title?: string;

  @ApiProperty({ required: false, default: true, description: '是否置顶' })
  readonly top?: boolean;

  @ApiProperty({ required: false, default: 'up_rack', description: '文章状态' })
  readonly status?: string;
}
