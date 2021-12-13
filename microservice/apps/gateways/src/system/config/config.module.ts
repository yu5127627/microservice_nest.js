import { Setting } from '@app/libs/db/entity/setting.entity';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  controllers: [ConfigController],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
