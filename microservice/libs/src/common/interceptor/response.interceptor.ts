import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptors implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 请求的内容
    const request = context.switchToHttp().getRequest();
    // 返回的内容
    // const response = context.switchToHttp().getResponse();
    const now = Date.now();

    return next.handle().pipe(
      map((data) => {
        const { message, code, result } = data;
        return {
          code: code || 200,
          path: request.url,
          message: message || '操作成功',
          responsetime: `${Date.now() - now}ms`,
          result: result || data,
        };
      }),
    );
  }
}
