import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AuthModule } from '../../system/auth/auth.module';
import { CategoryController } from './category.controller';

@Module({
  imports: [AuthModule],
  controllers: [CategoryController],
  providers: [
    {
      provide: 'BLOG_SERVICE',
      useFactory: (configService: ConfigService) => {
        const port = configService.get('BLOG_PORT');
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: port || 8001,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class CategoryModule {}
