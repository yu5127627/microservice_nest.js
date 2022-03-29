import { Manage } from '@app/libs/db/entity/manage.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync } from 'bcryptjs';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Manage) private readonly manageModel: Repository<Manage>,
    private readonly jwtService: JwtService,
  ) {}

  // 管理员验证
  async validateManage(username: string, password: string): Promise<any> {
    const manage = await this.manageModel.findOne({
      where: { username },
      select: ['id', 'username', 'password', 'roleId'],
    });

    if (!manage) return null;
    if (compareSync(password, manage.password)) {
      const { password, ...result } = manage;
      return result;
    } else {
      throw new Error('账号密码错误');
    }
  }

  // 生成 token
  createToken(payload) {
    return this.jwtService.sign(payload);
  }

  // 解析 token
  vertifyToken(token, secret) {
    if (token.includes('Bearer')) {
      token = token.slice(7);
    }
    return this.jwtService.verify(token, { secret });
  }

  // 获取用户信息
  async detail(user) {
    return await this.manageModel.findOne(user.id);
  }
}
