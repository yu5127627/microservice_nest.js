import { Manage } from '@app/libs/db/entity/manage.entity';
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ManageLocalStrategy } from './strategy/manageLocal.strategy';
import { AuthGuard } from '@app/libs/common/guards/auth.guard';
import { LogModule } from '../../log/log.module';

@Module({
  imports: [
    forwardRef(() => LogModule),
    TypeOrmModule.forFeature([Manage]),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: process.env.TOKEN_SECRET,
          signOptions: { expiresIn: '1d' },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ManageLocalStrategy, AuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
