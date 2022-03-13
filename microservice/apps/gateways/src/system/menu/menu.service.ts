import { Pagination } from '@app/libs/common/interface/pagination.interface';
import { Menu } from '@app/libs/db/entity/menu.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { MenuCreateDto } from './dto/MenuCreate.dto';
import { MenuUpdateDto } from './dto/MenuUpdate.dto';
const DEFAULT_MODEL = 'menuModel';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private readonly menuModel: Repository<Menu>,
  ) {}

  async create(body: MenuCreateDto): Promise<Menu> {
    return await this[DEFAULT_MODEL].save(body);
  }

  async update(id: number, body: MenuUpdateDto): Promise<Menu> {
    await this[DEFAULT_MODEL].update(id, body);
    return await this[DEFAULT_MODEL].findOne(id);
  }

  async delete(ids: number[]): Promise<any> {
    return await this[DEFAULT_MODEL].delete(ids);
  }

  async list(attrs): Promise<Array<Menu>> {
    if (attrs[0] === 'all') {
      return await this[DEFAULT_MODEL].find();
    }
    return await this[DEFAULT_MODEL].find({ select: attrs });
  }
}
