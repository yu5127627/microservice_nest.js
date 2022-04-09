import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { LoginLog } from '@app/libs/db/entity/loginLog.entity';
import { Pagination } from '@app/libs/common/interface/pagination.interface';
import { LoginLogPagesDto } from './dto/LoginLogPages.dto';
import { LoginLogPageWhere } from './interface/LoginLogPageWhere.interface';
import * as libQqwry from 'lib-qqwry-yyyj';
import { address } from 'ip';
const ipInterface = libQqwry.init();
ipInterface.speed();

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LoginLog)
    private readonly loginLogModel: Repository<LoginLog>,
  ) {}

  async loginLogCreate(body): Promise<LoginLog> {
    try {
      const ip = body.ip.includes('ffff') ? body.ip.slice(7) : body.ip;
      const { Country } = ipInterface.searchIP(ip);
      const city = Country || '';
      return await this.loginLogModel.save({
        manageId: body.id,
        username: body.username,
        address: city,
        ua: body.ua,
        ip: ip === '127.0.0.1' ? address() : ip,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async loginLogPages(query: LoginLogPagesDto): Promise<Pagination<LoginLog>> {
    const { username, page, limit, ua, address } = query;
    const filter: LoginLogPageWhere = {
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'DESC',
      },
    };

    if (username) filter.where.username = Like(`%${username}%`);
    if (ua) filter.where.ua = Like(`%${ua}%`);
    if (address) filter.where.address = Like(`%${address}%`);

    const [rows, total] = await this.loginLogModel.findAndCount(filter);
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
