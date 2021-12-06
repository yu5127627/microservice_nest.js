import { Manage } from '@app/libs/db/entity/manage.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ManageService {
  constructor(
    @InjectRepository(Manage) private readonly manageModel: Repository<Manage>,
  ) {}

  async pages(query) {
    return await this.manageModel.find();
  }
}
