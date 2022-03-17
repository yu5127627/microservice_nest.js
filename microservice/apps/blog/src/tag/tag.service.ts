import { Auth } from '@app/libs/common/decorator/auth.decorator';
import { Result } from '@app/libs/common/interface/result.interface';
import { Tag } from '@app/libs/db/cms/tag.entity';
import { Get, Injectable, ParseArrayPipe, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const DEFAULT_MODEL = 'tagModel';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly tagModel: Repository<Tag>,
  ) {}

  async list(): Promise<Array<Tag>> {
    // if (attrs[0] === 'all') {
    //   return await this[DEFAULT_MODEL].find();
    // }
    return await this[DEFAULT_MODEL].find();
  }
}
