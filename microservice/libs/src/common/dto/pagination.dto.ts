import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
  @ApiProperty({
    required: false,
    default: 1,
    description: '页码',
    type: 'number',
  })
  readonly page: number = 1;

  @ApiProperty({
    required: false,
    default: 20,
    description: '数量',
    type: 'number',
  })
  readonly limit: number = 20;
}
