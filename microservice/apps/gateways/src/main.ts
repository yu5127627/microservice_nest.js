import { HttpExceptionFilter } from '@app/libs/common/filters/http-exception.filter';
import { ResponseInterceptors } from '@app/libs/common/interceptor/response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GatewaysModule } from './gateways.module';
import { address } from 'ip';
import { join } from 'path';
import * as expressArtTemplate from 'express-art-template';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WhiteList } from './ssr/whitelist';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(GatewaysModule, {
    logger: ['error', 'warn'],
  });

  // app.useStaticAssets('public');
  app.useStaticAssets(join(__dirname, '../../../', 'public'), {
    prefix: '/static/',
  });
  app.setBaseViewsDir(join(__dirname, '../../../', 'views'));
  app.setViewEngine('html');
  app.engine('html', expressArtTemplate);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 },
  });

  await app.startAllMicroservices();

  // 全局验证
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false, // 关闭详细错误信息
      transform: true, // 类型转换
      skipMissingProperties: true, // 过滤多余属性
      stopAtFirstError: true,
    }),
  );
  // 全局注册响应拦截器
  app.useGlobalInterceptors(new ResponseInterceptors());
  // 全局异常过滤
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局路径前缀;
  app.setGlobalPrefix('api/v1', { exclude: WhiteList });
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
