/* eslint-disable @typescript-eslint/ban-ts-comment */
import { HttpExceptionFilter } from '@app/libs/common/filters/http-exception.filter';
import { ResponseInterceptors } from '@app/libs/common/interceptor/response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import DEFAULT_SETTING from './system/config/config.setting';
import DEFAULT_OPTION from './system/config/config.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  // 自定义配置
  // @ts-ignore
  app.config.setting = DEFAULT_SETTING;
  // @ts-ignore
  app.config.option = DEFAULT_OPTION;
  global.app = app;

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

  await app.listen(DEFAULT_SETTING._port.gateways || 3000, () => {
    console.info(
      `Gateways runing http://localhost:${DEFAULT_SETTING._port.gateways}`,
    );
  });
}
bootstrap();
