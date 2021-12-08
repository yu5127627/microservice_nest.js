import { Manage } from '@app/libs/db/entity/manage.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ManageLocalStrategy } from './strategy/manageLocal.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Manage]),
    PassportModule,
    JwtModule.register({
      secret: '12121',
      signOptions: { expiresIn: '60S' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ManageLocalStrategy],
})
export class AuthModule {}
