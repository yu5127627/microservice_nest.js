import { Pagination } from '@app/libs/common/interface/pagination.interface';
import { Manage } from '@app/libs/db/entity/manage.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcryptjs';
import { Like, Repository } from 'typeorm';
import { ManageCreateDto } from './dto/ManageCreate.dto';
import { ManagePagesDto } from './dto/ManagePages.dto';
import { ManageUpdateDto } from './dto/ManageUpdate.dto';
import { ManagePageWhere } from './interface/ManagePageWhere.interface';
const DEFAULT_MODEL = 'manageModel';

@Injectable()
export class ManageService {
  constructor(
    @InjectRepository(Manage) private readonly manageModel: Repository<Manage>,
  ) {}

  async create(body: ManageCreateDto): Promise<Manage> {
    body.password = hashSync(body.password);
    return await this[DEFAULT_MODEL].save(body);
  }

  async update(id: number, body: ManageUpdateDto): Promise<Manage> {
    if (body.password) {
      body.password = hashSync(body.password);
    }
    await this[DEFAULT_MODEL].update(id, body);
    return await this[DEFAULT_MODEL].findOne(id);
  }

  async delete(ids: number[]): Promise<any> {
    return await this[DEFAULT_MODEL].delete(ids);
  }

  async pages(query: ManagePagesDto): Promise<Pagination<Manage>> {
    const { username, page, limit, roleId } = query;
    const managefilter: ManagePageWhere = {
      skip: (page - 1) * limit,
      take: limit,
      where: {},
    };

    if (username) managefilter.where.username = Like(`%${username}%`);
    if (roleId) managefilter.where.roleId = roleId;

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
}
