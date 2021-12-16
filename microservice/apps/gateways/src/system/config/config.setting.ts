/**
 * 自定义配置项 用作环境变量，带下划线部分为不可修改
 * 2021-12-12 23:22
 */
export default {
  _token_secret: 'nestjs.admin', // token 密钥
  _port: {
    gateways: 8001,
  },
  _db: {
    db_host: '127.0.0.1',
    db_port: 3306,
    db_username: 'root',
    db_password: 'example',
    db_database: 'microservice',
  },
  title: 'nestjs后台管理模版',
};
