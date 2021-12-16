import { Setting } from '@app/libs/db/entity/setting.entity';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Setting]), AuthModule],
  controllers: [ConfigController],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
