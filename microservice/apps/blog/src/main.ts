import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { BlogModule } from './blog.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BlogModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: Number(process.env.BLOG_PORT),
        retryAttempts: 5,
        retryDelay: 5000,
      },
      logger: ['error', 'warn'],
    },
  );
  app.listen();
  console.log(
    `Blog Microservice is listening ${process.env.BLOG_PORT} port...`,
  );
}

bootstrap();
