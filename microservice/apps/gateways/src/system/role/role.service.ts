import { Pagination } from '@app/libs/common/interface/pagination.interface';
import { Role } from '@app/libs/db/entity/role.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { RoleCreateDto } from './dto/RoleCreate.dto';
import { RolePagesDto } from './dto/RolePages.dto';
import { RoleUpdateDto } from './dto/RoleUpdate.dto';
import { RolePageWhere } from './interface/RolePageWhere.interface';
const DEFAULT_MODEL = 'roleModel';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleModel: Repository<Role>,
  ) {}

  async create(body: RoleCreateDto): Promise<Role> {
    return await this[DEFAULT_MODEL].save(body);
  }

  async update(id: number, body: RoleUpdateDto): Promise<Role> {
    await this[DEFAULT_MODEL].update(id, body);
    return await this[DEFAULT_MODEL].findOne(id);
  }

  async delete(ids: number[]): Promise<any> {
    return await this[DEFAULT_MODEL].delete(ids);
  }

  async pages(query: RolePagesDto): Promise<Pagination<Role>> {
    const { name, page, limit } = query;
    const managefilter: RolePageWhere = {
      skip: (page - 1) * limit,
      take: limit,
      where: {},
    };

    if (name) managefilter.where.name = Like(`%${name}%`);

    const [rows, total] = await this[DEFAULT_MODEL].findAndCount(managefilter);
    return {
      rows,
      total,
      pager: {
        page,
        limit,
        total,
        offset: (page - 1) * limit,
        pageTotal: Math.ceil(total / limit),
      },
    };
  }

  async list(attrs): Promise<Array<Role>> {
    if (attrs[0] === 'all') {
      return await this[DEFAULT_MODEL].find();
    }
    return await this[DEFAULT_MODEL].find({ select: attrs });
  }
}
