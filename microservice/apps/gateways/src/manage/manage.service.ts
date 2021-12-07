import { Pagination } from '@app/libs/common/interface/pagination.interface';
import { Manage } from '@app/libs/db/entity/manage.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcryptjs';
import { Like, Repository } from 'typeorm';
import { ManageCreateDto } from './dto/manageCreate.dto';
import { ManagePagesDto } from './dto/managePages.dto';
import { ManageUpdateDto } from './dto/manageUpdate.dto';
import { ManagePageWhere } from './interface/managePageWhere.interface';

@Injectable()
export class ManageService {
  constructor(
    @InjectRepository(Manage) private readonly manageModel: Repository<Manage>,
  ) {}

  async create(body: ManageCreateDto): Promise<Manage> {
    body.password = hashSync(body.password);
    return await this.manageModel.save(body);
  }

  async update(id: number, body: ManageUpdateDto): Promise<Manage> {
    if (body.password) {
      body.password = hashSync(body.password);
    }
    await this.manageModel.update(id, body);
    return await this.manageModel.findOne(id);
  }

  async delete(ids: number[]): Promise<any> {
    return await this.manageModel.delete(ids);
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

    const [rows, total] = await this.manageModel.findAndCount(managefilter);
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
