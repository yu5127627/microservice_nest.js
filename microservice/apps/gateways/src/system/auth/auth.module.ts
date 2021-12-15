import { Manage } from '@app/libs/db/entity/manage.entity';
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ManageLocalStrategy } from './strategy/manageLocal.strategy';
import setting from '../config/config.setting';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Manage]),
    PassportModule,
    JwtModule.register({
      secret: setting._token_secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ManageLocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
