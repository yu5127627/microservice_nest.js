import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import * as util from 'util';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let message = null;
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.BAD_REQUEST;
    let exceptionResponse: any = null;
    if (typeof exception === 'string') {
      message = exception;
    } else {
      if (exception.message) {
        message = exception.message;
      } else if (util.isFunction(exception.getResponse)) {
        exceptionResponse = exception.getResponse();
        console.log(exceptionResponse);
        if (typeof exceptionResponse === 'object') {
          message =
            typeof exceptionResponse.message === 'string'
              ? exceptionResponse.message
              : exceptionResponse.message[0];
        } else {
          message = exceptionResponse;
        }
      }
    }

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: response.req.url,
      message,
      // error,
      // ...exceptionResponse,
    });
  }
}
