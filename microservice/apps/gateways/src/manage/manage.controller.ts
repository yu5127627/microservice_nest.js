import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ManagePagesDto } from './dto/managePages.dto';
import { ManageService } from './manage.service';

@Controller('manage')
@ApiTags('管理员')
export class ManageController {
  constructor(private readonly managerService: ManageService) {}

  @Get()
  @ApiOperation({ summary: '分页查询' })
  async pages(@Query() query: ManagePagesDto) {
    const result = await this.managerService.pages(query);
    return {
      code: 200,
      message: '管理员查询成功',
      result,
    };
  }
}
