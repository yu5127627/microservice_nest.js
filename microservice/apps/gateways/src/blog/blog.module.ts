import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TagModule],
  providers: [
    {
      provide: 'BLOG_SERVICE',
      useFactory: (configService: ConfigService) => {
        const blogPort = configService.get('BLOG_PORT');
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port: blogPort || 8001,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class BlogModule {}
