import { ExceptionFilter } from '@app/libs/common/filters/rpc-exception.filter';
import { Result } from '@app/libs/common/interface/result.interface';
import { Controller, UseFilters } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CategoryService } from './category.service';
const DEFAULT_SERVICE = 'categoryService';
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseFilters(new ExceptionFilter())
  @MessagePattern({ category: 'list' })
  async list(query): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].list(query.attrs);
    return {
      code: 200,
      message: '分类查询成功',
      result,
    };
  }

  @MessagePattern({ category: 'create' })
  async create(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].create(body);
    return {
      code: 200,
      message: '分类创建成功',
      result,
    };
  }

  @MessagePattern({ category: 'update' })
  async update(body): Promise<Result> {
    const { id, ...rest } = body;
    const result = await this[DEFAULT_SERVICE].update(id, rest);
    return {
      code: 200,
      message: '分类更新成功',
      result,
    };
  }

  @MessagePattern({ category: 'delete' })
  async delete(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].delete(body.ids);
    return {
      code: 200,
      message: '分类删除成功',
      result,
    };
  }

  @MessagePattern({ category: 'detail' })
  async detail(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].detail(body.id);
    return {
      code: 200,
      message: '分类查询成功',
      result,
    };
  }
}
