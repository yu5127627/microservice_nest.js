export class BaseController {
  sendSuccess(result: any, code = 200, message = '操作成功') {
    return {
      code,
      message,
      result,
    };
  }
}
