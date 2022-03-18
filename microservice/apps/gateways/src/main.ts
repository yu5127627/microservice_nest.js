/* eslint-disable @typescript-eslint/ban-ts-comment */
import { HttpExceptionFilter } from '@app/libs/common/filters/http-exception.filter';
import { ResponseInterceptors } from '@app/libs/common/interceptor/response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GatewaysModule } from './gateways.module';
import { address } from 'ip';

async function bootstrap() {
  const app = await NestFactory.create(GatewaysModule, {
    logger: ['error', 'warn'],
  });

  const micro1 = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 },
  });

  // console.log(micro1);

  await app.startAllMicroservices();

  // 全局验证
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false, // 关闭详细错误信息
      transform: true, // 类型转换
    }),
  );
  // 全局注册响应拦截器
  app.useGlobalInterceptors(new ResponseInterceptors());
  // 全局异常过滤
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局路径前缀;
  app.setGlobalPrefix('api/v1');
  // 处理跨域
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Nestjs microservice!!!')
    .setDescription('The Nestjs microservice API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/doc', app, document);

  await app.listen(process.env.GATEWAYS_PORT || 3000, () => {
    console.info(
      `Gateways runing http://${address()}:${process.env.GATEWAYS_PORT}`,
    );
  });
}
bootstrap();
