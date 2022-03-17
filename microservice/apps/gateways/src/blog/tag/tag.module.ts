import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { TagController } from './tag.controller';

@Module({
  imports: [],
  controllers: [TagController],
  providers: [
    {
      provide: 'BLOG_SERVICE',
      useFactory: (configService: ConfigService) => {
        const blogPort = configService.get('BLOG_PORT');
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: blogPort || 8001,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class TagModule {}
