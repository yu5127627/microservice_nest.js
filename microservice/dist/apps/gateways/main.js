/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/gateways/src/blog/tag/dto/TagCreate.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/gateways/src/blog/tag/dto/TagCreate.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagCreate = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class TagCreate {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '测试标签', description: '名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '标签名称必填' }),
    __metadata("design:type", String)
], TagCreate.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 99, description: '排序' }),
    __metadata("design:type", Number)
], TagCreate.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 'http://qapp-lm.oss-cn-hangzhou.aliyuncs.com/upload/lwyd/cover/1634138768954_1fht45hhr.jpg',
        description: '封面图',
    }),
    __metadata("design:type", String)
], TagCreate.prototype, "simg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '我是描述的内容',
        description: '描述',
    }),
    __metadata("design:type", String)
], TagCreate.prototype, "description", void 0);
exports.TagCreate = TagCreate;


/***/ }),

/***/ "./apps/gateways/src/blog/tag/dto/TagUpdate.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/gateways/src/blog/tag/dto/TagUpdate.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagUpdate = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class TagUpdate {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '测试标签', description: '名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '标签名称必填' }),
    __metadata("design:type", String)
], TagUpdate.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 99, description: '排序' }),
    (0, class_validator_1.IsNotEmpty)({ message: '标签排序必填' }),
    __metadata("design:type", Number)
], TagUpdate.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 'http://qapp-lm.oss-cn-hangzhou.aliyuncs.com/upload/lwyd/cover/1634138768954_1fht45hhr.jpg',
        description: '封面图',
    }),
    __metadata("design:type", String)
], TagUpdate.prototype, "simg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '我是描述的内容',
        description: '描述',
    }),
    __metadata("design:type", String)
], TagUpdate.prototype, "description", void 0);
exports.TagUpdate = TagUpdate;


/***/ }),

/***/ "./apps/gateways/src/blog/tag/tag.controller.ts":
/*!******************************************************!*\
  !*** ./apps/gateways/src/blog/tag/tag.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const TagCreate_dto_1 = __webpack_require__(/*! ./dto/TagCreate.dto */ "./apps/gateways/src/blog/tag/dto/TagCreate.dto.ts");
const TagUpdate_dto_1 = __webpack_require__(/*! ./dto/TagUpdate.dto */ "./apps/gateways/src/blog/tag/dto/TagUpdate.dto.ts");
let TagController = class TagController {
    constructor(client) {
        this.client = client;
    }
    list(attrs) {
        const pattern = { tag: 'list' };
        return this.client.send(pattern, { attrs });
    }
    create(body) {
        const pattern = { tag: 'create' };
        return this.client.send(pattern, body);
    }
    update(id, body) {
        const pattern = { tag: 'update' };
        return this.client.send(pattern, Object.assign({ id }, body));
    }
    delete(ids) {
        const pattern = { tag: 'delete' };
        return this.client.send(pattern, { ids });
    }
    detail(id) {
        const pattern = { tag: 'detail' };
        return this.client.send(pattern, { id });
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: '查询标签列表' }),
    (0, auth_decorator_1.Auth)(['tag:view']),
    __param(0, (0, common_1.Query)('attrs', new common_1.ParseArrayPipe({ items: String, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], TagController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建标签' }),
    (0, auth_decorator_1.Auth)(['tag:create']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof TagCreate_dto_1.TagCreate !== "undefined" && TagCreate_dto_1.TagCreate) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _d : Object)
], TagController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '编辑标签' }),
    (0, auth_decorator_1.Auth)(['tag:update']),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof TagUpdate_dto_1.TagUpdate !== "undefined" && TagUpdate_dto_1.TagUpdate) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _f : Object)
], TagController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '删除标签' }),
    (0, auth_decorator_1.Auth)(['tag:delete']),
    __param(0, (0, common_1.Param)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof Array !== "undefined" && Array) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _h : Object)
], TagController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '标签详情' }),
    (0, auth_decorator_1.Auth)(['tag:view']),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_j = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _j : Object)
], TagController.prototype, "detail", null);
TagController = __decorate([
    (0, common_1.Controller)('tag'),
    (0, swagger_1.ApiTags)('标签'),
    __param(0, (0, common_1.Inject)('BLOG_SERVICE')),
    __metadata("design:paramtypes", [typeof (_k = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _k : Object])
], TagController);
exports.TagController = TagController;


/***/ }),

/***/ "./apps/gateways/src/blog/tag/tag.module.ts":
/*!**************************************************!*\
  !*** ./apps/gateways/src/blog/tag/tag.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const auth_module_1 = __webpack_require__(/*! ../../system/auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const tag_controller_1 = __webpack_require__(/*! ./tag.controller */ "./apps/gateways/src/blog/tag/tag.controller.ts");
let TagModule = class TagModule {
};
TagModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        controllers: [tag_controller_1.TagController],
        providers: [
            {
                provide: 'BLOG_SERVICE',
                useFactory: (configService) => {
                    const blogPort = configService.get('BLOG_PORT');
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: '127.0.0.1',
                            port: blogPort || 8001,
                        },
                    });
                },
                inject: [config_1.ConfigService],
            },
        ],
    })
], TagModule);
exports.TagModule = TagModule;


/***/ }),

/***/ "./apps/gateways/src/gateways.module.ts":
/*!**********************************************!*\
  !*** ./apps/gateways/src/gateways.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewaysModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_module_1 = __webpack_require__(/*! ./system/auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/gateways/src/user/user.module.ts");
const role_module_1 = __webpack_require__(/*! ./system/role/role.module */ "./apps/gateways/src/system/role/role.module.ts");
const manage_module_1 = __webpack_require__(/*! ./system/manage/manage.module */ "./apps/gateways/src/system/manage/manage.module.ts");
const db_module_1 = __webpack_require__(/*! @app/libs/db/db.module */ "./libs/src/db/db.module.ts");
const menu_module_1 = __webpack_require__(/*! ./system/menu/menu.module */ "./apps/gateways/src/system/menu/menu.module.ts");
const config_module_1 = __webpack_require__(/*! ./system/config/config.module */ "./apps/gateways/src/system/config/config.module.ts");
const libs_1 = __webpack_require__(/*! @app/libs */ "./libs/src/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const log_module_1 = __webpack_require__(/*! ./log/log.module */ "./apps/gateways/src/log/log.module.ts");
const tag_module_1 = __webpack_require__(/*! ./blog/tag/tag.module */ "./apps/gateways/src/blog/tag/tag.module.ts");
let GatewaysModule = class GatewaysModule {
};
GatewaysModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, cache: true }),
            libs_1.LibsModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            role_module_1.RoleModule,
            manage_module_1.ManageModule,
            db_module_1.DbModule,
            menu_module_1.MenuModule,
            config_module_1.ConfigModule,
            log_module_1.LogModule,
            tag_module_1.TagModule,
        ],
    })
], GatewaysModule);
exports.GatewaysModule = GatewaysModule;


/***/ }),

/***/ "./apps/gateways/src/log/dto/LoginLogPages.dto.ts":
/*!********************************************************!*\
  !*** ./apps/gateways/src/log/dto/LoginLogPages.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginLogPagesDto = void 0;
const pagination_dto_1 = __webpack_require__(/*! @app/libs/common/dto/pagination.dto */ "./libs/src/common/dto/pagination.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class LoginLogPagesDto extends pagination_dto_1.PaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'admin', description: '用户名' }),
    __metadata("design:type", String)
], LoginLogPagesDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '西安', description: '登录地址' }),
    __metadata("design:type", String)
], LoginLogPagesDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'window', description: '登录平台' }),
    __metadata("design:type", String)
], LoginLogPagesDto.prototype, "ua", void 0);
exports.LoginLogPagesDto = LoginLogPagesDto;


/***/ }),

/***/ "./apps/gateways/src/log/log.controller.ts":
/*!*************************************************!*\
  !*** ./apps/gateways/src/log/log.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const LoginLogPages_dto_1 = __webpack_require__(/*! ./dto/LoginLogPages.dto */ "./apps/gateways/src/log/dto/LoginLogPages.dto.ts");
const log_service_1 = __webpack_require__(/*! ./log.service */ "./apps/gateways/src/log/log.service.ts");
let LogController = class LogController {
    constructor(logService) {
        this.logService = logService;
    }
    async loginLogPages(query) {
        const result = await this.logService.loginLogPages(query);
        return {
            code: 200,
            message: '登录日志查询成功',
            result,
        };
    }
};
__decorate([
    (0, common_1.Get)('/login'),
    (0, auth_decorator_1.Auth)(['login_log:view']),
    (0, swagger_1.ApiOperation)({ summary: '登录日志查询' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof LoginLogPages_dto_1.LoginLogPagesDto !== "undefined" && LoginLogPages_dto_1.LoginLogPagesDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], LogController.prototype, "loginLogPages", null);
LogController = __decorate([
    (0, common_1.Controller)('log'),
    (0, swagger_1.ApiTags)('日志'),
    __metadata("design:paramtypes", [typeof (_c = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" ? _c : Object])
], LogController);
exports.LogController = LogController;


/***/ }),

/***/ "./apps/gateways/src/log/log.module.ts":
/*!*********************************************!*\
  !*** ./apps/gateways/src/log/log.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogModule = void 0;
const loginLog_entity_1 = __webpack_require__(/*! @app/libs/db/entity/loginLog.entity */ "./libs/src/db/entity/loginLog.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_module_1 = __webpack_require__(/*! ../system/auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const log_controller_1 = __webpack_require__(/*! ./log.controller */ "./apps/gateways/src/log/log.controller.ts");
const log_service_1 = __webpack_require__(/*! ./log.service */ "./apps/gateways/src/log/log.service.ts");
let LogModule = class LogModule {
};
LogModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => auth_module_1.AuthModule), typeorm_1.TypeOrmModule.forFeature([loginLog_entity_1.LoginLog])],
        controllers: [log_controller_1.LogController],
        providers: [log_service_1.LogService],
        exports: [log_service_1.LogService],
    })
], LogModule);
exports.LogModule = LogModule;


/***/ }),

/***/ "./apps/gateways/src/log/log.service.ts":
/*!**********************************************!*\
  !*** ./apps/gateways/src/log/log.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const loginLog_entity_1 = __webpack_require__(/*! @app/libs/db/entity/loginLog.entity */ "./libs/src/db/entity/loginLog.entity.ts");
const libQqwry = __webpack_require__(/*! lib-qqwry-yyyj */ "lib-qqwry-yyyj");
const ipInterface = libQqwry.init();
ipInterface.speed();
let LogService = class LogService {
    constructor(loginLogModel) {
        this.loginLogModel = loginLogModel;
    }
    async loginLogCreate(body) {
        let city;
        try {
            const { Country } = ipInterface.searchIP(body.ip);
            city = Country || '';
        }
        catch (error) {
            console.log(error);
        }
        return await this.loginLogModel.save({
            manageId: body.id,
            username: body.username,
            address: city,
            ua: body.ua,
            ip: body.ip,
        });
    }
    async loginLogPages(query) {
        const { username, page, limit, ua, address } = query;
        const filter = {
            skip: (page - 1) * limit,
            take: limit,
        };
        if (username)
            filter.where.username = (0, typeorm_2.Like)(`%${username}%`);
        if (ua)
            filter.where.ua = (0, typeorm_2.Like)(`%${ua}%`);
        if (address)
            filter.where.address = (0, typeorm_2.Like)(`%${address}%`);
        const [rows, total] = await this.loginLogModel.findAndCount(filter);
        return {
            rows,
            total,
            pager: {
                page,
                limit,
                total,
                offset: (page - 1) * limit,
                pageTotal: Math.ceil(total / limit),
            },
        };
    }
};
LogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loginLog_entity_1.LoginLog)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], LogService);
exports.LogService = LogService;


/***/ }),

/***/ "./apps/gateways/src/system/auth/auth.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/gateways/src/system/auth/auth.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const ip_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/ip.decorator */ "./libs/src/common/decorator/ip.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const log_service_1 = __webpack_require__(/*! ../../log/log.service */ "./apps/gateways/src/log/log.service.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/gateways/src/system/auth/auth.service.ts");
const ManageLocalLogin_dto_1 = __webpack_require__(/*! ./dto/ManageLocalLogin.dto */ "./apps/gateways/src/system/auth/dto/ManageLocalLogin.dto.ts");
const ua_parser_js_1 = __webpack_require__(/*! ua-parser-js */ "ua-parser-js");
let AuthController = class AuthController {
    constructor(authService, logService) {
        this.authService = authService;
        this.logService = logService;
    }
    async login(body, req, ip) {
        const token = await this.authService.createToken(req.user);
        const { ua } = (0, ua_parser_js_1.UAParser)(req.headers['user-agent']);
        req.user.ip = ip;
        req.user.ua = ua;
        await this.logService.loginLogCreate(req.user);
        return {
            message: '登录成功',
            result: token,
        };
    }
    async detail(req) {
        const result = await this.authService.detail(req.user);
        return {
            message: '用户信息获取成功',
            result,
        };
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('ManageLocal')),
    (0, swagger_1.ApiOperation)({ summary: '管理员登录' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, ip_decorator_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ManageLocalLogin_dto_1.ManageLocalLoginDto !== "undefined" && ManageLocalLogin_dto_1.ManageLocalLoginDto) === "function" ? _a : Object, Object, String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('detail'),
    (0, auth_decorator_1.Auth)(),
    (0, swagger_1.ApiOperation)({ summary: '用户信息' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthController.prototype, "detail", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('认证'),
    __metadata("design:paramtypes", [typeof (_d = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _d : Object, typeof (_e = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" ? _e : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/gateways/src/system/auth/auth.module.ts":
/*!******************************************************!*\
  !*** ./apps/gateways/src/system/auth/auth.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const manage_entity_1 = __webpack_require__(/*! @app/libs/db/entity/manage.entity */ "./libs/src/db/entity/manage.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/gateways/src/system/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/gateways/src/system/auth/auth.service.ts");
const manageLocal_strategy_1 = __webpack_require__(/*! ./strategy/manageLocal.strategy */ "./apps/gateways/src/system/auth/strategy/manageLocal.strategy.ts");
const auth_guard_1 = __webpack_require__(/*! @app/libs/common/guards/auth.guard */ "./libs/src/common/guards/auth.guard.ts");
const log_module_1 = __webpack_require__(/*! ../../log/log.module */ "./apps/gateways/src/log/log.module.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => log_module_1.LogModule),
            typeorm_1.TypeOrmModule.forFeature([manage_entity_1.Manage]),
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: async () => {
                    return {
                        secret: process.env.TOKEN_SECRET,
                        signOptions: { expiresIn: '1d' },
                    };
                },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, manageLocal_strategy_1.ManageLocalStrategy, auth_guard_1.AuthGuard],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/gateways/src/system/auth/auth.service.ts":
/*!*******************************************************!*\
  !*** ./apps/gateways/src/system/auth/auth.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const manage_entity_1 = __webpack_require__(/*! @app/libs/db/entity/manage.entity */ "./libs/src/db/entity/manage.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let AuthService = class AuthService {
    constructor(manageModel, jwtService) {
        this.manageModel = manageModel;
        this.jwtService = jwtService;
    }
    async validateManage(username, password) {
        const manage = await this.manageModel.findOne({
            where: { username },
            select: ['id', 'username', 'password', 'roleId'],
        });
        if (!manage)
            return null;
        if ((0, bcryptjs_1.compareSync)(password, manage.password)) {
            const { password } = manage, result = __rest(manage, ["password"]);
            return result;
        }
        else {
            throw new common_1.BadRequestException('账号密码错误');
        }
    }
    createToken(payload) {
        return this.jwtService.sign(payload);
    }
    vertifyToken(token, secret) {
        if (token.includes('Bearer')) {
            token = token.slice(7);
        }
        return this.jwtService.verify(token, { secret });
    }
    async detail(user) {
        return await this.manageModel.findOne(user.id);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(manage_entity_1.Manage)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/gateways/src/system/auth/dto/ManageLocalLogin.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/gateways/src/system/auth/dto/ManageLocalLogin.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManageLocalLoginDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ManageLocalLoginDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'admin', description: '用户名' }),
    (0, class_validator_1.IsNotEmpty)({ message: '用户名不得为空' }),
    __metadata("design:type", String)
], ManageLocalLoginDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '123456', description: '密码' }),
    (0, class_validator_1.IsNotEmpty)({ message: '密码不得为空' }),
    __metadata("design:type", String)
], ManageLocalLoginDto.prototype, "password", void 0);
exports.ManageLocalLoginDto = ManageLocalLoginDto;


/***/ }),

/***/ "./apps/gateways/src/system/auth/strategy/manageLocal.strategy.ts":
/*!************************************************************************!*\
  !*** ./apps/gateways/src/system/auth/strategy/manageLocal.strategy.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManageLocalStrategy = void 0;
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./apps/gateways/src/system/auth/auth.service.ts");
let ManageLocalStrategy = class ManageLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'ManageLocal') {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async validate(username, password) {
        const user = await this.authService.validateManage(username, password);
        if (!user)
            throw new common_1.UnauthorizedException();
        return user;
    }
};
ManageLocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], ManageLocalStrategy);
exports.ManageLocalStrategy = ManageLocalStrategy;


/***/ }),

/***/ "./apps/gateways/src/system/config/config.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/gateways/src/system/config/config.controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const result_interface_1 = __webpack_require__(/*! @app/libs/common/interface/result.interface */ "./libs/src/common/interface/result.interface.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const config_service_1 = __webpack_require__(/*! ./config.service */ "./apps/gateways/src/system/config/config.service.ts");
const DEFAULT_SERVICE = 'configService';
let ConfigController = class ConfigController {
    constructor(configService) {
        this.configService = configService;
    }
    list(mode) {
        const result = this[DEFAULT_SERVICE].list(mode);
        return { result };
    }
    async refresh() {
        const result = await this[DEFAULT_SERVICE].syncConfig();
        return { result };
    }
};
__decorate([
    (0, common_1.Get)('/:mode'),
    (0, swagger_1.ApiOperation)({ summary: '获取配置列表' }),
    (0, auth_decorator_1.Auth)(['setting:view']),
    __param(0, (0, common_1.Param)('mode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_a = typeof result_interface_1.Result !== "undefined" && result_interface_1.Result) === "function" ? _a : Object)
], ConfigController.prototype, "list", null);
__decorate([
    (0, common_1.Put)('refresh'),
    (0, swagger_1.ApiOperation)({ summary: '刷新配置列表' }),
    (0, auth_decorator_1.Auth)(['setting:view']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ConfigController.prototype, "refresh", null);
ConfigController = __decorate([
    (0, common_1.Controller)('setting'),
    (0, swagger_1.ApiTags)('配置'),
    __metadata("design:paramtypes", [typeof (_c = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _c : Object])
], ConfigController);
exports.ConfigController = ConfigController;


/***/ }),

/***/ "./apps/gateways/src/system/config/config.module.ts":
/*!**********************************************************!*\
  !*** ./apps/gateways/src/system/config/config.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigModule = void 0;
const setting_entity_1 = __webpack_require__(/*! @app/libs/db/entity/setting.entity */ "./libs/src/db/entity/setting.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const config_controller_1 = __webpack_require__(/*! ./config.controller */ "./apps/gateways/src/system/config/config.controller.ts");
const config_service_1 = __webpack_require__(/*! ./config.service */ "./apps/gateways/src/system/config/config.service.ts");
let ConfigModule = class ConfigModule {
};
ConfigModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([setting_entity_1.Setting]), auth_module_1.AuthModule],
        controllers: [config_controller_1.ConfigController],
        providers: [config_service_1.ConfigService],
        exports: [config_service_1.ConfigService],
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;


/***/ }),

/***/ "./apps/gateways/src/system/config/config.option.ts":
/*!**********************************************************!*\
  !*** ./apps/gateways/src/system/config/config.option.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    order_state: [
        { label: '成功', value: 'success' },
        { label: '失败', value: 'error' },
    ],
};


/***/ }),

/***/ "./apps/gateways/src/system/config/config.service.ts":
/*!***********************************************************!*\
  !*** ./apps/gateways/src/system/config/config.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const setting_entity_1 = __webpack_require__(/*! @app/libs/db/entity/setting.entity */ "./libs/src/db/entity/setting.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const config_setting_1 = __webpack_require__(/*! ./config.setting */ "./apps/gateways/src/system/config/config.setting.ts");
const config_option_1 = __webpack_require__(/*! ./config.option */ "./apps/gateways/src/system/config/config.option.ts");
const DEFAULT_MODEL = 'settingModel';
let ConfigService = class ConfigService {
    constructor(settingModel) {
        this.settingModel = settingModel;
        this.defaultSetting = null;
        this.defaultOption = null;
    }
    async onApplicationBootstrap() {
        const setting = this.getConfig();
        this.defaultSetting = JSON.parse(JSON.stringify(setting));
        this.defaultOption = JSON.parse(JSON.stringify(config_option_1.default));
    }
    getConfig() {
        const setting = {};
        for (const [key, val] of Object.entries(config_setting_1.default)) {
            if (key.charAt(0) != '_')
                setting[key] = val;
        }
        return setting;
    }
    list(mode) {
        if (mode === 'admin') {
        }
        else if (mode === 'client') {
        }
        return {
            setting: this.defaultSetting,
            option: this.defaultOption,
        };
    }
    async syncConfig() {
        const rows = await this[DEFAULT_MODEL].find({ order: { sort: 1 } });
        const sourceSetting = this.getConfig();
        const setting = Object.assign({}, this.defaultSetting, sourceSetting);
        for (const row of rows) {
            const valuetype = (row.valuetype || 'string').toLowerCase();
            let value = row.value;
            switch (valuetype) {
                case 'string':
                    value = String(value);
                    break;
                case 'number':
                    value = Number(value);
                    break;
                case 'boolean':
                    value = Boolean(value);
                    break;
                case 'json':
                    try {
                        value = JSON.parse(value);
                    }
                    catch (error) {
                        console.error(`格式化系统设置${row.id} ${row.key} ${row.value}失败!`, error);
                        continue;
                    }
                    break;
            }
            if (row.group) {
                if (!setting[row.group]) {
                    setting[row.group] = {};
                }
                setting[row.group][row.key] = value;
            }
            else {
                setting[row.key] = value;
            }
        }
        this.defaultSetting = setting;
        return setting;
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(setting_entity_1.Setting)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ConfigService);
exports.ConfigService = ConfigService;


/***/ }),

/***/ "./apps/gateways/src/system/config/config.setting.ts":
/*!***********************************************************!*\
  !*** ./apps/gateways/src/system/config/config.setting.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    title: 'nestjs后台管理模版',
};


/***/ }),

/***/ "./apps/gateways/src/system/manage/dto/ManageCreate.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/gateways/src/system/manage/dto/ManageCreate.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManageCreateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ManageCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'admin', description: '用户名' }),
    (0, class_validator_1.IsNotEmpty)({ message: '用户名必填' }),
    __metadata("design:type", String)
], ManageCreateDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        default: 123456,
        description: '密码',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: '密码必填' }),
    __metadata("design:type", String)
], ManageCreateDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1, description: '角色ID' }),
    (0, class_validator_1.IsNotEmpty)({ message: '角色必填' }),
    __metadata("design:type", Number)
], ManageCreateDto.prototype, "roleId", void 0);
exports.ManageCreateDto = ManageCreateDto;


/***/ }),

/***/ "./apps/gateways/src/system/manage/dto/ManagePages.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/gateways/src/system/manage/dto/ManagePages.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManagePagesDto = void 0;
const pagination_dto_1 = __webpack_require__(/*! @app/libs/common/dto/pagination.dto */ "./libs/src/common/dto/pagination.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ManagePagesDto extends pagination_dto_1.PaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'admin', description: '用户名' }),
    __metadata("design:type", String)
], ManagePagesDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 1, description: '角色ID' }),
    __metadata("design:type", Number)
], ManagePagesDto.prototype, "roleId", void 0);
exports.ManagePagesDto = ManagePagesDto;


/***/ }),

/***/ "./apps/gateways/src/system/manage/dto/ManageUpdate.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/gateways/src/system/manage/dto/ManageUpdate.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManageUpdateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ManageUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'admin', description: '用户名' }),
    __metadata("design:type", String)
], ManageUpdateDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 123456,
        description: '密码',
    }),
    __metadata("design:type", String)
], ManageUpdateDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 1, description: '角色ID' }),
    __metadata("design:type", Number)
], ManageUpdateDto.prototype, "roleId", void 0);
exports.ManageUpdateDto = ManageUpdateDto;


/***/ }),

/***/ "./apps/gateways/src/system/manage/manage.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/gateways/src/system/manage/manage.controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManageController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const ManageCreate_dto_1 = __webpack_require__(/*! ./dto/ManageCreate.dto */ "./apps/gateways/src/system/manage/dto/ManageCreate.dto.ts");
const ManagePages_dto_1 = __webpack_require__(/*! ./dto/ManagePages.dto */ "./apps/gateways/src/system/manage/dto/ManagePages.dto.ts");
const ManageUpdate_dto_1 = __webpack_require__(/*! ./dto/ManageUpdate.dto */ "./apps/gateways/src/system/manage/dto/ManageUpdate.dto.ts");
const manage_service_1 = __webpack_require__(/*! ./manage.service */ "./apps/gateways/src/system/manage/manage.service.ts");
const DEFAULT_SERVICE = 'managerService';
let ManageController = class ManageController {
    constructor(managerService) {
        this.managerService = managerService;
    }
    async create(body) {
        const result = await this[DEFAULT_SERVICE].create(body);
        return {
            code: 200,
            message: '管理员创建成功',
            result,
        };
    }
    async update(id, body) {
        const result = await this[DEFAULT_SERVICE].update(id, body);
        return {
            code: 200,
            message: '管理员修改成功',
            result,
        };
    }
    async delete(ids) {
        const result = await this[DEFAULT_SERVICE].delete(ids);
        return {
            code: 200,
            message: '管理员删除成功',
            result,
        };
    }
    async pages(query) {
        const result = await this[DEFAULT_SERVICE].pages(query);
        return {
            code: 200,
            message: '管理员查询成功',
            result,
        };
    }
    async detail(id) {
        const result = await this[DEFAULT_SERVICE].detail(id);
        return {
            message: '管理员信息查询成功',
            result,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建管理员' }),
    (0, auth_decorator_1.Auth)(['manage:create']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ManageCreate_dto_1.ManageCreateDto !== "undefined" && ManageCreate_dto_1.ManageCreateDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ManageController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '修改管理员' }),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof ManageUpdate_dto_1.ManageUpdateDto !== "undefined" && ManageUpdate_dto_1.ManageUpdateDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ManageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: '删除管理员' }),
    (0, auth_decorator_1.Auth)(['manage:delete']),
    __param(0, (0, common_1.Body)('ids', new common_1.ParseArrayPipe({ items: Number, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ManageController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '分页查询' }),
    (0, auth_decorator_1.Auth)(['manage:view']),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof ManagePages_dto_1.ManagePagesDto !== "undefined" && ManagePages_dto_1.ManagePagesDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ManageController.prototype, "pages", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '管理员详情' }),
    (0, auth_decorator_1.Auth)(['manage:view']),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ManageController.prototype, "detail", null);
ManageController = __decorate([
    (0, common_1.Controller)('manage'),
    (0, swagger_1.ApiTags)('管理员'),
    __metadata("design:paramtypes", [typeof (_j = typeof manage_service_1.ManageService !== "undefined" && manage_service_1.ManageService) === "function" ? _j : Object])
], ManageController);
exports.ManageController = ManageController;


/***/ }),

/***/ "./apps/gateways/src/system/manage/manage.module.ts":
/*!**********************************************************!*\
  !*** ./apps/gateways/src/system/manage/manage.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManageModule = void 0;
const manage_entity_1 = __webpack_require__(/*! @app/libs/db/entity/manage.entity */ "./libs/src/db/entity/manage.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const manage_controller_1 = __webpack_require__(/*! ./manage.controller */ "./apps/gateways/src/system/manage/manage.controller.ts");
const manage_service_1 = __webpack_require__(/*! ./manage.service */ "./apps/gateways/src/system/manage/manage.service.ts");
let ManageModule = class ManageModule {
};
ManageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([manage_entity_1.Manage]), auth_module_1.AuthModule],
        controllers: [manage_controller_1.ManageController],
        providers: [manage_service_1.ManageService],
    })
], ManageModule);
exports.ManageModule = ManageModule;


/***/ }),

/***/ "./apps/gateways/src/system/manage/manage.service.ts":
/*!***********************************************************!*\
  !*** ./apps/gateways/src/system/manage/manage.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManageService = void 0;
const manage_entity_1 = __webpack_require__(/*! @app/libs/db/entity/manage.entity */ "./libs/src/db/entity/manage.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const DEFAULT_MODEL = 'manageModel';
let ManageService = class ManageService {
    constructor(manageModel) {
        this.manageModel = manageModel;
    }
    async onModuleInit() {
        const row = await this[DEFAULT_MODEL].findOne({
            where: { username: 'ykn' },
        });
        if (!row) {
            await this[DEFAULT_MODEL].save({
                username: 'ykn',
                password: (0, bcryptjs_1.hashSync)('123456'),
                roleId: 1,
                avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erWiafXdE7AmAm4F90UJd6yungJRRZPibibTOgIFsF4vq7LSHLiaGWZmltIO2cLibia3L3UzWlSXI4Y6ofg/132',
                nickname: '将梦拉到现实',
            });
            console.log('管理员创建成功！！！');
        }
    }
    async create(body) {
        body.password = (0, bcryptjs_1.hashSync)(body.password);
        return await this[DEFAULT_MODEL].save(body);
    }
    async update(id, body) {
        if (body.password) {
            body.password = (0, bcryptjs_1.hashSync)(body.password);
        }
        await this[DEFAULT_MODEL].update(id, body);
        return await this[DEFAULT_MODEL].findOne(id);
    }
    async delete(ids) {
        return await this[DEFAULT_MODEL].delete(ids);
    }
    async detail(id) {
        return await this[DEFAULT_MODEL].findOne(id);
    }
    async pages(query) {
        const { username, page, limit, roleId } = query;
        const managefilter = {
            skip: (page - 1) * limit,
            take: limit,
            where: {},
        };
        if (username)
            managefilter.where.username = (0, typeorm_2.Like)(`%${username}%`);
        if (roleId)
            managefilter.where.roleId = roleId;
        const [rows, total] = await this[DEFAULT_MODEL].findAndCount(managefilter);
        return {
            rows,
            total,
            pager: {
                page,
                limit,
                total,
                offset: (page - 1) * limit,
                pageTotal: Math.ceil(total / limit),
            },
        };
    }
};
ManageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(manage_entity_1.Manage)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ManageService);
exports.ManageService = ManageService;


/***/ }),

/***/ "./apps/gateways/src/system/menu/dto/MenuCreate.dto.ts":
/*!*************************************************************!*\
  !*** ./apps/gateways/src/system/menu/dto/MenuCreate.dto.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuCreateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class MenuCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 1,
        description: '0:目录 1:菜单 2:外链',
    }),
    __metadata("design:type", Number)
], MenuCreateDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'icon', description: '图标' }),
    __metadata("design:type", String)
], MenuCreateDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0, description: '菜单是否缓存' }),
    __metadata("design:type", Boolean)
], MenuCreateDto.prototype, "cache", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 0, description: '是否在菜单显示' }),
    __metadata("design:type", Boolean)
], MenuCreateDto.prototype, "hide", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '测试', description: '菜单名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '菜单名称必填' }),
    __metadata("design:type", String)
], MenuCreateDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '', description: '路由地址' }),
    __metadata("design:type", String)
], MenuCreateDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '测试', description: '组件名称' }),
    __metadata("design:type", String)
], MenuCreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 'home:create',
        description: '操作规则',
    }),
    __metadata("design:type", String)
], MenuCreateDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 99, description: '排序' }),
    __metadata("design:type", Number)
], MenuCreateDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '/temp/index.vue',
        description: '组件路径',
    }),
    __metadata("design:type", String)
], MenuCreateDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 0, description: '父菜单ID 0:无' }),
    __metadata("design:type", Number)
], MenuCreateDto.prototype, "pid", void 0);
exports.MenuCreateDto = MenuCreateDto;


/***/ }),

/***/ "./apps/gateways/src/system/menu/dto/MenuUpdate.dto.ts":
/*!*************************************************************!*\
  !*** ./apps/gateways/src/system/menu/dto/MenuUpdate.dto.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuUpdateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class MenuUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 1,
        description: '0:目录 1:菜单 2:外链',
    }),
    __metadata("design:type", Number)
], MenuUpdateDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'icon', description: '图标' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'icon必填' }),
    __metadata("design:type", String)
], MenuUpdateDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0, description: '菜单是否缓存' }),
    __metadata("design:type", Boolean)
], MenuUpdateDto.prototype, "cache", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0, description: '是否在菜单显示' }),
    __metadata("design:type", Boolean)
], MenuUpdateDto.prototype, "hide", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '测试', description: '菜单名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '菜单名称必填' }),
    __metadata("design:type", String)
], MenuUpdateDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '/', description: '路由地址' }),
    (0, class_validator_1.IsNotEmpty)({ message: '路由地址必填' }),
    __metadata("design:type", String)
], MenuUpdateDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '测试', description: '组件名称' }),
    __metadata("design:type", String)
], MenuUpdateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 'home:create',
        description: '操作规则',
    }),
    __metadata("design:type", String)
], MenuUpdateDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 99, description: '排序' }),
    __metadata("design:type", Number)
], MenuUpdateDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '/temp/index.vue',
        description: '组件路径',
    }),
    __metadata("design:type", String)
], MenuUpdateDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0, description: '父菜单ID 0:无' }),
    __metadata("design:type", Number)
], MenuUpdateDto.prototype, "pid", void 0);
exports.MenuUpdateDto = MenuUpdateDto;


/***/ }),

/***/ "./apps/gateways/src/system/menu/menu.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/gateways/src/system/menu/menu.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const MenuCreate_dto_1 = __webpack_require__(/*! ./dto/MenuCreate.dto */ "./apps/gateways/src/system/menu/dto/MenuCreate.dto.ts");
const MenuUpdate_dto_1 = __webpack_require__(/*! ./dto/MenuUpdate.dto */ "./apps/gateways/src/system/menu/dto/MenuUpdate.dto.ts");
const menu_service_1 = __webpack_require__(/*! ./menu.service */ "./apps/gateways/src/system/menu/menu.service.ts");
const DEFAULT_SERVICE = 'menuService';
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async create(body) {
        const result = await this[DEFAULT_SERVICE].create(body);
        return {
            message: '菜单创建成功',
            result,
        };
    }
    async update(id, body) {
        const result = await this[DEFAULT_SERVICE].update(id, body);
        return {
            code: 200,
            message: '菜单修改成功',
            result,
        };
    }
    async delete(ids) {
        const result = await this[DEFAULT_SERVICE].delete(ids);
        return {
            code: 200,
            message: '菜单删除成功',
            result,
        };
    }
    async list(attrs) {
        const result = await this[DEFAULT_SERVICE].list(attrs);
        return {
            code: 200,
            message: '菜单查询成功',
            result,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建菜单' }),
    (0, auth_decorator_1.Auth)(['menu:create']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof MenuCreate_dto_1.MenuCreateDto !== "undefined" && MenuCreate_dto_1.MenuCreateDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MenuController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '修改菜单' }),
    (0, auth_decorator_1.Auth)(['menu:update']),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof MenuUpdate_dto_1.MenuUpdateDto !== "undefined" && MenuUpdate_dto_1.MenuUpdateDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], MenuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: '删除菜单' }),
    (0, auth_decorator_1.Auth)(['menu:delete']),
    __param(0, (0, common_1.Body)('ids', new common_1.ParseArrayPipe({ items: Number, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], MenuController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: '列表查询' }),
    (0, auth_decorator_1.Auth)(['menu:view']),
    __param(0, (0, common_1.Query)('attrs', new common_1.ParseArrayPipe({ items: String, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof Array !== "undefined" && Array) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], MenuController.prototype, "list", null);
MenuController = __decorate([
    (0, common_1.Controller)('menu'),
    (0, swagger_1.ApiTags)('菜单'),
    __metadata("design:paramtypes", [typeof (_h = typeof menu_service_1.MenuService !== "undefined" && menu_service_1.MenuService) === "function" ? _h : Object])
], MenuController);
exports.MenuController = MenuController;


/***/ }),

/***/ "./apps/gateways/src/system/menu/menu.module.ts":
/*!******************************************************!*\
  !*** ./apps/gateways/src/system/menu/menu.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuModule = void 0;
const menu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/menu.entity */ "./libs/src/db/entity/menu.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const menu_controller_1 = __webpack_require__(/*! ./menu.controller */ "./apps/gateways/src/system/menu/menu.controller.ts");
const menu_service_1 = __webpack_require__(/*! ./menu.service */ "./apps/gateways/src/system/menu/menu.service.ts");
let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([menu_entity_1.Menu]), auth_module_1.AuthModule],
        controllers: [menu_controller_1.MenuController],
        providers: [menu_service_1.MenuService],
    })
], MenuModule);
exports.MenuModule = MenuModule;


/***/ }),

/***/ "./apps/gateways/src/system/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./apps/gateways/src/system/menu/menu.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuService = void 0;
const menu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/menu.entity */ "./libs/src/db/entity/menu.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const DEFAULT_MODEL = 'menuModel';
let MenuService = class MenuService {
    constructor(menuModel) {
        this.menuModel = menuModel;
    }
    async create(body) {
        return await this[DEFAULT_MODEL].save(body);
    }
    async update(id, body) {
        await this[DEFAULT_MODEL].update(id, body);
        return await this[DEFAULT_MODEL].findOne(id);
    }
    async delete(ids) {
        return await this[DEFAULT_MODEL].delete(ids);
    }
    async list(attrs) {
        if (attrs[0] === 'all') {
            return await this[DEFAULT_MODEL].find();
        }
        return await this[DEFAULT_MODEL].find({ select: attrs });
    }
};
MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MenuService);
exports.MenuService = MenuService;


/***/ }),

/***/ "./apps/gateways/src/system/role/dto/RoleCreate.dto.ts":
/*!*************************************************************!*\
  !*** ./apps/gateways/src/system/role/dto/RoleCreate.dto.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleCreateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RoleCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '管理员', description: '管理员名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '名称必填' }),
    __metadata("design:type", String)
], RoleCreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        default: 10,
        description: '级别',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: '级别必填' }),
    __metadata("design:type", Number)
], RoleCreateDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '我是角儿描述',
        description: '角色描述',
    }),
    __metadata("design:type", String)
], RoleCreateDto.prototype, "description", void 0);
exports.RoleCreateDto = RoleCreateDto;


/***/ }),

/***/ "./apps/gateways/src/system/role/dto/RolePages.dto.ts":
/*!************************************************************!*\
  !*** ./apps/gateways/src/system/role/dto/RolePages.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolePagesDto = void 0;
const pagination_dto_1 = __webpack_require__(/*! @app/libs/common/dto/pagination.dto */ "./libs/src/common/dto/pagination.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RolePagesDto extends pagination_dto_1.PaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '管理员', description: '角色名称' }),
    __metadata("design:type", String)
], RolePagesDto.prototype, "name", void 0);
exports.RolePagesDto = RolePagesDto;


/***/ }),

/***/ "./apps/gateways/src/system/role/dto/RoleRules.dto.ts":
/*!************************************************************!*\
  !*** ./apps/gateways/src/system/role/dto/RoleRules.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleRulesDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RoleRulesDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        default: [1, 2, 3],
        description: '菜单ID数组',
    }),
    (0, class_validator_1.IsArray)({ message: '菜单ID必须是一个数组' }),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], RoleRulesDto.prototype, "menuIds", void 0);
exports.RoleRulesDto = RoleRulesDto;


/***/ }),

/***/ "./apps/gateways/src/system/role/dto/RoleUpdate.dto.ts":
/*!*************************************************************!*\
  !*** ./apps/gateways/src/system/role/dto/RoleUpdate.dto.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleUpdateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RoleUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '管理员',
        description: '管理员名称',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RoleUpdateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 10,
        description: '级别',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], RoleUpdateDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '我是角儿描述',
        description: '角色描述',
    }),
    __metadata("design:type", String)
], RoleUpdateDto.prototype, "description", void 0);
exports.RoleUpdateDto = RoleUpdateDto;


/***/ }),

/***/ "./apps/gateways/src/system/role/role.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/gateways/src/system/role/role.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const RoleCreate_dto_1 = __webpack_require__(/*! ./dto/RoleCreate.dto */ "./apps/gateways/src/system/role/dto/RoleCreate.dto.ts");
const RolePages_dto_1 = __webpack_require__(/*! ./dto/RolePages.dto */ "./apps/gateways/src/system/role/dto/RolePages.dto.ts");
const RoleRules_dto_1 = __webpack_require__(/*! ./dto/RoleRules.dto */ "./apps/gateways/src/system/role/dto/RoleRules.dto.ts");
const RoleUpdate_dto_1 = __webpack_require__(/*! ./dto/RoleUpdate.dto */ "./apps/gateways/src/system/role/dto/RoleUpdate.dto.ts");
const role_service_1 = __webpack_require__(/*! ./role.service */ "./apps/gateways/src/system/role/role.service.ts");
const DEFAULT_SERVICE = 'roleService';
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async getActions(id) {
        const result = await this[DEFAULT_SERVICE].getActions(id);
        return {
            code: 200,
            message: '角色菜单查询成功',
            result,
        };
    }
    async setAction(id, body) {
        const result = await this[DEFAULT_SERVICE].setAction(id, body);
        return {
            message: '角色权限修改成功',
            result,
        };
    }
    async create(body) {
        const result = await this[DEFAULT_SERVICE].create(body);
        return {
            code: 200,
            message: '角色创建成功',
            result,
        };
    }
    async update(id, body) {
        const result = await this[DEFAULT_SERVICE].update(id, body);
        return {
            code: 200,
            message: '角色修改成功',
            result,
        };
    }
    async delete(ids) {
        const result = await this[DEFAULT_SERVICE].delete(ids);
        return {
            code: 200,
            message: '角色删除成功',
            result,
        };
    }
    async pages(query) {
        const result = await this[DEFAULT_SERVICE].pages(query);
        return {
            code: 200,
            message: '角色查询成功',
            result,
        };
    }
    async list(attrs) {
        const result = await this[DEFAULT_SERVICE].list(attrs);
        return {
            code: 200,
            message: '角色查询成功',
            result,
        };
    }
};
__decorate([
    (0, common_1.Get)('/actions/:id'),
    (0, swagger_1.ApiOperation)({ summary: '查询角色菜单' }),
    (0, auth_decorator_1.Auth)(['menu:view', 'role:view']),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], RoleController.prototype, "getActions", null);
__decorate([
    (0, common_1.Put)('actions/:id'),
    (0, swagger_1.ApiOperation)({ summary: '修改角色权限' }),
    (0, auth_decorator_1.Auth)(['role:update', 'role:update']),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof RoleRules_dto_1.RoleRulesDto !== "undefined" && RoleRules_dto_1.RoleRulesDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], RoleController.prototype, "setAction", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建角色' }),
    (0, auth_decorator_1.Auth)(['role:create']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof RoleCreate_dto_1.RoleCreateDto !== "undefined" && RoleCreate_dto_1.RoleCreateDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '修改角色' }),
    (0, auth_decorator_1.Auth)(['role:update']),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_f = typeof RoleUpdate_dto_1.RoleUpdateDto !== "undefined" && RoleUpdate_dto_1.RoleUpdateDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: '删除角色' }),
    (0, auth_decorator_1.Auth)(['role:delete']),
    __param(0, (0, common_1.Body)('ids', new common_1.ParseArrayPipe({ items: Number, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], RoleController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '分页查询' }),
    (0, auth_decorator_1.Auth)(['role:view']),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof RolePages_dto_1.RolePagesDto !== "undefined" && RolePages_dto_1.RolePagesDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], RoleController.prototype, "pages", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: '列表查询' }),
    (0, auth_decorator_1.Auth)(['role:view']),
    __param(0, (0, common_1.Query)('attrs', new common_1.ParseArrayPipe({ items: String, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof Array !== "undefined" && Array) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], RoleController.prototype, "list", null);
RoleController = __decorate([
    (0, common_1.Controller)('role'),
    (0, swagger_1.ApiTags)('角色'),
    __metadata("design:paramtypes", [typeof (_o = typeof role_service_1.RoleService !== "undefined" && role_service_1.RoleService) === "function" ? _o : Object])
], RoleController);
exports.RoleController = RoleController;


/***/ }),

/***/ "./apps/gateways/src/system/role/role.module.ts":
/*!******************************************************!*\
  !*** ./apps/gateways/src/system/role/role.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleModule = void 0;
const role_entity_1 = __webpack_require__(/*! @app/libs/db/entity/role.entity */ "./libs/src/db/entity/role.entity.ts");
const roleMenu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/roleMenu.entity */ "./libs/src/db/entity/roleMenu.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const role_controller_1 = __webpack_require__(/*! ./role.controller */ "./apps/gateways/src/system/role/role.controller.ts");
const role_service_1 = __webpack_require__(/*! ./role.service */ "./apps/gateways/src/system/role/role.service.ts");
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role, roleMenu_entity_1.RoleMenu]), auth_module_1.AuthModule],
        controllers: [role_controller_1.RoleController],
        providers: [role_service_1.RoleService],
    })
], RoleModule);
exports.RoleModule = RoleModule;


/***/ }),

/***/ "./apps/gateways/src/system/role/role.service.ts":
/*!*******************************************************!*\
  !*** ./apps/gateways/src/system/role/role.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleService = void 0;
const role_entity_1 = __webpack_require__(/*! @app/libs/db/entity/role.entity */ "./libs/src/db/entity/role.entity.ts");
const roleMenu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/roleMenu.entity */ "./libs/src/db/entity/roleMenu.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const DEFAULT_MODEL = 'roleModel';
let RoleService = class RoleService {
    constructor(roleModel, roleMenuModel) {
        this.roleModel = roleModel;
        this.roleMenuModel = roleMenuModel;
    }
    async onModuleInit() {
        const row = await this[DEFAULT_MODEL].findOne(1);
        if (!row) {
            await this[DEFAULT_MODEL].save({
                id: 1,
                name: '超级管理员',
                level: 1,
                description: '拥有一切权限的超级管理员',
            });
            console.log('超级管理员角色初始化成功！！！');
        }
    }
    async setAction(id, body) {
        await this.roleMenuModel.delete({ roleId: id });
        const arr = body.menuIds.map((item) => {
            return { roleId: id, menuId: item };
        });
        return await this.roleMenuModel.save(arr);
    }
    async getActions(roleId) {
        const menus = await this.roleMenuModel.find({
            where: {
                roleId,
            },
        });
        return menus.map((item) => item.menuId);
    }
    async create(body) {
        return await this[DEFAULT_MODEL].save(body);
    }
    async update(id, body) {
        await this[DEFAULT_MODEL].update(id, body);
        return await this[DEFAULT_MODEL].findOne(id);
    }
    async delete(ids) {
        return await this[DEFAULT_MODEL].delete(ids);
    }
    async pages(query) {
        const { name, page, limit } = query;
        const managefilter = {
            skip: (page - 1) * limit,
            take: limit,
            where: {},
        };
        if (name)
            managefilter.where.name = (0, typeorm_2.Like)(`%${name}%`);
        const [rows, total] = await this[DEFAULT_MODEL].findAndCount(managefilter);
        return {
            rows,
            total,
            pager: {
                page,
                limit,
                total,
                offset: (page - 1) * limit,
                pageTotal: Math.ceil(total / limit),
            },
        };
    }
    async list(attrs) {
        if (attrs[0] === 'all') {
            return await this[DEFAULT_MODEL].find();
        }
        return await this[DEFAULT_MODEL].find({ select: attrs });
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(1, (0, typeorm_1.InjectRepository)(roleMenu_entity_1.RoleMenu)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], RoleService);
exports.RoleService = RoleService;


/***/ }),

/***/ "./apps/gateways/src/user/user.controller.ts":
/*!***************************************************!*\
  !*** ./apps/gateways/src/user/user.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserController = class UserController {
};
UserController = __decorate([
    (0, common_1.Controller)('user')
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/gateways/src/user/user.module.ts":
/*!***********************************************!*\
  !*** ./apps/gateways/src/user/user.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/gateways/src/user/user.service.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/gateways/src/user/user.controller.ts");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/gateways/src/user/user.service.ts":
/*!************************************************!*\
  !*** ./apps/gateways/src/user/user.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserService = class UserService {
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./libs/src/common/common.module.ts":
/*!******************************************!*\
  !*** ./libs/src/common/common.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Module)({})
], CommonModule);
exports.CommonModule = CommonModule;


/***/ }),

/***/ "./libs/src/common/decorator/action.decorator.ts":
/*!*******************************************************!*\
  !*** ./libs/src/common/decorator/action.decorator.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthAction = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const AuthAction = (action) => (0, common_1.SetMetadata)('action', action);
exports.AuthAction = AuthAction;


/***/ }),

/***/ "./libs/src/common/decorator/auth.decorator.ts":
/*!*****************************************************!*\
  !*** ./libs/src/common/decorator/auth.decorator.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_guard_1 = __webpack_require__(/*! ../guards/auth.guard */ "./libs/src/common/guards/auth.guard.ts");
const action_guard_1 = __webpack_require__(/*! ../guards/action.guard */ "./libs/src/common/guards/action.guard.ts");
const action_decorator_1 = __webpack_require__(/*! ./action.decorator */ "./libs/src/common/decorator/action.decorator.ts");
function Auth(action) {
    return (0, common_1.applyDecorators)((0, action_decorator_1.AuthAction)(action), (0, common_1.UseGuards)(auth_guard_1.AuthGuard, action_guard_1.ActionGuard), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized"' }));
}
exports.Auth = Auth;


/***/ }),

/***/ "./libs/src/common/decorator/ip.decorator.ts":
/*!***************************************************!*\
  !*** ./libs/src/common/decorator/ip.decorator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ip = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.Ip = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress ||
        req.ip;
    return ip;
});


/***/ }),

/***/ "./libs/src/common/dto/pagination.dto.ts":
/*!***********************************************!*\
  !*** ./libs/src/common/dto/pagination.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PaginationDto {
    constructor() {
        this.page = 1;
        this.limit = 20;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 1,
        description: '页码',
        type: 'number',
    }),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 20,
        description: '数量',
        type: 'number',
    }),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
exports.PaginationDto = PaginationDto;


/***/ }),

/***/ "./libs/src/common/filters/http-exception.filter.ts":
/*!**********************************************************!*\
  !*** ./libs/src/common/filters/http-exception.filter.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const util_1 = __webpack_require__(/*! util */ "util");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const error = exception.message;
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.NOT_FOUND;
        let exceptionResponse = null;
        let message = null;
        if ((0, util_1.isFunction)(exception.getResponse)) {
            exceptionResponse = exception.getResponse();
            message = exceptionResponse;
            if (typeof exceptionResponse === 'object') {
                message = exceptionResponse.message[0];
            }
        }
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message,
            error,
        });
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),

/***/ "./libs/src/common/guards/action.guard.ts":
/*!************************************************!*\
  !*** ./libs/src/common/guards/action.guard.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionGuard = void 0;
const menu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/menu.entity */ "./libs/src/db/entity/menu.entity.ts");
const roleMenu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/roleMenu.entity */ "./libs/src/db/entity/roleMenu.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let ActionGuard = class ActionGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const rules = this.reflector.get('action', context.getHandler());
        if (rules && rules.length) {
            try {
                const { user } = context.switchToHttp().getRequest();
                const roleMenuModel = (0, typeorm_1.getRepository)(roleMenu_entity_1.RoleMenu, 'gateway');
                const roleMenuList = await roleMenuModel.find({
                    where: { roleId: user.roleId },
                    select: ['menuId'],
                });
                const menuIds = roleMenuList.map((item) => item.menuId);
                const menuModel = (0, typeorm_1.getRepository)(menu_entity_1.Menu, 'gateway');
                const menulist = await menuModel.find({
                    where: { id: (0, typeorm_1.In)(menuIds), type: 3 },
                    select: ['action'],
                });
                const actionList = menulist.map((item) => item.action);
                console.log(actionList);
                for (const rule of rules) {
                    if (!actionList.includes(rule)) {
                        throw new common_1.UnauthorizedException({
                            error: '403',
                            message: '权限不足',
                        });
                    }
                }
                return true;
            }
            catch (error) {
            }
        }
        else {
            return true;
        }
    }
};
ActionGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], ActionGuard);
exports.ActionGuard = ActionGuard;


/***/ }),

/***/ "./libs/src/common/guards/auth.guard.ts":
/*!**********************************************!*\
  !*** ./libs/src/common/guards/auth.guard.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! apps/gateways/src/system/auth/auth.service */ "./apps/gateways/src/system/auth/auth.service.ts");
let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;
        if (!token) {
            throw new common_1.UnauthorizedException({
                error: '401',
                message: '请先登录！！！',
            });
        }
        try {
            const user = this.authService.vertifyToken(token, process.env.TOKEN_SECRET);
            request.user = user;
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException({
                error: '401',
                message: '登录状态异常，请重新登录',
            });
        }
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./libs/src/common/interceptor/response.interceptor.ts":
/*!*************************************************************!*\
  !*** ./libs/src/common/interceptor/response.interceptor.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseInterceptors = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let ResponseInterceptors = class ResponseInterceptors {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const now = Date.now();
        return next.handle().pipe((0, operators_1.map)((data) => {
            const { message, code, result } = data;
            return {
                code: code || 200,
                path: request.url,
                message: message || '操作成功',
                responsetime: `${Date.now() - now}ms`,
                result: result || data,
            };
        }));
    }
};
ResponseInterceptors = __decorate([
    (0, common_1.Injectable)()
], ResponseInterceptors);
exports.ResponseInterceptors = ResponseInterceptors;


/***/ }),

/***/ "./libs/src/common/interface/result.interface.ts":
/*!*******************************************************!*\
  !*** ./libs/src/common/interface/result.interface.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/src/db/cms/category.entity.ts":
/*!********************************************!*\
  !*** ./libs/src/db/cms/category.entity.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Category = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const content_entity_1 = __webpack_require__(/*! ./content.entity */ "./libs/src/db/cms/content.entity.ts");
let Category = class Category {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 32, comment: '名称' }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 32, comment: '分组' }),
    __metadata("design:type", String)
], Category.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '排序' }),
    __metadata("design:type", Number)
], Category.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '分类图' }),
    __metadata("design:type", String)
], Category.prototype, "simg", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '描述' }),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '父ID' }),
    __metadata("design:type", Number)
], Category.prototype, "pid", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', comment: '创建时间' }),
    __metadata("design:type", String)
], Category.prototype, "ctime", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => content_entity_1.Content, (content) => content.categorys),
    __metadata("design:type", Array)
], Category.prototype, "content", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)({ name: 'category', database: 'test_blog' })
], Category);
exports.Category = Category;


/***/ }),

/***/ "./libs/src/db/cms/content.entity.ts":
/*!*******************************************!*\
  !*** ./libs/src/db/cms/content.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Content = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const category_entity_1 = __webpack_require__(/*! ./category.entity */ "./libs/src/db/cms/category.entity.ts");
const tag_entity_1 = __webpack_require__(/*! ./tag.entity */ "./libs/src/db/cms/tag.entity.ts");
let Content = class Content {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Content.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '标题' }),
    __metadata("design:type", String)
], Content.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '内容' }),
    __metadata("design:type", String)
], Content.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '浏览数量' }),
    __metadata("design:type", Number)
], Content.prototype, "scan", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '推荐指数' }),
    __metadata("design:type", Number)
], Content.prototype, "recom", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '置顶' }),
    __metadata("design:type", Boolean)
], Content.prototype, "top", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '状态' }),
    __metadata("design:type", String)
], Content.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', comment: '创建时间' }),
    __metadata("design:type", String)
], Content.prototype, "ctime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'datetime', comment: '更新时间' }),
    __metadata("design:type", String)
], Content.prototype, "utime", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => tag_entity_1.Tag, (tag) => tag.content),
    (0, typeorm_1.JoinTable)({ name: 'content_tag' }),
    __metadata("design:type", Array)
], Content.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => category_entity_1.Category, (category) => category.content),
    (0, typeorm_1.JoinTable)({ name: 'content_category' }),
    __metadata("design:type", Array)
], Content.prototype, "categorys", void 0);
Content = __decorate([
    (0, typeorm_1.Entity)('content')
], Content);
exports.Content = Content;


/***/ }),

/***/ "./libs/src/db/cms/tag.entity.ts":
/*!***************************************!*\
  !*** ./libs/src/db/cms/tag.entity.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tag = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const content_entity_1 = __webpack_require__(/*! ./content.entity */ "./libs/src/db/cms/content.entity.ts");
let Tag = class Tag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 32, comment: '名称' }),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '排序', default: 99 }),
    __metadata("design:type", Number)
], Tag.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '分类图', default: '' }),
    __metadata("design:type", String)
], Tag.prototype, "simg", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '描述', default: '' }),
    __metadata("design:type", String)
], Tag.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', comment: '创建时间' }),
    __metadata("design:type", String)
], Tag.prototype, "ctime", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => content_entity_1.Content, (content) => content.tags),
    __metadata("design:type", Array)
], Tag.prototype, "content", void 0);
Tag = __decorate([
    (0, typeorm_1.Entity)({ name: 'tag', database: 'test_blog' })
], Tag);
exports.Tag = Tag;


/***/ }),

/***/ "./libs/src/db/db.module.ts":
/*!**********************************!*\
  !*** ./libs/src/db/db.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const loginLog_entity_1 = __webpack_require__(/*! ./entity/loginLog.entity */ "./libs/src/db/entity/loginLog.entity.ts");
const manage_entity_1 = __webpack_require__(/*! ./entity/manage.entity */ "./libs/src/db/entity/manage.entity.ts");
const menu_entity_1 = __webpack_require__(/*! ./entity/menu.entity */ "./libs/src/db/entity/menu.entity.ts");
const role_entity_1 = __webpack_require__(/*! ./entity/role.entity */ "./libs/src/db/entity/role.entity.ts");
const roleMenu_entity_1 = __webpack_require__(/*! ./entity/roleMenu.entity */ "./libs/src/db/entity/roleMenu.entity.ts");
const setting_entity_1 = __webpack_require__(/*! ./entity/setting.entity */ "./libs/src/db/entity/setting.entity.ts");
const category_entity_1 = __webpack_require__(/*! ./cms/category.entity */ "./libs/src/db/cms/category.entity.ts");
const tag_entity_1 = __webpack_require__(/*! ./cms/tag.entity */ "./libs/src/db/cms/tag.entity.ts");
const content_entity_1 = __webpack_require__(/*! ./cms/content.entity */ "./libs/src/db/cms/content.entity.ts");
const blogDB = typeorm_1.TypeOrmModule.forRootAsync({
    name: 'blog',
    useFactory: () => ({
        name: 'blog',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.BLOG_DB_USERNAME,
        password: process.env.BLOG_DB_PASSWORD,
        database: process.env.BLOG_DB_DATABSE,
        type: 'mysql',
        entities: [category_entity_1.Category, tag_entity_1.Tag, content_entity_1.Content],
        synchronize: true,
        logger: 'file',
        logging: true,
        timezone: 'Z',
    }),
});
const gatewayDB = typeorm_1.TypeOrmModule.forRootAsync({
    useFactory: async () => {
        return {
            name: 'gateway',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.GATEWAY_DB_USERNAME,
            password: process.env.GATEWAY_DB_PASSWORD,
            database: process.env.GATEWAY_DB_DATABSE,
            type: 'mysql',
            entities: [role_entity_1.Role, manage_entity_1.Manage, menu_entity_1.Menu, setting_entity_1.Setting, roleMenu_entity_1.RoleMenu, loginLog_entity_1.LoginLog],
            synchronize: true,
            logger: 'file',
            logging: true,
            timezone: 'Z',
        };
    },
});
let DbModule = class DbModule {
};
DbModule = __decorate([
    (0, common_1.Module)({
        imports: [gatewayDB, blogDB],
    })
], DbModule);
exports.DbModule = DbModule;


/***/ }),

/***/ "./libs/src/db/entity/loginLog.entity.ts":
/*!***********************************************!*\
  !*** ./libs/src/db/entity/loginLog.entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginLog = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let LoginLog = class LoginLog {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LoginLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 64, comment: '用户名' }),
    __metadata("design:type", String)
], LoginLog.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '关联ID' }),
    __metadata("design:type", Number)
], LoginLog.prototype, "manageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '登录IP' }),
    __metadata("design:type", String)
], LoginLog.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '所属地址', default: '' }),
    __metadata("design:type", String)
], LoginLog.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '登录平台' }),
    __metadata("design:type", String)
], LoginLog.prototype, "ua", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime' }),
    __metadata("design:type", String)
], LoginLog.prototype, "login_time", void 0);
LoginLog = __decorate([
    (0, typeorm_1.Entity)('login_log')
], LoginLog);
exports.LoginLog = LoginLog;


/***/ }),

/***/ "./libs/src/db/entity/manage.entity.ts":
/*!*********************************************!*\
  !*** ./libs/src/db/entity/manage.entity.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Manage = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Manage = class Manage {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Manage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 64 }),
    __metadata("design:type", String)
], Manage.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false, length: 128 }),
    __metadata("design:type", String)
], Manage.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 64, default: '管理员' }),
    __metadata("design:type", String)
], Manage.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erWiafXdE7AmAm4F90UJd6yungJRRZPibibTOgIFsF4vq7LSHLiaGWZmltIO2cLibia3L3UzWlSXI4Y6ofg/132',
    }),
    __metadata("design:type", String)
], Manage.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime' }),
    __metadata("design:type", String)
], Manage.prototype, "ctime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], Manage.prototype, "roleId", void 0);
Manage = __decorate([
    (0, typeorm_1.Entity)('manage')
], Manage);
exports.Manage = Manage;


/***/ }),

/***/ "./libs/src/db/entity/menu.entity.ts":
/*!*******************************************!*\
  !*** ./libs/src/db/entity/menu.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Menu = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Menu = class Menu {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Menu.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: 1,
        comment: '0:目录 1:菜单 2:外链 3:规则',
    }),
    __metadata("design:type", Number)
], Menu.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: false, default: '', comment: '图标' }),
    __metadata("design:type", String)
], Menu.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false, comment: '菜单是否缓存' }),
    __metadata("design:type", Boolean)
], Menu.prototype, "cache", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, nullable: false, comment: '是否在菜单显示' }),
    __metadata("design:type", Boolean)
], Menu.prototype, "hide", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: false, default: '', comment: '菜单名称' }),
    __metadata("design:type", String)
], Menu.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: false, default: '', comment: '路由地址' }),
    __metadata("design:type", String)
], Menu.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: false, default: '', comment: '组件名称' }),
    __metadata("design:type", String)
], Menu.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true, default: '', comment: '操作规则' }),
    __metadata("design:type", String)
], Menu.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 99, comment: '排序' }),
    __metadata("design:type", Number)
], Menu.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: '', comment: '组件路径' }),
    __metadata("design:type", String)
], Menu.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 0, comment: '父菜单ID 0:无' }),
    __metadata("design:type", Number)
], Menu.prototype, "pid", void 0);
Menu = __decorate([
    (0, typeorm_1.Entity)('menu')
], Menu);
exports.Menu = Menu;


/***/ }),

/***/ "./libs/src/db/entity/role.entity.ts":
/*!*******************************************!*\
  !*** ./libs/src/db/entity/role.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Role = class Role {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Role.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
Role = __decorate([
    (0, typeorm_1.Entity)('role')
], Role);
exports.Role = Role;


/***/ }),

/***/ "./libs/src/db/entity/roleMenu.entity.ts":
/*!***********************************************!*\
  !*** ./libs/src/db/entity/roleMenu.entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleMenu = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let RoleMenu = class RoleMenu {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoleMenu.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '角色ID' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RoleMenu.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '菜单ID' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], RoleMenu.prototype, "menuId", void 0);
RoleMenu = __decorate([
    (0, typeorm_1.Entity)('role_menu')
], RoleMenu);
exports.RoleMenu = RoleMenu;


/***/ }),

/***/ "./libs/src/db/entity/setting.entity.ts":
/*!**********************************************!*\
  !*** ./libs/src/db/entity/setting.entity.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Setting = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Setting = class Setting {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Setting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, comment: '名称', nullable: false }),
    __metadata("design:type", String)
], Setting.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, comment: '键名', unique: true, nullable: false }),
    __metadata("design:type", String)
], Setting.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '键值', nullable: false }),
    __metadata("design:type", String)
], Setting.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, comment: '分组', default: '', nullable: false }),
    __metadata("design:type", String)
], Setting.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
        comment: '数据类型',
        nullable: false,
    }),
    __metadata("design:type", String)
], Setting.prototype, "valuetype", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '排序', nullable: false, default: 10 }),
    __metadata("design:type", Number)
], Setting.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '备注' }),
    __metadata("design:type", String)
], Setting.prototype, "common", void 0);
Setting = __decorate([
    (0, typeorm_1.Entity)('setting')
], Setting);
exports.Setting = Setting;


/***/ }),

/***/ "./libs/src/index.ts":
/*!***************************!*\
  !*** ./libs/src/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./libs.module */ "./libs/src/libs.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./libs.service */ "./libs/src/libs.service.ts"), exports);


/***/ }),

/***/ "./libs/src/libs.module.ts":
/*!*********************************!*\
  !*** ./libs/src/libs.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const libs_service_1 = __webpack_require__(/*! ./libs.service */ "./libs/src/libs.service.ts");
const common_module_1 = __webpack_require__(/*! ./common/common.module */ "./libs/src/common/common.module.ts");
const db_module_1 = __webpack_require__(/*! ./db/db.module */ "./libs/src/db/db.module.ts");
const cron_service_1 = __webpack_require__(/*! ./utils/cron.service */ "./libs/src/utils/cron.service.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const config_module_1 = __webpack_require__(/*! apps/gateways/src/system/config/config.module */ "./apps/gateways/src/system/config/config.module.ts");
let LibsModule = class LibsModule {
};
LibsModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, db_module_1.DbModule, schedule_1.ScheduleModule.forRoot(), config_module_1.ConfigModule],
        providers: [libs_service_1.LibsService, cron_service_1.CronService],
        exports: [libs_service_1.LibsService, cron_service_1.CronService],
    })
], LibsModule);
exports.LibsModule = LibsModule;


/***/ }),

/***/ "./libs/src/libs.service.ts":
/*!**********************************!*\
  !*** ./libs/src/libs.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LibsService = class LibsService {
};
LibsService = __decorate([
    (0, common_1.Injectable)()
], LibsService);
exports.LibsService = LibsService;


/***/ }),

/***/ "./libs/src/utils/cron.service.ts":
/*!****************************************!*\
  !*** ./libs/src/utils/cron.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CronService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CronService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const config_service_1 = __webpack_require__(/*! apps/gateways/src/system/config/config.service */ "./apps/gateways/src/system/config/config.service.ts");
let CronService = CronService_1 = class CronService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(CronService_1.name);
    }
    async cronSyncConfig() {
        await this.configService.syncConfig();
    }
    handleCron() {
        console.log('11111');
        this.logger.debug('Called when the current second is 45');
    }
};
__decorate([
    (0, schedule_1.Interval)(10000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "cronSyncConfig", null);
__decorate([
    (0, schedule_1.Cron)('0 1 23 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "handleCron", null);
CronService = CronService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _a : Object])
], CronService);
exports.CronService = CronService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "ip":
/*!*********************!*\
  !*** external "ip" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ip");

/***/ }),

/***/ "lib-qqwry-yyyj":
/*!*********************************!*\
  !*** external "lib-qqwry-yyyj" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lib-qqwry-yyyj");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "ua-parser-js":
/*!*******************************!*\
  !*** external "ua-parser-js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("ua-parser-js");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************!*\
  !*** ./apps/gateways/src/main.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const http_exception_filter_1 = __webpack_require__(/*! @app/libs/common/filters/http-exception.filter */ "./libs/src/common/filters/http-exception.filter.ts");
const response_interceptor_1 = __webpack_require__(/*! @app/libs/common/interceptor/response.interceptor */ "./libs/src/common/interceptor/response.interceptor.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const gateways_module_1 = __webpack_require__(/*! ./gateways.module */ "./apps/gateways/src/gateways.module.ts");
const ip_1 = __webpack_require__(/*! ip */ "ip");
async function bootstrap() {
    const app = await core_1.NestFactory.create(gateways_module_1.GatewaysModule, {
        logger: ['error', 'warn'],
    });
    const micro1 = app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: { retryAttempts: 5, retryDelay: 3000 },
    });
    await app.startAllMicroservices();
    app.useGlobalPipes(new common_1.ValidationPipe({
        disableErrorMessages: false,
        transform: true,
    }));
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptors());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.setGlobalPrefix('api/v1');
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nestjs microservice!!!')
        .setDescription('The Nestjs microservice API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/v1/doc', app, document);
    await app.listen(process.env.GATEWAYS_PORT || 3000, () => {
        console.info(`Gateways runing http://${(0, ip_1.address)()}:${process.env.GATEWAYS_PORT}`);
    });
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUVGLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLDJDQUFvQixFQUFFLENBQUMsQ0FBQztJQUV0RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSwyQ0FBbUIsRUFBRSxDQUFDLENBQUM7SUFFaEQsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUU5QixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFakIsTUFBTSxNQUFNLEdBQUcsSUFBSSx5QkFBZSxFQUFFO1NBQ2pDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztTQUNsQyxjQUFjLENBQUMseUNBQXlDLENBQUM7U0FDekQsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNqQixhQUFhLEVBQUU7U0FDZixLQUFLLEVBQUUsQ0FBQztJQUNYLE1BQU0sUUFBUSxHQUFHLHVCQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRCx1QkFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWpELE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ3ZELE9BQU8sQ0FBQyxJQUFJLENBQ1YsMEJBQTBCLGdCQUFPLEdBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUNuRSxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL3RhZy9kdG8vVGFnQ3JlYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL3RhZy9kdG8vVGFnVXBkYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL3RhZy90YWcuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL3RhZy90YWcubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL2dhdGV3YXlzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9sb2cvZHRvL0xvZ2luTG9nUGFnZXMuZHRvLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL2xvZy9sb2cuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9sb2cvbG9nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9sb2cvbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2F1dGgvYXV0aC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9hdXRoL2F1dGgubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vYXV0aC9kdG8vTWFuYWdlTG9jYWxMb2dpbi5kdG8udHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2F1dGgvc3RyYXRlZ3kvbWFuYWdlTG9jYWwuc3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2NvbmZpZy9jb25maWcuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vY29uZmlnL2NvbmZpZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2NvbmZpZy9jb25maWcub3B0aW9uLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2NvbmZpZy9jb25maWcuc2V0dGluZy50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vbWFuYWdlL2R0by9NYW5hZ2VDcmVhdGUuZHRvLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9tYW5hZ2UvZHRvL01hbmFnZVBhZ2VzLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vbWFuYWdlL2R0by9NYW5hZ2VVcGRhdGUuZHRvLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9tYW5hZ2UvbWFuYWdlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL21hbmFnZS9tYW5hZ2UubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9tYW5hZ2UvbWFuYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL21lbnUvZHRvL01lbnVDcmVhdGUuZHRvLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9tZW51L2R0by9NZW51VXBkYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vbWVudS9tZW51LmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL21lbnUvbWVudS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL21lbnUvbWVudS5zZXJ2aWNlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9yb2xlL2R0by9Sb2xlQ3JlYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vcm9sZS9kdG8vUm9sZVBhZ2VzLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vcm9sZS9kdG8vUm9sZVJ1bGVzLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vcm9sZS9kdG8vUm9sZVVwZGF0ZS5kdG8udHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL3JvbGUvcm9sZS5jb250cm9sbGVyLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9yb2xlL3JvbGUubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9yb2xlL3JvbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy91c2VyL3VzZXIuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy91c2VyL3VzZXIubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9jb21tb24ubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9kZWNvcmF0b3IvYWN0aW9uLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9kZWNvcmF0b3IvaXAuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9kdG8vcGFnaW5hdGlvbi5kdG8udHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvY29tbW9uL2ZpbHRlcnMvaHR0cC1leGNlcHRpb24uZmlsdGVyLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9ndWFyZHMvYWN0aW9uLmd1YXJkLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9ndWFyZHMvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9jb21tb24vaW50ZXJjZXB0b3IvcmVzcG9uc2UuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvY29tbW9uL2ludGVyZmFjZS9yZXN1bHQuaW50ZXJmYWNlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2Ntcy9jYXRlZ29yeS5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvY21zL2NvbnRlbnQuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2Ntcy90YWcuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2RiLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9kYi9lbnRpdHkvbG9naW5Mb2cuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2VudGl0eS9tYW5hZ2UuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2VudGl0eS9tZW51LmVudGl0eS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9kYi9lbnRpdHkvcm9sZS5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvZW50aXR5L3JvbGVNZW51LmVudGl0eS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9kYi9lbnRpdHkvc2V0dGluZy5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvbGlicy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvbGlicy5zZXJ2aWNlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL3V0aWxzL2Nyb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9qd3RcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3Bhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9zY2hlZHVsZVwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvc3dhZ2dlclwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvdHlwZW9ybVwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xhc3MtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiaXBcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJsaWItcXF3cnkteXl5alwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0LWxvY2FsXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicnhqc1wiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInJ4anMvb3BlcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwidHlwZW9ybVwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInVhLXBhcnNlci1qc1wiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwidXRpbFwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgVGFnQ3JlYXRlIHtcbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6ICfmtYvor5XmoIfnrb4nLCBkZXNjcmlwdGlvbjogJ+WQjeensCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5qCH562+5ZCN56ew5b+F5aGrJyB9KVxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiA5OSwgZGVzY3JpcHRpb246ICfmjpLluo8nIH0pXG4gIHJlYWRvbmx5IHNvcnQ/OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDpcbiAgICAgICdodHRwOi8vcWFwcC1sbS5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL3VwbG9hZC9sd3lkL2NvdmVyLzE2MzQxMzg3Njg5NTRfMWZodDQ1aGhyLmpwZycsXG4gICAgZGVzY3JpcHRpb246ICflsIHpnaLlm74nLFxuICB9KVxuICByZWFkb25seSBzaW1nPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICfmiJHmmK/mj4/ov7DnmoTlhoXlrrknLFxuICAgIGRlc2NyaXB0aW9uOiAn5o+P6L+wJyxcbiAgfSlcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFRhZ1VwZGF0ZSB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAn5rWL6K+V5qCH562+JywgZGVzY3JpcHRpb246ICflkI3np7AnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+agh+etvuWQjeensOW/heWhqycgfSlcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogOTksIGRlc2NyaXB0aW9uOiAn5o6S5bqPJyB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICfmoIfnrb7mjpLluo/lv4XloasnIH0pXG4gIHJlYWRvbmx5IHNvcnQ6IG51bWJlcjtcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OlxuICAgICAgJ2h0dHA6Ly9xYXBwLWxtLm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb20vdXBsb2FkL2x3eWQvY292ZXIvMTYzNDEzODc2ODk1NF8xZmh0NDVoaHIuanBnJyxcbiAgICBkZXNjcmlwdGlvbjogJ+WwgemdouWbvicsXG4gIH0pXG4gIHJlYWRvbmx5IHNpbWc/OiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogJ+aIkeaYr+aPj+i/sOeahOWGheWuuScsXG4gICAgZGVzY3JpcHRpb246ICfmj4/ov7AnLFxuICB9KVxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEF1dGggfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2RlY29yYXRvci9hdXRoLmRlY29yYXRvcic7XG5pbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBEZWxldGUsXG4gIEdldCxcbiAgSW5qZWN0LFxuICBQYXJhbSxcbiAgUGFyc2VBcnJheVBpcGUsXG4gIFBvc3QsXG4gIFB1dCxcbiAgUXVlcnksXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudFByb3h5IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IEFwaU9wZXJhdGlvbiwgQXBpVGFncyB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUYWdDcmVhdGUgfSBmcm9tICcuL2R0by9UYWdDcmVhdGUuZHRvJztcbmltcG9ydCB7IFRhZ0xpc3REdG8gfSBmcm9tICcuL2R0by9UYWdMaXN0LmR0byc7XG5pbXBvcnQgeyBUYWdVcGRhdGUgfSBmcm9tICcuL2R0by9UYWdVcGRhdGUuZHRvJztcblxuQENvbnRyb2xsZXIoJ3RhZycpXG5AQXBpVGFncygn5qCH562+JylcbmV4cG9ydCBjbGFzcyBUYWdDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoQEluamVjdCgnQkxPR19TRVJWSUNFJykgcHJpdmF0ZSByZWFkb25seSBjbGllbnQ6IENsaWVudFByb3h5KSB7fVxuXG4gIEBHZXQoJy9saXN0JylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfmn6Xor6LmoIfnrb7liJfooagnIH0pXG4gIEBBdXRoKFsndGFnOnZpZXcnXSlcbiAgbGlzdChcbiAgICBAUXVlcnkoJ2F0dHJzJywgbmV3IFBhcnNlQXJyYXlQaXBlKHsgaXRlbXM6IFN0cmluZywgc2VwYXJhdG9yOiAnLCcgfSkpXG4gICAgYXR0cnM6IEFycmF5PFRhZ0xpc3REdG8+LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSB7IHRhZzogJ2xpc3QnIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgeyBhdHRycyB9KTtcbiAgfVxuXG4gIEBQb3N0KClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliJvlu7rmoIfnrb4nIH0pXG4gIEBBdXRoKFsndGFnOmNyZWF0ZSddKVxuICBjcmVhdGUoQEJvZHkoKSBib2R5OiBUYWdDcmVhdGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSB7IHRhZzogJ2NyZWF0ZScgfTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZChwYXR0ZXJuLCBib2R5KTtcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn57yW6L6R5qCH562+JyB9KVxuICBAQXV0aChbJ3RhZzp1cGRhdGUnXSlcbiAgdXBkYXRlKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLCBAQm9keSgpIGJvZHk6IFRhZ1VwZGF0ZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IHsgdGFnOiAndXBkYXRlJyB9O1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKHBhdHRlcm4sIHsgaWQsIC4uLmJvZHkgfSk7XG4gIH1cblxuICBARGVsZXRlKCc6aWQnKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIoOmZpOagh+etvicgfSlcbiAgQEF1dGgoWyd0YWc6ZGVsZXRlJ10pXG4gIGRlbGV0ZShAUGFyYW0oJ2lkcycpIGlkczogQXJyYXk8bnVtYmVyPik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IHsgdGFnOiAnZGVsZXRlJyB9O1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKHBhdHRlcm4sIHsgaWRzIH0pO1xuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfmoIfnrb7or6bmg4UnIH0pXG4gIEBBdXRoKFsndGFnOnZpZXcnXSlcbiAgZGV0YWlsKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0geyB0YWc6ICdkZXRhaWwnIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgeyBpZCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7XG4gIENsaWVudFByb3h5RmFjdG9yeSxcbiAgQ2xpZW50c01vZHVsZSxcbiAgVHJhbnNwb3J0LFxufSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4uLy4uL3N5c3RlbS9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IFRhZ0NvbnRyb2xsZXIgfSBmcm9tICcuL3RhZy5jb250cm9sbGVyJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtBdXRoTW9kdWxlXSxcbiAgY29udHJvbGxlcnM6IFtUYWdDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogJ0JMT0dfU0VSVklDRScsXG4gICAgICB1c2VGYWN0b3J5OiAoY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkgPT4ge1xuICAgICAgICBjb25zdCBibG9nUG9ydCA9IGNvbmZpZ1NlcnZpY2UuZ2V0KCdCTE9HX1BPUlQnKTtcbiAgICAgICAgcmV0dXJuIENsaWVudFByb3h5RmFjdG9yeS5jcmVhdGUoe1xuICAgICAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlRDUCxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIHBvcnQ6IGJsb2dQb3J0IHx8IDgwMDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaW5qZWN0OiBbQ29uZmlnU2VydmljZV0sXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFnTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi9zeXN0ZW0vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyTW9kdWxlIH0gZnJvbSAnLi91c2VyL3VzZXIubW9kdWxlJztcbmltcG9ydCB7IFJvbGVNb2R1bGUgfSBmcm9tICcuL3N5c3RlbS9yb2xlL3JvbGUubW9kdWxlJztcbmltcG9ydCB7IE1hbmFnZU1vZHVsZSB9IGZyb20gJy4vc3lzdGVtL21hbmFnZS9tYW5hZ2UubW9kdWxlJztcbmltcG9ydCB7IERiTW9kdWxlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2RiLm1vZHVsZSc7XG5pbXBvcnQgeyBNZW51TW9kdWxlIH0gZnJvbSAnLi9zeXN0ZW0vbWVudS9tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgYXMgU2V0dGluZ01vZGVsIH0gZnJvbSAnLi9zeXN0ZW0vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgTGlic01vZHVsZSB9IGZyb20gJ0BhcHAvbGlicyc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBMb2dNb2R1bGUgfSBmcm9tICcuL2xvZy9sb2cubW9kdWxlJztcbmltcG9ydCB7IFRhZ01vZHVsZSB9IGZyb20gJy4vYmxvZy90YWcvdGFnLm1vZHVsZSc7XG5pbXBvcnQgeyBDb250ZW50TW9kdWxlIH0gZnJvbSAnLi9ibG9nL2NvbnRlbnQvY29udGVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlNb2R1bGUgfSBmcm9tICcuL2Jsb2cvY2F0ZWdvcnkvY2F0ZWdvcnkubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7IGlzR2xvYmFsOiB0cnVlLCBjYWNoZTogdHJ1ZSB9KSxcbiAgICBMaWJzTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgVXNlck1vZHVsZSxcbiAgICBSb2xlTW9kdWxlLFxuICAgIE1hbmFnZU1vZHVsZSxcbiAgICBEYk1vZHVsZSxcbiAgICBNZW51TW9kdWxlLFxuICAgIFNldHRpbmdNb2RlbCxcbiAgICBMb2dNb2R1bGUsXG4gICAgVGFnTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBHYXRld2F5c01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUGFnaW5hdGlvbkR0byB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZHRvL3BhZ2luYXRpb24uZHRvJztcbmltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuZXhwb3J0IGNsYXNzIExvZ2luTG9nUGFnZXNEdG8gZXh0ZW5kcyBQYWdpbmF0aW9uRHRvIHtcbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAnYWRtaW4nLCBkZXNjcmlwdGlvbjogJ+eUqOaIt+WQjScgfSlcbiAgcmVhZG9ubHkgdXNlcm5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICfopb/lroknLCBkZXNjcmlwdGlvbjogJ+eZu+W9leWcsOWdgCcgfSlcbiAgcmVhZG9ubHkgYWRkcmVzczogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJ3dpbmRvdycsIGRlc2NyaXB0aW9uOiAn55m75b2V5bmz5Y+wJyB9KVxuICByZWFkb25seSB1YTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBRdWVyeSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwaU9wZXJhdGlvbiwgQXBpVGFncyB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBMb2dpbkxvZ1BhZ2VzRHRvIH0gZnJvbSAnLi9kdG8vTG9naW5Mb2dQYWdlcy5kdG8nO1xuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xuXG5AQ29udHJvbGxlcignbG9nJylcbkBBcGlUYWdzKCfml6Xlv5cnKVxuZXhwb3J0IGNsYXNzIExvZ0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHt9XG5cbiAgQEdldCgnL2xvZ2luJylcbiAgQEF1dGgoWydsb2dpbl9sb2c6dmlldyddKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+eZu+W9leaXpeW/l+afpeivoicgfSlcbiAgYXN5bmMgbG9naW5Mb2dQYWdlcyhAUXVlcnkoKSBxdWVyeTogTG9naW5Mb2dQYWdlc0R0byk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2dTZXJ2aWNlLmxvZ2luTG9nUGFnZXMocXVlcnkpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAn55m75b2V5pel5b+X5p+l6K+i5oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2dpbkxvZyB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvbG9naW5Mb2cuZW50aXR5JztcbmltcG9ydCB7IGZvcndhcmRSZWYsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4uL3N5c3RlbS9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IExvZ0NvbnRyb2xsZXIgfSBmcm9tICcuL2xvZy5jb250cm9sbGVyJztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtmb3J3YXJkUmVmKCgpID0+IEF1dGhNb2R1bGUpLCBUeXBlT3JtTW9kdWxlLmZvckZlYXR1cmUoW0xvZ2luTG9nXSldLFxuICBjb250cm9sbGVyczogW0xvZ0NvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtMb2dTZXJ2aWNlXSxcbiAgZXhwb3J0czogW0xvZ1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RSZXBvc2l0b3J5IH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IExpa2UsIFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IExvZ2luTG9nIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9sb2dpbkxvZy5lbnRpdHknO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3BhZ2luYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IExvZ2luTG9nUGFnZXNEdG8gfSBmcm9tICcuL2R0by9Mb2dpbkxvZ1BhZ2VzLmR0byc7XG5pbXBvcnQgeyBMb2dpbkxvZ1BhZ2VXaGVyZSB9IGZyb20gJy4vaW50ZXJmYWNlL0xvZ2luTG9nUGFnZVdoZXJlLmludGVyZmFjZSc7XG5pbXBvcnQgKiBhcyBsaWJRcXdyeSBmcm9tICdsaWItcXF3cnkteXl5aic7XG5jb25zdCBpcEludGVyZmFjZSA9IGxpYlFxd3J5LmluaXQoKTtcbmlwSW50ZXJmYWNlLnNwZWVkKCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdFJlcG9zaXRvcnkoTG9naW5Mb2cpXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2dpbkxvZ01vZGVsOiBSZXBvc2l0b3J5PExvZ2luTG9nPixcbiAgKSB7fVxuXG4gIGFzeW5jIGxvZ2luTG9nQ3JlYXRlKGJvZHkpOiBQcm9taXNlPExvZ2luTG9nPiB7XG4gICAgbGV0IGNpdHk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgQ291bnRyeSB9ID0gaXBJbnRlcmZhY2Uuc2VhcmNoSVAoYm9keS5pcCk7XG4gICAgICBjaXR5ID0gQ291bnRyeSB8fCAnJztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5sb2dpbkxvZ01vZGVsLnNhdmUoe1xuICAgICAgbWFuYWdlSWQ6IGJvZHkuaWQsXG4gICAgICB1c2VybmFtZTogYm9keS51c2VybmFtZSxcbiAgICAgIGFkZHJlc3M6IGNpdHksXG4gICAgICB1YTogYm9keS51YSxcbiAgICAgIGlwOiBib2R5LmlwLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW5Mb2dQYWdlcyhxdWVyeTogTG9naW5Mb2dQYWdlc0R0byk6IFByb21pc2U8UGFnaW5hdGlvbjxMb2dpbkxvZz4+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYWdlLCBsaW1pdCwgdWEsIGFkZHJlc3MgfSA9IHF1ZXJ5O1xuICAgIGNvbnN0IGZpbHRlcjogTG9naW5Mb2dQYWdlV2hlcmUgPSB7XG4gICAgICBza2lwOiAocGFnZSAtIDEpICogbGltaXQsXG4gICAgICB0YWtlOiBsaW1pdCxcbiAgICB9O1xuXG4gICAgaWYgKHVzZXJuYW1lKSBmaWx0ZXIud2hlcmUudXNlcm5hbWUgPSBMaWtlKGAlJHt1c2VybmFtZX0lYCk7XG4gICAgaWYgKHVhKSBmaWx0ZXIud2hlcmUudWEgPSBMaWtlKGAlJHt1YX0lYCk7XG4gICAgaWYgKGFkZHJlc3MpIGZpbHRlci53aGVyZS5hZGRyZXNzID0gTGlrZShgJSR7YWRkcmVzc30lYCk7XG5cbiAgICBjb25zdCBbcm93cywgdG90YWxdID0gYXdhaXQgdGhpcy5sb2dpbkxvZ01vZGVsLmZpbmRBbmRDb3VudChmaWx0ZXIpO1xuICAgIHJldHVybiB7XG4gICAgICByb3dzLFxuICAgICAgdG90YWwsXG4gICAgICBwYWdlcjoge1xuICAgICAgICBwYWdlLFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIG9mZnNldDogKHBhZ2UgLSAxKSAqIGxpbWl0LFxuICAgICAgICBwYWdlVG90YWw6IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7IElwIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9kZWNvcmF0b3IvaXAuZGVjb3JhdG9yJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgQ29udHJvbGxlcixcbiAgUG9zdCxcbiAgVXNlR3VhcmRzLFxuICBSZXF1ZXN0LFxuICBCb2R5LFxuICBHZXQsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgQXBpT3BlcmF0aW9uLCBBcGlUYWdzIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9sb2cvbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBNYW5hZ2VMb2NhbExvZ2luRHRvIH0gZnJvbSAnLi9kdG8vTWFuYWdlTG9jYWxMb2dpbi5kdG8nO1xuaW1wb3J0IHsgVUFQYXJzZXIgfSBmcm9tICd1YS1wYXJzZXItanMnO1xuXG5AQ29udHJvbGxlcignYXV0aCcpXG5AQXBpVGFncygn6K6k6K+BJylcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9nU2VydmljZTogTG9nU2VydmljZSxcbiAgKSB7fVxuXG4gIEBQb3N0KCdsb2dpbicpXG4gIEBVc2VHdWFyZHMoQXV0aEd1YXJkKCdNYW5hZ2VMb2NhbCcpKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+euoeeQhuWRmOeZu+W9lScgfSlcbiAgYXN5bmMgbG9naW4oXG4gICAgQEJvZHkoKSBib2R5OiBNYW5hZ2VMb2NhbExvZ2luRHRvLFxuICAgIEBSZXF1ZXN0KCkgcmVxLFxuICAgIEBJcCgpIGlwOiBzdHJpbmcsXG4gICk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNyZWF0ZVRva2VuKHJlcS51c2VyKTtcbiAgICBjb25zdCB7IHVhIH0gPSBVQVBhcnNlcihyZXEuaGVhZGVyc1sndXNlci1hZ2VudCddKTtcbiAgICByZXEudXNlci5pcCA9IGlwO1xuICAgIHJlcS51c2VyLnVhID0gdWE7XG4gICAgYXdhaXQgdGhpcy5sb2dTZXJ2aWNlLmxvZ2luTG9nQ3JlYXRlKHJlcS51c2VyKTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ+eZu+W9leaIkOWKnycsXG4gICAgICByZXN1bHQ6IHRva2VuLFxuICAgIH07XG4gIH1cblxuICBAR2V0KCdkZXRhaWwnKVxuICBAQXV0aCgpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn55So5oi35L+h5oGvJyB9KVxuICBhc3luYyBkZXRhaWwoQFJlcXVlc3QoKSByZXEpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZGV0YWlsKHJlcS51c2VyKTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ+eUqOaIt+S/oeaBr+iOt+WPluaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWFuYWdlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9tYW5hZ2UuZW50aXR5JztcbmltcG9ydCB7IGZvcndhcmRSZWYsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEp3dE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvand0JztcbmltcG9ydCB7IFBhc3Nwb3J0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSAnLi9hdXRoLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBNYW5hZ2VMb2NhbFN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9tYW5hZ2VMb2NhbC5zdHJhdGVneSc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2d1YXJkcy9hdXRoLmd1YXJkJztcbmltcG9ydCB7IExvZ01vZHVsZSB9IGZyb20gJy4uLy4uL2xvZy9sb2cubW9kdWxlJztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9sb2cvbG9nLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIGZvcndhcmRSZWYoKCkgPT4gTG9nTW9kdWxlKSxcbiAgICBUeXBlT3JtTW9kdWxlLmZvckZlYXR1cmUoW01hbmFnZV0pLFxuICAgIFBhc3Nwb3J0TW9kdWxlLFxuICAgIEp3dE1vZHVsZS5yZWdpc3RlckFzeW5jKHtcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCxcbiAgICAgICAgICBzaWduT3B0aW9uczogeyBleHBpcmVzSW46ICcxZCcgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbQXV0aENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgTWFuYWdlTG9jYWxTdHJhdGVneSwgQXV0aEd1YXJkXSxcbiAgZXhwb3J0czogW0F1dGhTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTWFuYWdlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9tYW5hZ2UuZW50aXR5JztcbmltcG9ydCB7IEJhZFJlcXVlc3RFeGNlcHRpb24sIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9qd3QnO1xuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBjb21wYXJlU3luYyB9IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdFJlcG9zaXRvcnkoTWFuYWdlKSBwcml2YXRlIHJlYWRvbmx5IG1hbmFnZU1vZGVsOiBSZXBvc2l0b3J5PE1hbmFnZT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBqd3RTZXJ2aWNlOiBKd3RTZXJ2aWNlLFxuICApIHt9XG5cbiAgLy8g566h55CG5ZGY6aqM6K+BXG4gIGFzeW5jIHZhbGlkYXRlTWFuYWdlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IG1hbmFnZSA9IGF3YWl0IHRoaXMubWFuYWdlTW9kZWwuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyB1c2VybmFtZSB9LFxuICAgICAgc2VsZWN0OiBbJ2lkJywgJ3VzZXJuYW1lJywgJ3Bhc3N3b3JkJywgJ3JvbGVJZCddLFxuICAgIH0pO1xuXG4gICAgaWYgKCFtYW5hZ2UpIHJldHVybiBudWxsO1xuICAgIGlmIChjb21wYXJlU3luYyhwYXNzd29yZCwgbWFuYWdlLnBhc3N3b3JkKSkge1xuICAgICAgY29uc3QgeyBwYXNzd29yZCwgLi4ucmVzdWx0IH0gPSBtYW5hZ2U7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEV4Y2VwdGlvbign6LSm5Y+35a+G56CB6ZSZ6K+vJyk7XG4gICAgfVxuICB9XG5cbiAgLy8g55Sf5oiQIHRva2VuXG4gIGNyZWF0ZVRva2VuKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5qd3RTZXJ2aWNlLnNpZ24ocGF5bG9hZCk7XG4gIH1cblxuICAvLyDop6PmnpAgdG9rZW5cbiAgdmVydGlmeVRva2VuKHRva2VuLCBzZWNyZXQpIHtcbiAgICBpZiAodG9rZW4uaW5jbHVkZXMoJ0JlYXJlcicpKSB7XG4gICAgICB0b2tlbiA9IHRva2VuLnNsaWNlKDcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5qd3RTZXJ2aWNlLnZlcmlmeSh0b2tlbiwgeyBzZWNyZXQgfSk7XG4gIH1cblxuICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgYXN5bmMgZGV0YWlsKHVzZXIpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tYW5hZ2VNb2RlbC5maW5kT25lKHVzZXIuaWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIE1hbmFnZUxvY2FsTG9naW5EdG8ge1xuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogJ2FkbWluJywgZGVzY3JpcHRpb246ICfnlKjmiLflkI0nIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+eUqOaIt+WQjeS4jeW+l+S4uuepuicgfSlcbiAgcmVhZG9ubHkgdXNlcm5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogJzEyMzQ1NicsIGRlc2NyaXB0aW9uOiAn5a+G56CBJyB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICflr4bnoIHkuI3lvpfkuLrnqbonIH0pXG4gIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCB7IFBhc3Nwb3J0U3RyYXRlZ3kgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcbmltcG9ydCB7IEluamVjdGFibGUsIFVuYXV0aG9yaXplZEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hbmFnZUxvY2FsU3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFxuICBTdHJhdGVneSxcbiAgJ01hbmFnZUxvY2FsJyxcbikge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvLyBwYXNzcG9ydCDnmoTpqozor4Hmlrnms5VcbiAgYXN5bmMgdmFsaWRhdGUodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudmFsaWRhdGVNYW5hZ2UodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oKTtcbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBQYXJhbSwgUHV0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpT3BlcmF0aW9uLCBBcGlUYWdzIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcbmNvbnN0IERFRkFVTFRfU0VSVklDRSA9ICdjb25maWdTZXJ2aWNlJztcblxuQENvbnRyb2xsZXIoJ3NldHRpbmcnKVxuQEFwaVRhZ3MoJ+mFjee9ricpXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge31cblxuICBAR2V0KCcvOm1vZGUnKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+iOt+WPlumFjee9ruWIl+ihqCcgfSlcbiAgQEF1dGgoWydzZXR0aW5nOnZpZXcnXSlcbiAgbGlzdChAUGFyYW0oJ21vZGUnKSBtb2RlOiBzdHJpbmcpOiBSZXN1bHQge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXNbREVGQVVMVF9TRVJWSUNFXS5saXN0KG1vZGUpO1xuICAgIHJldHVybiB7IHJlc3VsdCB9O1xuICB9XG5cbiAgQFB1dCgncmVmcmVzaCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5Yi35paw6YWN572u5YiX6KGoJyB9KVxuICBAQXV0aChbJ3NldHRpbmc6dmlldyddKVxuICBhc3luYyByZWZyZXNoKCk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnN5bmNDb25maWcoKTtcbiAgICByZXR1cm4geyByZXN1bHQgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvc2V0dGluZy5lbnRpdHknO1xuaW1wb3J0IHsgR2xvYmFsLCBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuLi9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbmZpZy5jb250cm9sbGVyJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1R5cGVPcm1Nb2R1bGUuZm9yRmVhdHVyZShbU2V0dGluZ10pLCBBdXRoTW9kdWxlXSxcbiAgY29udHJvbGxlcnM6IFtDb25maWdDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbQ29uZmlnU2VydmljZV0sXG4gIGV4cG9ydHM6IFtDb25maWdTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnTW9kdWxlIHt9XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9yZGVyX3N0YXRlOiBbXG4gICAgeyBsYWJlbDogJ+aIkOWKnycsIHZhbHVlOiAnc3VjY2VzcycgfSxcbiAgICB7IGxhYmVsOiAn5aSx6LSlJywgdmFsdWU6ICdlcnJvcicgfSxcbiAgXSxcbn07XG4iLCJpbXBvcnQgeyBTZXR0aW5nIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9zZXR0aW5nLmVudGl0eSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkFwcGxpY2F0aW9uQm9vdHN0cmFwIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgREVGQVVMVF9TRVRUSU5HIGZyb20gJy4vY29uZmlnLnNldHRpbmcnO1xuaW1wb3J0IERFRkFVTFRfT1BUSU9OIGZyb20gJy4vY29uZmlnLm9wdGlvbic7XG5jb25zdCBERUZBVUxUX01PREVMID0gJ3NldHRpbmdNb2RlbCc7XG5cbi8vIOe7p+aJvyBvbkFwcGxpY2F0aW9uQm9vdHN0cmFw77yM5Zyo5Yid5aeL5YyW5omA5pyJ5qih5Z2X5ZCO6LCD55So77yM5L2G5Zyo5L6m5ZCs6L+e5o6l5LmL5YmN6LCD55So44CCXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSBpbXBsZW1lbnRzIE9uQXBwbGljYXRpb25Cb290c3RyYXAge1xuICBkZWZhdWx0U2V0dGluZzogYW55O1xuICBkZWZhdWx0T3B0aW9uOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3RSZXBvc2l0b3J5KFNldHRpbmcpXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZXR0aW5nTW9kZWw6IFJlcG9zaXRvcnk8U2V0dGluZz4sXG4gICkge1xuICAgIHRoaXMuZGVmYXVsdFNldHRpbmcgPSBudWxsO1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbiA9IG51bGw7XG4gIH1cblxuICAvLyDliJ3lp4vljJbmiYDmnInmqKHlnZflkI7osIPnlKjvvIzliqDovb3njq/looPlj5jph49cbiAgYXN5bmMgb25BcHBsaWNhdGlvbkJvb3RzdHJhcCgpIHtcbiAgICBjb25zdCBzZXR0aW5nID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICAvLyDlgZrlpI3liLbkvb/nlKjvvIzkv53nlZnliJ3lp4vljJbmlbDmja5cbiAgICB0aGlzLmRlZmF1bHRTZXR0aW5nID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZXR0aW5nKSk7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShERUZBVUxUX09QVElPTikpO1xuICB9XG5cbiAgLy8g6L+H5ruk5LiN5Y+v5pu05paw55qE5pWw5o2uXG4gIHByaXZhdGUgZ2V0Q29uZmlnKCkge1xuICAgIGNvbnN0IHNldHRpbmcgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoREVGQVVMVF9TRVRUSU5HKSkge1xuICAgICAgaWYgKGtleS5jaGFyQXQoMCkgIT0gJ18nKSBzZXR0aW5nW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBzZXR0aW5nO1xuICB9XG5cbiAgbGlzdChtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09ICdhZG1pbicpIHtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjbGllbnQnKSB7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzZXR0aW5nOiB0aGlzLmRlZmF1bHRTZXR0aW5nLFxuICAgICAgb3B0aW9uOiB0aGlzLmRlZmF1bHRPcHRpb24sXG4gICAgfTtcbiAgfVxuXG4gIC8vIOWIt+aWsOeOr+Wig+WPmOmHj1xuICBhc3luYyBzeW5jQ29uZmlnKCkge1xuICAgIGNvbnN0IHJvd3MgPSBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmQoeyBvcmRlcjogeyBzb3J0OiAxIH0gfSk7XG4gICAgY29uc3Qgc291cmNlU2V0dGluZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3Qgc2V0dGluZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFNldHRpbmcsIHNvdXJjZVNldHRpbmcpO1xuICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgIGNvbnN0IHZhbHVldHlwZSA9IChyb3cudmFsdWV0eXBlIHx8ICdzdHJpbmcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IHZhbHVlOiBhbnkgPSByb3cudmFsdWU7XG4gICAgICBzd2l0Y2ggKHZhbHVldHlwZSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBg5qC85byP5YyW57O757uf6K6+572uJHtyb3cuaWR9ICR7cm93LmtleX0gJHtyb3cudmFsdWV95aSx6LSlIWAsXG4gICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyb3cuZ3JvdXApIHtcbiAgICAgICAgaWYgKCFzZXR0aW5nW3Jvdy5ncm91cF0pIHtcbiAgICAgICAgICBzZXR0aW5nW3Jvdy5ncm91cF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBzZXR0aW5nW3Jvdy5ncm91cF1bcm93LmtleV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHRpbmdbcm93LmtleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kZWZhdWx0U2V0dGluZyA9IHNldHRpbmc7XG4gICAgLy8gY29uc29sZS5sb2coJ+eOr+Wig+WPmOmHj+WIt+aWsOaIkOWKn+OAguOAguOAgicpO1xuICAgIHJldHVybiBzZXR0aW5nO1xuICB9XG59XG4iLCIvKipcbiAqIOiHquWumuS5iemFjee9rumhuVxuICogMjAyMS0xMi0xMiAyMzoyMlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnbmVzdGpz5ZCO5Y+w566h55CG5qih54mIJyxcbn07XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIE1hbmFnZUNyZWF0ZUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAnYWRtaW4nLCBkZXNjcmlwdGlvbjogJ+eUqOaIt+WQjScgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn55So5oi35ZCN5b+F5aGrJyB9KVxuICByZWFkb25seSB1c2VybmFtZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogMTIzNDU2LFxuICAgIGRlc2NyaXB0aW9uOiAn5a+G56CBJyxcbiAgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5a+G56CB5b+F5aGrJyB9KVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAxLCBkZXNjcmlwdGlvbjogJ+inkuiJsklEJyB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICfop5LoibLlv4XloasnIH0pXG4gIHJlYWRvbmx5IHJvbGVJZDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgUGFnaW5hdGlvbkR0byB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZHRvL3BhZ2luYXRpb24uZHRvJztcbmltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuZXhwb3J0IGNsYXNzIE1hbmFnZVBhZ2VzRHRvIGV4dGVuZHMgUGFnaW5hdGlvbkR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJ2FkbWluJywgZGVzY3JpcHRpb246ICfnlKjmiLflkI0nIH0pXG4gIHJlYWRvbmx5IHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAxLCBkZXNjcmlwdGlvbjogJ+inkuiJsklEJyB9KVxuICByZWFkb25seSByb2xlSWQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuZXhwb3J0IGNsYXNzIE1hbmFnZVVwZGF0ZUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJ2FkbWluJywgZGVzY3JpcHRpb246ICfnlKjmiLflkI0nIH0pXG4gIHJlYWRvbmx5IHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogMTIzNDU2LFxuICAgIGRlc2NyaXB0aW9uOiAn5a+G56CBJyxcbiAgfSlcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6IDEsIGRlc2NyaXB0aW9uOiAn6KeS6ImySUQnIH0pXG4gIHJlYWRvbmx5IHJvbGVJZDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIFBhcmFtLFxuICBQYXJzZUFycmF5UGlwZSxcbiAgUG9zdCxcbiAgUHV0LFxuICBRdWVyeSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpT3BlcmF0aW9uLCBBcGlUYWdzIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IE1hbmFnZUNyZWF0ZUR0byB9IGZyb20gJy4vZHRvL01hbmFnZUNyZWF0ZS5kdG8nO1xuaW1wb3J0IHsgTWFuYWdlUGFnZXNEdG8gfSBmcm9tICcuL2R0by9NYW5hZ2VQYWdlcy5kdG8nO1xuaW1wb3J0IHsgTWFuYWdlVXBkYXRlRHRvIH0gZnJvbSAnLi9kdG8vTWFuYWdlVXBkYXRlLmR0byc7XG5pbXBvcnQgeyBNYW5hZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tYW5hZ2Uuc2VydmljZSc7XG5jb25zdCBERUZBVUxUX1NFUlZJQ0UgPSAnbWFuYWdlclNlcnZpY2UnO1xuXG5AQ29udHJvbGxlcignbWFuYWdlJylcbkBBcGlUYWdzKCfnrqHnkIblkZgnKVxuZXhwb3J0IGNsYXNzIE1hbmFnZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1hbmFnZXJTZXJ2aWNlOiBNYW5hZ2VTZXJ2aWNlKSB7fVxuXG4gIEBQb3N0KClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliJvlu7rnrqHnkIblkZgnIH0pXG4gIEBBdXRoKFsnbWFuYWdlOmNyZWF0ZSddKVxuICBhc3luYyBjcmVhdGUoQEJvZHkoKSBib2R5OiBNYW5hZ2VDcmVhdGVEdG8pOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXNbREVGQVVMVF9TRVJWSUNFXS5jcmVhdGUoYm9keSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfnrqHnkIblkZjliJvlu7rmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBAUHV0KCc6aWQnKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+S/ruaUueeuoeeQhuWRmCcgfSlcbiAgQEF1dGgoKVxuICBhc3luYyB1cGRhdGUoXG4gICAgQFBhcmFtKCdpZCcpIGlkOiBudW1iZXIsXG4gICAgQEJvZHkoKSBib2R5OiBNYW5hZ2VVcGRhdGVEdG8sXG4gICk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnVwZGF0ZShpZCwgYm9keSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfnrqHnkIblkZjkv67mlLnmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBARGVsZXRlKClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliKDpmaTnrqHnkIblkZgnIH0pXG4gIEBBdXRoKFsnbWFuYWdlOmRlbGV0ZSddKVxuICBhc3luYyBkZWxldGUoXG4gICAgQEJvZHkoJ2lkcycsIG5ldyBQYXJzZUFycmF5UGlwZSh7IGl0ZW1zOiBOdW1iZXIsIHNlcGFyYXRvcjogJywnIH0pKVxuICAgIGlkczogbnVtYmVyW10sXG4gICk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmRlbGV0ZShpZHMpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAn566h55CG5ZGY5Yig6Zmk5oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG5cbiAgQEdldCgpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5YiG6aG15p+l6K+iJyB9KVxuICBAQXV0aChbJ21hbmFnZTp2aWV3J10pXG4gIGFzeW5jIHBhZ2VzKEBRdWVyeSgpIHF1ZXJ5OiBNYW5hZ2VQYWdlc0R0byk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnBhZ2VzKHF1ZXJ5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+euoeeQhuWRmOafpeivouaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn566h55CG5ZGY6K+m5oOFJyB9KVxuICBAQXV0aChbJ21hbmFnZTp2aWV3J10pXG4gIGFzeW5jIGRldGFpbChAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcik6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmRldGFpbChpZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICfnrqHnkIblkZjkv6Hmga/mn6Xor6LmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE1hbmFnZSB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvbWFuYWdlLmVudGl0eSc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuLi9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IE1hbmFnZUNvbnRyb2xsZXIgfSBmcm9tICcuL21hbmFnZS5jb250cm9sbGVyJztcbmltcG9ydCB7IE1hbmFnZVNlcnZpY2UgfSBmcm9tICcuL21hbmFnZS5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtUeXBlT3JtTW9kdWxlLmZvckZlYXR1cmUoW01hbmFnZV0pLCBBdXRoTW9kdWxlXSxcbiAgY29udHJvbGxlcnM6IFtNYW5hZ2VDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbTWFuYWdlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hbmFnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3BhZ2luYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE1hbmFnZSB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvbWFuYWdlLmVudGl0eSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbk1vZHVsZUluaXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RSZXBvc2l0b3J5IH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IGhhc2hTeW5jIH0gZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IHsgTGlrZSwgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgTWFuYWdlQ3JlYXRlRHRvIH0gZnJvbSAnLi9kdG8vTWFuYWdlQ3JlYXRlLmR0byc7XG5pbXBvcnQgeyBNYW5hZ2VQYWdlc0R0byB9IGZyb20gJy4vZHRvL01hbmFnZVBhZ2VzLmR0byc7XG5pbXBvcnQgeyBNYW5hZ2VVcGRhdGVEdG8gfSBmcm9tICcuL2R0by9NYW5hZ2VVcGRhdGUuZHRvJztcbmltcG9ydCB7IE1hbmFnZVBhZ2VXaGVyZSB9IGZyb20gJy4vaW50ZXJmYWNlL01hbmFnZVBhZ2VXaGVyZS5pbnRlcmZhY2UnO1xuY29uc3QgREVGQVVMVF9NT0RFTCA9ICdtYW5hZ2VNb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYW5hZ2VTZXJ2aWNlIGltcGxlbWVudHMgT25Nb2R1bGVJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdFJlcG9zaXRvcnkoTWFuYWdlKSBwcml2YXRlIHJlYWRvbmx5IG1hbmFnZU1vZGVsOiBSZXBvc2l0b3J5PE1hbmFnZT4sXG4gICkge31cblxuICBhc3luYyBvbk1vZHVsZUluaXQoKSB7XG4gICAgY29uc3Qgcm93ID0gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IHVzZXJuYW1lOiAneWtuJyB9LFxuICAgIH0pO1xuICAgIGlmICghcm93KSB7XG4gICAgICBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLnNhdmUoe1xuICAgICAgICB1c2VybmFtZTogJ3lrbicsXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoU3luYygnMTIzNDU2JyksXG4gICAgICAgIHJvbGVJZDogMSxcbiAgICAgICAgYXZhdGFyOlxuICAgICAgICAgICdodHRwczovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0RZQUlPZ3E4M2VyV2lhZlhkRTdBbUFtNEY5MFVKZDZ5dW5nSlJSWlBpYmliVE9nSUZzRjR2cTdMU0hMaWFHV1ptbHRJTzJjTGliaWEzTDNVeldsU1hJNFk2b2ZnLzEzMicsXG4gICAgICAgIG5pY2tuYW1lOiAn5bCG5qKm5ouJ5Yiw546w5a6eJyxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+euoeeQhuWRmOWIm+W7uuaIkOWKn++8ge+8ge+8gScpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShib2R5OiBNYW5hZ2VDcmVhdGVEdG8pOiBQcm9taXNlPE1hbmFnZT4ge1xuICAgIGJvZHkucGFzc3dvcmQgPSBoYXNoU3luYyhib2R5LnBhc3N3b3JkKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5zYXZlKGJvZHkpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkOiBudW1iZXIsIGJvZHk6IE1hbmFnZVVwZGF0ZUR0byk6IFByb21pc2U8TWFuYWdlPiB7XG4gICAgaWYgKGJvZHkucGFzc3dvcmQpIHtcbiAgICAgIGJvZHkucGFzc3dvcmQgPSBoYXNoU3luYyhib2R5LnBhc3N3b3JkKTtcbiAgICB9XG4gICAgYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS51cGRhdGUoaWQsIGJvZHkpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoaWQpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmRlbGV0ZShpZHMpO1xuICB9XG5cbiAgYXN5bmMgZGV0YWlsKGlkOiBudW1iZXIpOiBQcm9taXNlPE1hbmFnZT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoaWQpO1xuICB9XG5cbiAgYXN5bmMgcGFnZXMocXVlcnk6IE1hbmFnZVBhZ2VzRHRvKTogUHJvbWlzZTxQYWdpbmF0aW9uPE1hbmFnZT4+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYWdlLCBsaW1pdCwgcm9sZUlkIH0gPSBxdWVyeTtcbiAgICBjb25zdCBtYW5hZ2VmaWx0ZXI6IE1hbmFnZVBhZ2VXaGVyZSA9IHtcbiAgICAgIHNraXA6IChwYWdlIC0gMSkgKiBsaW1pdCxcbiAgICAgIHRha2U6IGxpbWl0LFxuICAgICAgd2hlcmU6IHt9LFxuICAgIH07XG5cbiAgICBpZiAodXNlcm5hbWUpIG1hbmFnZWZpbHRlci53aGVyZS51c2VybmFtZSA9IExpa2UoYCUke3VzZXJuYW1lfSVgKTtcbiAgICBpZiAocm9sZUlkKSBtYW5hZ2VmaWx0ZXIud2hlcmUucm9sZUlkID0gcm9sZUlkO1xuXG4gICAgY29uc3QgW3Jvd3MsIHRvdGFsXSA9IGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZEFuZENvdW50KG1hbmFnZWZpbHRlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvd3MsXG4gICAgICB0b3RhbCxcbiAgICAgIHBhZ2VyOiB7XG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxpbWl0LFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgb2Zmc2V0OiAocGFnZSAtIDEpICogbGltaXQsXG4gICAgICAgIHBhZ2VUb3RhbDogTWF0aC5jZWlsKHRvdGFsIC8gbGltaXQpLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIE1lbnVDcmVhdGVEdG8ge1xuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnMDrnm67lvZUgMTroj5zljZUgMjrlpJbpk74nLFxuICB9KVxuICByZWFkb25seSB0eXBlOiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAnaWNvbicsIGRlc2NyaXB0aW9uOiAn5Zu+5qCHJyB9KVxuICByZWFkb25seSBpY29uOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAwLCBkZXNjcmlwdGlvbjogJ+iPnOWNleaYr+WQpue8k+WtmCcgfSlcbiAgcmVhZG9ubHkgY2FjaGU6IGJvb2xlYW47XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAsIGRlc2NyaXB0aW9uOiAn5piv5ZCm5Zyo6I+c5Y2V5pi+56S6JyB9KVxuICByZWFkb25seSBoaWRlOiBib29sZWFuO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAn5rWL6K+VJywgZGVzY3JpcHRpb246ICfoj5zljZXlkI3np7AnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+iPnOWNleWQjeensOW/heWhqycgfSlcbiAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICcnLCBkZXNjcmlwdGlvbjogJ+i3r+eUseWcsOWdgCcgfSlcbiAgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAn5rWL6K+VJywgZGVzY3JpcHRpb246ICfnu4Tku7blkI3np7AnIH0pXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnaG9tZTpjcmVhdGUnLFxuICAgIGRlc2NyaXB0aW9uOiAn5pON5L2c6KeE5YiZJyxcbiAgfSlcbiAgcmVhZG9ubHkgYWN0aW9uOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDk5LCBkZXNjcmlwdGlvbjogJ+aOkuW6jycgfSlcbiAgcmVhZG9ubHkgc29ydDogbnVtYmVyO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICcvdGVtcC9pbmRleC52dWUnLFxuICAgIGRlc2NyaXB0aW9uOiAn57uE5Lu26Lev5b6EJyxcbiAgfSlcbiAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwLCBkZXNjcmlwdGlvbjogJ+eItuiPnOWNlUlEIDA65pegJyB9KVxuICByZWFkb25seSBwaWQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgTWVudVVwZGF0ZUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6IDEsXG4gICAgZGVzY3JpcHRpb246ICcwOuebruW9lSAxOuiPnOWNlSAyOuWklumTvicsXG4gIH0pXG4gIHJlYWRvbmx5IHR5cGU/OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAnaWNvbicsIGRlc2NyaXB0aW9uOiAn5Zu+5qCHJyB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICdpY29u5b+F5aGrJyB9KVxuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogMCwgZGVzY3JpcHRpb246ICfoj5zljZXmmK/lkKbnvJPlrZgnIH0pXG4gIHJlYWRvbmx5IGNhY2hlPzogYm9vbGVhbjtcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6IDAsIGRlc2NyaXB0aW9uOiAn5piv5ZCm5Zyo6I+c5Y2V5pi+56S6JyB9KVxuICByZWFkb25seSBoaWRlPzogYm9vbGVhbjtcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICfmtYvor5UnLCBkZXNjcmlwdGlvbjogJ+iPnOWNleWQjeensCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn6I+c5Y2V5ZCN56ew5b+F5aGrJyB9KVxuICByZWFkb25seSB0aXRsZT86IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICcvJywgZGVzY3JpcHRpb246ICfot6/nlLHlnLDlnYAnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+i3r+eUseWcsOWdgOW/heWhqycgfSlcbiAgcmVhZG9ubHkgdXJsPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJ+a1i+ivlScsIGRlc2NyaXB0aW9uOiAn57uE5Lu25ZCN56ewJyB9KVxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdob21lOmNyZWF0ZScsXG4gICAgZGVzY3JpcHRpb246ICfmk43kvZzop4TliJknLFxuICB9KVxuICByZWFkb25seSBhY3Rpb24/OiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiA5OSwgZGVzY3JpcHRpb246ICfmjpLluo8nIH0pXG4gIHJlYWRvbmx5IHNvcnQ/OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogJy90ZW1wL2luZGV4LnZ1ZScsXG4gICAgZGVzY3JpcHRpb246ICfnu4Tku7bot6/lvoQnLFxuICB9KVxuICByZWFkb25seSBwYXRoPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogMCwgZGVzY3JpcHRpb246ICfniLboj5zljZVJRCAwOuaXoCcgfSlcbiAgcmVhZG9ubHkgcGlkPzogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIFBhcmFtLFxuICBQYXJzZUFycmF5UGlwZSxcbiAgUG9zdCxcbiAgUHV0LFxuICBRdWVyeSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpT3BlcmF0aW9uLCBBcGlUYWdzIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IE1lbnVDcmVhdGVEdG8gfSBmcm9tICcuL2R0by9NZW51Q3JlYXRlLmR0byc7XG5pbXBvcnQgeyBNZW51TGlzdER0byB9IGZyb20gJy4vZHRvL01lbnVMaXN0LmR0byc7XG5pbXBvcnQgeyBNZW51VXBkYXRlRHRvIH0gZnJvbSAnLi9kdG8vTWVudVVwZGF0ZS5kdG8nO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5jb25zdCBERUZBVUxUX1NFUlZJQ0UgPSAnbWVudVNlcnZpY2UnO1xuXG5AQ29udHJvbGxlcignbWVudScpXG5AQXBpVGFncygn6I+c5Y2VJylcbmV4cG9ydCBjbGFzcyBNZW51Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7fVxuXG4gIEBQb3N0KClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliJvlu7roj5zljZUnIH0pXG4gIEBBdXRoKFsnbWVudTpjcmVhdGUnXSlcbiAgYXN5bmMgY3JlYXRlKEBCb2R5KCkgYm9keTogTWVudUNyZWF0ZUR0byk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmNyZWF0ZShib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ+iPnOWNleWIm+W7uuaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5L+u5pS56I+c5Y2VJyB9KVxuICBAQXV0aChbJ21lbnU6dXBkYXRlJ10pXG4gIGFzeW5jIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcixcbiAgICBAQm9keSgpIGJvZHk6IE1lbnVVcGRhdGVEdG8sXG4gICk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnVwZGF0ZShpZCwgYm9keSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfoj5zljZXkv67mlLnmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBARGVsZXRlKClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliKDpmaToj5zljZUnIH0pXG4gIEBBdXRoKFsnbWVudTpkZWxldGUnXSlcbiAgYXN5bmMgZGVsZXRlKFxuICAgIEBCb2R5KCdpZHMnLCBuZXcgUGFyc2VBcnJheVBpcGUoeyBpdGVtczogTnVtYmVyLCBzZXBhcmF0b3I6ICcsJyB9KSlcbiAgICBpZHM6IG51bWJlcltdLFxuICApOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXNbREVGQVVMVF9TRVJWSUNFXS5kZWxldGUoaWRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+iPnOWNleWIoOmZpOaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBHZXQoJ2xpc3QnKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIl+ihqOafpeivoicgfSlcbiAgQEF1dGgoWydtZW51OnZpZXcnXSlcbiAgYXN5bmMgbGlzdChcbiAgICBAUXVlcnkoJ2F0dHJzJywgbmV3IFBhcnNlQXJyYXlQaXBlKHsgaXRlbXM6IFN0cmluZywgc2VwYXJhdG9yOiAnLCcgfSkpXG4gICAgYXR0cnM6IEFycmF5PE1lbnVMaXN0RHRvPixcbiAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0ubGlzdChhdHRycyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfoj5zljZXmn6Xor6LmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE1lbnUgfSBmcm9tICdAYXBwL2xpYnMvZGIvZW50aXR5L21lbnUuZW50aXR5JztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIgfSBmcm9tICcuL21lbnUuY29udHJvbGxlcic7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtUeXBlT3JtTW9kdWxlLmZvckZlYXR1cmUoW01lbnVdKSwgQXV0aE1vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbTWVudUNvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtNZW51U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVNb2R1bGUge31cbiIsImltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2ludGVyZmFjZS9wYWdpbmF0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9tZW51LmVudGl0eSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBMaWtlLCBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBNZW51Q3JlYXRlRHRvIH0gZnJvbSAnLi9kdG8vTWVudUNyZWF0ZS5kdG8nO1xuaW1wb3J0IHsgTWVudVVwZGF0ZUR0byB9IGZyb20gJy4vZHRvL01lbnVVcGRhdGUuZHRvJztcbmNvbnN0IERFRkFVTFRfTU9ERUwgPSAnbWVudU1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdFJlcG9zaXRvcnkoTWVudSkgcHJpdmF0ZSByZWFkb25seSBtZW51TW9kZWw6IFJlcG9zaXRvcnk8TWVudT4sXG4gICkge31cblxuICBhc3luYyBjcmVhdGUoYm9keTogTWVudUNyZWF0ZUR0byk6IFByb21pc2U8TWVudT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLnNhdmUoYm9keSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQ6IG51bWJlciwgYm9keTogTWVudVVwZGF0ZUR0byk6IFByb21pc2U8TWVudT4ge1xuICAgIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0udXBkYXRlKGlkLCBib2R5KTtcbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kT25lKGlkKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShpZHM6IG51bWJlcltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5kZWxldGUoaWRzKTtcbiAgfVxuXG4gIGFzeW5jIGxpc3QoYXR0cnMpOiBQcm9taXNlPEFycmF5PE1lbnU+PiB7XG4gICAgaWYgKGF0dHJzWzBdID09PSAnYWxsJykge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZCgpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kKHsgc2VsZWN0OiBhdHRycyB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXBpUHJvcGVydHkgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBSb2xlQ3JlYXRlRHRvIHtcbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6ICfnrqHnkIblkZgnLCBkZXNjcmlwdGlvbjogJ+euoeeQhuWRmOWQjeensCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5ZCN56ew5b+F5aGrJyB9KVxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiAxMCxcbiAgICBkZXNjcmlwdGlvbjogJ+e6p+WIqycsXG4gIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+e6p+WIq+W/heWhqycgfSlcbiAgbGV2ZWw6IG51bWJlcjtcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAn5oiR5piv6KeS5YS/5o+P6L+wJyxcbiAgICBkZXNjcmlwdGlvbjogJ+inkuiJsuaPj+i/sCcsXG4gIH0pXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBQYWdpbmF0aW9uRHRvIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9kdG8vcGFnaW5hdGlvbi5kdG8nO1xuaW1wb3J0IHsgQXBpUHJvcGVydHkgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuXG5leHBvcnQgY2xhc3MgUm9sZVBhZ2VzRHRvIGV4dGVuZHMgUGFnaW5hdGlvbkR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJ+euoeeQhuWRmCcsIGRlc2NyaXB0aW9uOiAn6KeS6Imy5ZCN56ewJyB9KVxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc0FycmF5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFJvbGVSdWxlc0R0byB7XG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogWzEsIDIsIDNdLFxuICAgIGRlc2NyaXB0aW9uOiAn6I+c5Y2VSUTmlbDnu4QnLFxuICB9KVxuICBASXNBcnJheSh7IG1lc3NhZ2U6ICfoj5zljZVJROW/hemhu+aYr+S4gOS4quaVsOe7hCcgfSlcbiAgcmVhZG9ubHkgbWVudUlkczogQXJyYXk8bnVtYmVyPjtcbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgUm9sZVVwZGF0ZUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICfnrqHnkIblkZgnLFxuICAgIGRlc2NyaXB0aW9uOiAn566h55CG5ZGY5ZCN56ewJyxcbiAgfSlcbiAgQElzTm90RW1wdHkoKVxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogMTAsXG4gICAgZGVzY3JpcHRpb246ICfnuqfliKsnLFxuICB9KVxuICBASXNOb3RFbXB0eSgpXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogJ+aIkeaYr+inkuWEv+aPj+i/sCcsXG4gICAgZGVzY3JpcHRpb246ICfop5LoibLmj4/ov7AnLFxuICB9KVxuICByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgUG9zdCxcbiAgUHV0LFxuICBQYXJhbSxcbiAgUXVlcnksXG4gIERlbGV0ZSxcbiAgR2V0LFxuICBQYXJzZUFycmF5UGlwZSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpT3BlcmF0aW9uLCBBcGlUYWdzIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IFJvbGVDcmVhdGVEdG8gfSBmcm9tICcuL2R0by9Sb2xlQ3JlYXRlLmR0byc7XG5pbXBvcnQgeyBSb2xlTGlzdER0byB9IGZyb20gJy4vZHRvL1JvbGVMaXN0LmR0byc7XG5pbXBvcnQgeyBSb2xlUGFnZXNEdG8gfSBmcm9tICcuL2R0by9Sb2xlUGFnZXMuZHRvJztcbmltcG9ydCB7IFJvbGVSdWxlc0R0byB9IGZyb20gJy4vZHRvL1JvbGVSdWxlcy5kdG8nO1xuaW1wb3J0IHsgUm9sZVVwZGF0ZUR0byB9IGZyb20gJy4vZHRvL1JvbGVVcGRhdGUuZHRvJztcbmltcG9ydCB7IFJvbGVTZXJ2aWNlIH0gZnJvbSAnLi9yb2xlLnNlcnZpY2UnO1xuY29uc3QgREVGQVVMVF9TRVJWSUNFID0gJ3JvbGVTZXJ2aWNlJztcbkBDb250cm9sbGVyKCdyb2xlJylcbkBBcGlUYWdzKCfop5LoibInKVxuZXhwb3J0IGNsYXNzIFJvbGVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb2xlU2VydmljZTogUm9sZVNlcnZpY2UpIHt9XG5cbiAgQEdldCgnL2FjdGlvbnMvOmlkJylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfmn6Xor6Lop5LoibLoj5zljZUnIH0pXG4gIEBBdXRoKFsnbWVudTp2aWV3JywgJ3JvbGU6dmlldyddKVxuICBhc3luYyBnZXRBY3Rpb25zKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uZ2V0QWN0aW9ucyhpZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfop5LoibLoj5zljZXmn6Xor6LmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBAUHV0KCdhY3Rpb25zLzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5L+u5pS56KeS6Imy5p2D6ZmQJyB9KVxuICBAQXV0aChbJ3JvbGU6dXBkYXRlJywgJ3JvbGU6dXBkYXRlJ10pXG4gIGFzeW5jIHNldEFjdGlvbihcbiAgICBAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcixcbiAgICBAQm9keSgpIGJvZHk6IFJvbGVSdWxlc0R0byxcbiAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uc2V0QWN0aW9uKGlkLCBib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ+inkuiJsuadg+mZkOS/ruaUueaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBQb3N0KClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliJvlu7rop5LoibInIH0pXG4gIEBBdXRoKFsncm9sZTpjcmVhdGUnXSlcbiAgYXN5bmMgY3JlYXRlKEBCb2R5KCkgYm9keTogUm9sZUNyZWF0ZUR0byk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmNyZWF0ZShib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+inkuiJsuWIm+W7uuaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5L+u5pS56KeS6ImyJyB9KVxuICBAQXV0aChbJ3JvbGU6dXBkYXRlJ10pXG4gIGFzeW5jIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcixcbiAgICBAQm9keSgpIGJvZHk6IFJvbGVVcGRhdGVEdG8sXG4gICk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnVwZGF0ZShpZCwgYm9keSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfop5LoibLkv67mlLnmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBARGVsZXRlKClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliKDpmaTop5LoibInIH0pXG4gIEBBdXRoKFsncm9sZTpkZWxldGUnXSlcbiAgYXN5bmMgZGVsZXRlKFxuICAgIEBCb2R5KCdpZHMnLCBuZXcgUGFyc2VBcnJheVBpcGUoeyBpdGVtczogTnVtYmVyLCBzZXBhcmF0b3I6ICcsJyB9KSlcbiAgICBpZHM6IG51bWJlcltdLFxuICApOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXNbREVGQVVMVF9TRVJWSUNFXS5kZWxldGUoaWRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+inkuiJsuWIoOmZpOaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBHZXQoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIhumhteafpeivoicgfSlcbiAgQEF1dGgoWydyb2xlOnZpZXcnXSlcbiAgYXN5bmMgcGFnZXMoQFF1ZXJ5KCkgcXVlcnk6IFJvbGVQYWdlc0R0byk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnBhZ2VzKHF1ZXJ5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+inkuiJsuafpeivouaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBHZXQoJ2xpc3QnKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIl+ihqOafpeivoicgfSlcbiAgQEF1dGgoWydyb2xlOnZpZXcnXSlcbiAgYXN5bmMgbGlzdChcbiAgICBAUXVlcnkoJ2F0dHJzJywgbmV3IFBhcnNlQXJyYXlQaXBlKHsgaXRlbXM6IFN0cmluZywgc2VwYXJhdG9yOiAnLCcgfSkpXG4gICAgYXR0cnM6IEFycmF5PFJvbGVMaXN0RHRvPixcbiAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0ubGlzdChhdHRycyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfop5LoibLmn6Xor6LmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFJvbGUgfSBmcm9tICdAYXBwL2xpYnMvZGIvZW50aXR5L3JvbGUuZW50aXR5JztcbmltcG9ydCB7IFJvbGVNZW51IH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9yb2xlTWVudS5lbnRpdHknO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBSb2xlQ29udHJvbGxlciB9IGZyb20gJy4vcm9sZS5jb250cm9sbGVyJztcbmltcG9ydCB7IFJvbGVTZXJ2aWNlIH0gZnJvbSAnLi9yb2xlLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1R5cGVPcm1Nb2R1bGUuZm9yRmVhdHVyZShbUm9sZSwgUm9sZU1lbnVdKSwgQXV0aE1vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbUm9sZUNvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtSb2xlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFJvbGVNb2R1bGUge31cbiIsImltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2ludGVyZmFjZS9wYWdpbmF0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9yb2xlLmVudGl0eSc7XG5pbXBvcnQgeyBSb2xlTWVudSB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvcm9sZU1lbnUuZW50aXR5JztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uTW9kdWxlSW5pdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgTGlrZSwgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgUm9sZUNyZWF0ZUR0byB9IGZyb20gJy4vZHRvL1JvbGVDcmVhdGUuZHRvJztcbmltcG9ydCB7IFJvbGVQYWdlc0R0byB9IGZyb20gJy4vZHRvL1JvbGVQYWdlcy5kdG8nO1xuaW1wb3J0IHsgUm9sZVJ1bGVzRHRvIH0gZnJvbSAnLi9kdG8vUm9sZVJ1bGVzLmR0byc7XG5pbXBvcnQgeyBSb2xlVXBkYXRlRHRvIH0gZnJvbSAnLi9kdG8vUm9sZVVwZGF0ZS5kdG8nO1xuaW1wb3J0IHsgUm9sZVBhZ2VXaGVyZSB9IGZyb20gJy4vaW50ZXJmYWNlL1JvbGVQYWdlV2hlcmUuaW50ZXJmYWNlJztcbmNvbnN0IERFRkFVTFRfTU9ERUwgPSAncm9sZU1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvbGVTZXJ2aWNlIGltcGxlbWVudHMgT25Nb2R1bGVJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdFJlcG9zaXRvcnkoUm9sZSkgcHJpdmF0ZSByZWFkb25seSByb2xlTW9kZWw6IFJlcG9zaXRvcnk8Um9sZT4sXG4gICAgQEluamVjdFJlcG9zaXRvcnkoUm9sZU1lbnUpXG4gICAgcHJpdmF0ZSByZWFkb25seSByb2xlTWVudU1vZGVsOiBSZXBvc2l0b3J5PFJvbGVNZW51PixcbiAgKSB7fVxuXG4gIGFzeW5jIG9uTW9kdWxlSW5pdCgpIHtcbiAgICBjb25zdCByb3cgPSBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoMSk7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uc2F2ZSh7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAn6LaF57qn566h55CG5ZGYJyxcbiAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn5oul5pyJ5LiA5YiH5p2D6ZmQ55qE6LaF57qn566h55CG5ZGYJyxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+i2hee6p+euoeeQhuWRmOinkuiJsuWIneWni+WMluaIkOWKn++8ge+8ge+8gScpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNldEFjdGlvbihpZDogbnVtYmVyLCBib2R5OiBSb2xlUnVsZXNEdG8pIHtcbiAgICBhd2FpdCB0aGlzLnJvbGVNZW51TW9kZWwuZGVsZXRlKHsgcm9sZUlkOiBpZCB9KTtcbiAgICBjb25zdCBhcnIgPSBib2R5Lm1lbnVJZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4geyByb2xlSWQ6IGlkLCBtZW51SWQ6IGl0ZW0gfTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yb2xlTWVudU1vZGVsLnNhdmUoYXJyKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFjdGlvbnMocm9sZUlkKTogUHJvbWlzZTxBcnJheTxudW1iZXI+PiB7XG4gICAgY29uc3QgbWVudXMgPSBhd2FpdCB0aGlzLnJvbGVNZW51TW9kZWwuZmluZCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICByb2xlSWQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBtZW51cy5tYXAoKGl0ZW0pID0+IGl0ZW0ubWVudUlkKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShib2R5OiBSb2xlQ3JlYXRlRHRvKTogUHJvbWlzZTxSb2xlPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uc2F2ZShib2R5KTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZDogbnVtYmVyLCBib2R5OiBSb2xlVXBkYXRlRHRvKTogUHJvbWlzZTxSb2xlPiB7XG4gICAgYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS51cGRhdGUoaWQsIGJvZHkpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoaWQpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmRlbGV0ZShpZHMpO1xuICB9XG5cbiAgYXN5bmMgcGFnZXMocXVlcnk6IFJvbGVQYWdlc0R0byk6IFByb21pc2U8UGFnaW5hdGlvbjxSb2xlPj4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGFnZSwgbGltaXQgfSA9IHF1ZXJ5O1xuICAgIGNvbnN0IG1hbmFnZWZpbHRlcjogUm9sZVBhZ2VXaGVyZSA9IHtcbiAgICAgIHNraXA6IChwYWdlIC0gMSkgKiBsaW1pdCxcbiAgICAgIHRha2U6IGxpbWl0LFxuICAgICAgd2hlcmU6IHt9LFxuICAgIH07XG5cbiAgICBpZiAobmFtZSkgbWFuYWdlZmlsdGVyLndoZXJlLm5hbWUgPSBMaWtlKGAlJHtuYW1lfSVgKTtcblxuICAgIGNvbnN0IFtyb3dzLCB0b3RhbF0gPSBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRBbmRDb3VudChtYW5hZ2VmaWx0ZXIpO1xuICAgIHJldHVybiB7XG4gICAgICByb3dzLFxuICAgICAgdG90YWwsXG4gICAgICBwYWdlcjoge1xuICAgICAgICBwYWdlLFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIG9mZnNldDogKHBhZ2UgLSAxKSAqIGxpbWl0LFxuICAgICAgICBwYWdlVG90YWw6IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGxpc3QoYXR0cnMpOiBQcm9taXNlPEFycmF5PFJvbGU+PiB7XG4gICAgaWYgKGF0dHJzWzBdID09PSAnYWxsJykge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZCgpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kKHsgc2VsZWN0OiBhdHRycyB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQENvbnRyb2xsZXIoJ3VzZXInKVxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHt9XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi91c2VyLmNvbnRyb2xsZXInO1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICBjb250cm9sbGVyczogW1VzZXJDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHt9XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBTZXRNZXRhZGF0YSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IEF1dGhBY3Rpb24gPSAoYWN0aW9uOiBBcnJheTxzdHJpbmc+KSA9PlxuICBTZXRNZXRhZGF0YSgnYWN0aW9uJywgYWN0aW9uKTtcbiIsImltcG9ydCB7IGFwcGx5RGVjb3JhdG9ycywgVXNlR3VhcmRzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpQmVhcmVyQXV0aCwgQXBpVW5hdXRob3JpemVkUmVzcG9uc2UgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vZ3VhcmRzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgQWN0aW9uR3VhcmQgfSBmcm9tICcuLi9ndWFyZHMvYWN0aW9uLmd1YXJkJztcbmltcG9ydCB7IEF1dGhBY3Rpb24gfSBmcm9tICcuL2FjdGlvbi5kZWNvcmF0b3InO1xuXG4vLyDogZrlkIjoo4XppbDlmaggaHR0cHM6Ly9kb2NzLm5lc3Rqcy5jb20vY3VzdG9tLWRlY29yYXRvcnMjZGVjb3JhdG9yLWNvbXBvc2l0aW9uXG4vKipcbiAqIOmbhuaIkCBhY3Rpb24g6aqM6K+BID0+IHRva2VuIOino+aekFxuICogQHBhcmFtIGFjdGlvbiB7QXJyYXl9IOaTjeS9nOaVsOaNrlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEF1dGgoYWN0aW9uPzogQXJyYXk8c3RyaW5nPikge1xuICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgIEF1dGhBY3Rpb24oYWN0aW9uKSxcbiAgICBVc2VHdWFyZHMoQXV0aEd1YXJkLCBBY3Rpb25HdWFyZCksXG4gICAgQXBpQmVhcmVyQXV0aCgpLFxuICAgIEFwaVVuYXV0aG9yaXplZFJlc3BvbnNlKHsgZGVzY3JpcHRpb246ICdVbmF1dGhvcml6ZWRcIicgfSksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbURlY29yYXRvciwgRXhlY3V0aW9uQ29udGV4dCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IElwID0gY3JlYXRlUGFyYW1EZWNvcmF0b3IoXG4gIChkYXRhOiB1bmtub3duLCBjdHg6IEV4ZWN1dGlvbkNvbnRleHQpID0+IHtcbiAgICBjb25zdCByZXEgPSBjdHguc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdCgpO1xuICAgIGNvbnN0IGlwID1cbiAgICAgIHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSB8fCAvLyDliKTmlq3mmK/lkKbmnInlj43lkJHku6PnkIYgSVBcbiAgICAgIHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3MgfHwgLy8g5Yik5patIGNvbm5lY3Rpb24g55qE6L+c56iLIElQXG4gICAgICByZXEuc29ja2V0LnJlbW90ZUFkZHJlc3MgfHwgLy8g5Yik5pat5ZCO56uv55qEIHNvY2tldCDnmoQgSVBcbiAgICAgIHJlcS5jb25uZWN0aW9uLnNvY2tldC5yZW1vdGVBZGRyZXNzIHx8XG4gICAgICByZXEuaXA7XG4gICAgcmV0dXJuIGlwO1xuICB9LFxuKTtcbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25EdG8ge1xuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAxLFxuICAgIGRlc2NyaXB0aW9uOiAn6aG156CBJyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgfSlcbiAgcmVhZG9ubHkgcGFnZTogbnVtYmVyID0gMTtcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAyMCxcbiAgICBkZXNjcmlwdGlvbjogJ+aVsOmHjycsXG4gICAgdHlwZTogJ251bWJlcicsXG4gIH0pXG4gIHJlYWRvbmx5IGxpbWl0OiBudW1iZXIgPSAyMDtcbn1cbiIsImltcG9ydCB7XG4gIEV4Y2VwdGlvbkZpbHRlcixcbiAgQ2F0Y2gsXG4gIEFyZ3VtZW50c0hvc3QsXG4gIEh0dHBFeGNlcHRpb24sXG4gIEh0dHBTdGF0dXMsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAndXRpbCc7XG5cbkBDYXRjaCgpXG5leHBvcnQgY2xhc3MgSHR0cEV4Y2VwdGlvbkZpbHRlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG4gIGNhdGNoKGV4Y2VwdGlvbjogSHR0cEV4Y2VwdGlvbiwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGNvbnN0IGN0eCA9IGhvc3Quc3dpdGNoVG9IdHRwKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjdHguZ2V0UmVzcG9uc2U8UmVzcG9uc2U+KCk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGN0eC5nZXRSZXF1ZXN0PFJlcXVlc3Q+KCk7XG4gICAgY29uc3QgZXJyb3IgPSBleGNlcHRpb24ubWVzc2FnZTtcbiAgICBjb25zdCBzdGF0dXMgPVxuICAgICAgZXhjZXB0aW9uIGluc3RhbmNlb2YgSHR0cEV4Y2VwdGlvblxuICAgICAgICA/IGV4Y2VwdGlvbi5nZXRTdGF0dXMoKVxuICAgICAgICA6IEh0dHBTdGF0dXMuTk9UX0ZPVU5EO1xuXG4gICAgbGV0IGV4Y2VwdGlvblJlc3BvbnNlOiBhbnkgPSBudWxsO1xuICAgIGxldCBtZXNzYWdlOiBhbnkgPSBudWxsO1xuICAgIGlmIChpc0Z1bmN0aW9uKGV4Y2VwdGlvbi5nZXRSZXNwb25zZSkpIHtcbiAgICAgIGV4Y2VwdGlvblJlc3BvbnNlID0gZXhjZXB0aW9uLmdldFJlc3BvbnNlKCk7XG4gICAgICBtZXNzYWdlID0gZXhjZXB0aW9uUmVzcG9uc2U7XG4gICAgICBpZiAodHlwZW9mIGV4Y2VwdGlvblJlc3BvbnNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtZXNzYWdlID0gZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZVswXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXNwb25zZS5zdGF0dXMoc3RhdHVzKS5qc29uKHtcbiAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgcGF0aDogcmVxdWVzdC51cmwsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZXJyb3IsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1lbnUgfSBmcm9tICdAYXBwL2xpYnMvZGIvZW50aXR5L21lbnUuZW50aXR5JztcbmltcG9ydCB7IFJvbGVNZW51IH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9yb2xlTWVudS5lbnRpdHknO1xuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ2FuQWN0aXZhdGUsXG4gIEV4ZWN1dGlvbkNvbnRleHQsXG4gIFVuYXV0aG9yaXplZEV4Y2VwdGlvbixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUmVmbGVjdG9yIH0gZnJvbSAnQG5lc3Rqcy9jb3JlJztcbmltcG9ydCB7IGdldFJlcG9zaXRvcnksIEluIH0gZnJvbSAndHlwZW9ybSc7XG5cbi8vIOmJtOadg+WuiOWNqyAg6Ym05Yir5b2T5YmN55So5oi35YWz6IGU6KeS6Imy5piv5ZCm56ym5ZCIIGFwaSDopoHmsYLnmoTmnYPpmZDop4TliJlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3Rpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWZsZWN0b3I6IFJlZmxlY3Rvcikge31cblxuICBhc3luYyBjYW5BY3RpdmF0ZShjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy8g6I635Y+W5b2T5YmNIGFwaSDmiYDpnIDopoHnmoTop4TliJnmlbDnu4RcbiAgICBjb25zdCBydWxlcyA9IHRoaXMucmVmbGVjdG9yLmdldDxzdHJpbmdbXT4oJ2FjdGlvbicsIGNvbnRleHQuZ2V0SGFuZGxlcigpKTtcblxuICAgIGlmIChydWxlcyAmJiBydWxlcy5sZW5ndGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXNlciB9ID0gY29udGV4dC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0KCk7XG4gICAgICAgIC8vIOiOt+WPliBnYXRld2F5IOaVsOaNruW6k+S4i+eahOiPnOWNleadg+mZkFxuICAgICAgICBjb25zdCByb2xlTWVudU1vZGVsID0gZ2V0UmVwb3NpdG9yeShSb2xlTWVudSwgJ2dhdGV3YXknKTtcbiAgICAgICAgY29uc3Qgcm9sZU1lbnVMaXN0ID0gYXdhaXQgcm9sZU1lbnVNb2RlbC5maW5kKHtcbiAgICAgICAgICB3aGVyZTogeyByb2xlSWQ6IHVzZXIucm9sZUlkIH0sXG4gICAgICAgICAgc2VsZWN0OiBbJ21lbnVJZCddLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbWVudUlkcyA9IHJvbGVNZW51TGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ubWVudUlkKTtcbiAgICAgICAgLy8g6I635Y+WIGdhdGV3YXkg5pWw5o2u5bqT5LiL55qE6I+c5Y2VXG4gICAgICAgIGNvbnN0IG1lbnVNb2RlbCA9IGdldFJlcG9zaXRvcnkoTWVudSwgJ2dhdGV3YXknKTtcbiAgICAgICAgY29uc3QgbWVudWxpc3QgPSBhd2FpdCBtZW51TW9kZWwuZmluZCh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IEluKG1lbnVJZHMpLCB0eXBlOiAzIH0sIC8vIHR5cGU9MyDkuLrmnYPpmZBcbiAgICAgICAgICBzZWxlY3Q6IFsnYWN0aW9uJ10sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDop5LoibLkuIvmi6XmnInnmoTmiYDmnInmnYPpmZBcbiAgICAgICAgY29uc3QgYWN0aW9uTGlzdCA9IG1lbnVsaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5hY3Rpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb25MaXN0KTtcblxuICAgICAgICAvLyDliKTmlq3mnYPpmZAgIOS4jeespuWQiOmAgOWHulxuICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcbiAgICAgICAgICBpZiAoIWFjdGlvbkxpc3QuaW5jbHVkZXMocnVsZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oe1xuICAgICAgICAgICAgICBlcnJvcjogJzQwMycsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfmnYPpmZDkuI3otrMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAvLyB0aHJvdyBuZXcgVW5hdXRob3JpemVkRXhjZXB0aW9uKHtcbiAgICAgICAgLy8gICBlcnJvcjogZXJyb3IsXG4gICAgICAgIC8vICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBlcnJvcixcbiAgICAgICAgLy8gfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ2FuQWN0aXZhdGUsXG4gIEV4ZWN1dGlvbkNvbnRleHQsXG4gIFVuYXV0aG9yaXplZEV4Y2VwdGlvbixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdhcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vLyB0b2tlbiDpqozor4FcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuICBjYW5BY3RpdmF0ZShcbiAgICBjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LFxuICApOiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPiB8IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBjb250ZXh0LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oe1xuICAgICAgICBlcnJvcjogJzQwMScsXG4gICAgICAgIG1lc3NhZ2U6ICfor7flhYjnmbvlvZXvvIHvvIHvvIEnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gdGhpcy5hdXRoU2VydmljZS52ZXJ0aWZ5VG9rZW4oXG4gICAgICAgIHRva2VuLFxuICAgICAgICBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQsXG4gICAgICApO1xuICAgICAgcmVxdWVzdC51c2VyID0gdXNlcjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVW5hdXRob3JpemVkRXhjZXB0aW9uKHtcbiAgICAgICAgZXJyb3I6ICc0MDEnLFxuICAgICAgICBtZXNzYWdlOiAn55m75b2V54q25oCB5byC5bi477yM6K+36YeN5paw55m75b2VJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgTmVzdEludGVyY2VwdG9yLFxuICBFeGVjdXRpb25Db250ZXh0LFxuICBDYWxsSGFuZGxlcixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VJbnRlcmNlcHRvcnMgaW1wbGVtZW50cyBOZXN0SW50ZXJjZXB0b3Ige1xuICBpbnRlcmNlcHQoY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCwgbmV4dDogQ2FsbEhhbmRsZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIOivt+axgueahOWGheWuuVxuICAgIGNvbnN0IHJlcXVlc3QgPSBjb250ZXh0LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgICAvLyDov5Tlm57nmoTlhoXlrrlcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVzcG9uc2UoKTtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKCkucGlwZShcbiAgICAgIG1hcCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIGNvZGUsIHJlc3VsdCB9ID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiBjb2RlIHx8IDIwMCxcbiAgICAgICAgICBwYXRoOiByZXF1ZXN0LnVybCxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8ICfmk43kvZzmiJDlip8nLFxuICAgICAgICAgIHJlc3BvbnNldGltZTogYCR7RGF0ZS5ub3coKSAtIG5vd31tc2AsXG4gICAgICAgICAgcmVzdWx0OiByZXN1bHQgfHwgZGF0YSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IHtcbiAgcmVhZG9ubHkgY29kZT86IG51bWJlcjtcbiAgcmVhZG9ubHkgbWVzc2FnZT86IHN0cmluZztcbiAgcmVzdWx0PzogYW55O1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIE1hbnlUb01hbnksXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJy4vY29udGVudC5lbnRpdHknO1xuXG5ARW50aXR5KHsgbmFtZTogJ2NhdGVnb3J5JywgZGF0YWJhc2U6ICd0ZXN0X2Jsb2cnIH0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnkge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMzIsIGNvbW1lbnQ6ICflkI3np7AnIH0pXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiAzMiwgY29tbWVudDogJ+WIhue7hCcgfSlcbiAgZ3JvdXA6IHN0cmluZztcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+aOkuW6jycgfSlcbiAgc29ydDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5YiG57G75Zu+JyB9KVxuICBzaW1nOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmj4/ov7AnIH0pXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfniLZJRCcgfSlcbiAgcGlkOiBudW1iZXI7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oeyB0eXBlOiAnZGF0ZXRpbWUnLCBjb21tZW50OiAn5Yib5bu65pe26Ze0JyB9KVxuICBjdGltZTogc3RyaW5nO1xuXG4gIEBNYW55VG9NYW55KCh0eXBlKSA9PiBDb250ZW50LCAoY29udGVudCkgPT4gY29udGVudC5jYXRlZ29yeXMpXG4gIGNvbnRlbnQ6IENvbnRlbnRbXTtcbn1cbiIsImltcG9ydCB7XG4gIENvbHVtbixcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbiAgRW50aXR5LFxuICBKb2luVGFibGUsXG4gIE1hbnlUb01hbnksXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIFVwZGF0ZURhdGVDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5LmVudGl0eSc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuL3RhZy5lbnRpdHknO1xuXG5ARW50aXR5KCdjb250ZW50JylcbmV4cG9ydCBjbGFzcyBDb250ZW50IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5qCH6aKYJyB9KVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5YaF5a65JyB9KVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmtY/op4jmlbDph48nIH0pXG4gIHNjYW46IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+aOqOiNkOaMh+aVsCcgfSlcbiAgcmVjb206IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+e9rumhticgfSlcbiAgdG9wOiBib29sZWFuO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn54q25oCBJyB9KVxuICBzdGF0dXM6IHN0cmluZztcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbih7IHR5cGU6ICdkYXRldGltZScsIGNvbW1lbnQ6ICfliJvlu7rml7bpl7QnIH0pXG4gIGN0aW1lOiBzdHJpbmc7XG5cbiAgQFVwZGF0ZURhdGVDb2x1bW4oeyB0eXBlOiAnZGF0ZXRpbWUnLCBjb21tZW50OiAn5pu05paw5pe26Ze0JyB9KVxuICB1dGltZTogc3RyaW5nO1xuXG4gIEBNYW55VG9NYW55KCh0eXBlKSA9PiBUYWcsICh0YWcpID0+IHRhZy5jb250ZW50KVxuICBASm9pblRhYmxlKHsgbmFtZTogJ2NvbnRlbnRfdGFnJyB9KVxuICB0YWdzOiBUYWdbXTtcblxuICBATWFueVRvTWFueSgodHlwZSkgPT4gQ2F0ZWdvcnksIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuY29udGVudClcbiAgQEpvaW5UYWJsZSh7IG5hbWU6ICdjb250ZW50X2NhdGVnb3J5JyB9KVxuICBjYXRlZ29yeXM6IENhdGVnb3J5W107XG59XG4iLCJpbXBvcnQge1xuICBDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIEVudGl0eSxcbiAgTWFueVRvTWFueSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnLi9jb250ZW50LmVudGl0eSc7XG5cbkBFbnRpdHkoeyBuYW1lOiAndGFnJywgZGF0YWJhc2U6ICd0ZXN0X2Jsb2cnIH0pXG5leHBvcnQgY2xhc3MgVGFnIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMyLCBjb21tZW50OiAn5ZCN56ewJyB9KVxuICBuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmjpLluo8nLCBkZWZhdWx0OiA5OSB9KVxuICBzb3J0OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfliIbnsbvlm74nLCBkZWZhdWx0OiAnJyB9KVxuICBzaW1nOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmj4/ov7AnLCBkZWZhdWx0OiAnJyB9KVxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgdHlwZTogJ2RhdGV0aW1lJywgY29tbWVudDogJ+WIm+W7uuaXtumXtCcgfSlcbiAgY3RpbWU6IHN0cmluZztcblxuICBATWFueVRvTWFueSgodHlwZSkgPT4gQ29udGVudCwgKGNvbnRlbnQpID0+IGNvbnRlbnQudGFncylcbiAgY29udGVudDogQ29udGVudFtdO1xufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBMb2dpbkxvZyB9IGZyb20gJy4vZW50aXR5L2xvZ2luTG9nLmVudGl0eSc7XG5pbXBvcnQgeyBNYW5hZ2UgfSBmcm9tICcuL2VudGl0eS9tYW5hZ2UuZW50aXR5JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2VudGl0eS9tZW51LmVudGl0eSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi9lbnRpdHkvcm9sZS5lbnRpdHknO1xuaW1wb3J0IHsgUm9sZU1lbnUgfSBmcm9tICcuL2VudGl0eS9yb2xlTWVudS5lbnRpdHknO1xuaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJy4vZW50aXR5L3NldHRpbmcuZW50aXR5JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2VudGl0eS91c2VyLmVudGl0eSc7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4vY21zL2NhdGVnb3J5LmVudGl0eSc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuL2Ntcy90YWcuZW50aXR5JztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICcuL2Ntcy9jb250ZW50LmVudGl0eSc7XG5cbmNvbnN0IGJsb2dEQiA9IFR5cGVPcm1Nb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgbmFtZTogJ2Jsb2cnLFxuICB1c2VGYWN0b3J5OiAoKSA9PiAoe1xuICAgIG5hbWU6ICdibG9nJyxcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5EQl9QT1JUKSxcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuQkxPR19EQl9VU0VSTkFNRSxcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuQkxPR19EQl9QQVNTV09SRCxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuQkxPR19EQl9EQVRBQlNFLFxuICAgIHR5cGU6ICdteXNxbCcsXG4gICAgZW50aXRpZXM6IFtDYXRlZ29yeSwgVGFnLCBDb250ZW50XSxcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnZXI6ICdmaWxlJyxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIHRpbWV6b25lOiAnWicsXG4gIH0pLFxufSk7XG5cbmNvbnN0IGdhdGV3YXlEQiA9IFR5cGVPcm1Nb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgdXNlRmFjdG9yeTogYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnZ2F0ZXdheScsXG4gICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkRCX1BPUlQpLFxuICAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkdBVEVXQVlfREJfVVNFUk5BTUUsXG4gICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuR0FURVdBWV9EQl9QQVNTV09SRCxcbiAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5HQVRFV0FZX0RCX0RBVEFCU0UsXG4gICAgICB0eXBlOiAnbXlzcWwnLFxuICAgICAgZW50aXRpZXM6IFtSb2xlLCBNYW5hZ2UsIE1lbnUsIFNldHRpbmcsIFJvbGVNZW51LCBMb2dpbkxvZ10sXG4gICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICAgIGxvZ2dlcjogJ2ZpbGUnLFxuICAgICAgbG9nZ2luZzogdHJ1ZSxcbiAgICAgIHRpbWV6b25lOiAnWicsXG4gICAgfTtcbiAgfSxcbn0pO1xuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtnYXRld2F5REIsIGJsb2dEQl0sXG59KVxuZXhwb3J0IGNsYXNzIERiTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICBFbnRpdHksXG4gIENvbHVtbixcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ2xvZ2luX2xvZycpXG5leHBvcnQgY2xhc3MgTG9naW5Mb2cge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNjQsIGNvbW1lbnQ6ICfnlKjmiLflkI0nIH0pXG4gIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICflhbPogZRJRCcgfSlcbiAgbWFuYWdlSWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+eZu+W9lUlQJyB9KVxuICBpcDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5omA5bGe5Zyw5Z2AJywgZGVmYXVsdDogJycgfSlcbiAgYWRkcmVzczogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn55m75b2V5bmz5Y+wJyB9KVxuICB1YTogc3RyaW5nO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgdHlwZTogJ2RhdGV0aW1lJyB9KVxuICBsb2dpbl90aW1lOiBzdHJpbmc7XG5cbiAgLy8gQE1hbnlUb01hbnkoKCkgPT4gTWVudSwgKG1lbnUpID0+IG1lbnUucm9sZSlcbiAgLy8gQEpvaW5UYWJsZSh7XG4gIC8vICAgbmFtZTogJ3JvbGVfbWVudScsXG4gIC8vICAgLy8gam9pbkNvbHVtbnM6IFt7IG5hbWU6ICd1c2VyX2lkJyB9XSxcbiAgLy8gICAvLyBpbnZlcnNlSm9pbkNvbHVtbnM6IFt7IG5hbWU6ICdyb2xlX2lkJyB9XSxcbiAgLy8gfSlcbiAgLy8gbWVudTogTWVudVtdO1xufVxuIiwiaW1wb3J0IHtcbiAgRW50aXR5LFxuICBDb2x1bW4sXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIEluZGV4LFxufSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgnbWFuYWdlJylcbmV4cG9ydCBjbGFzcyBNYW5hZ2Uge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNjQgfSlcbiAgdXNlcm5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgc2VsZWN0OiBmYWxzZSwgbGVuZ3RoOiAxMjggfSlcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiA2NCwgZGVmYXVsdDogJ+euoeeQhuWRmCcgfSlcbiAgbmlja25hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICBkZWZhdWx0OlxuICAgICAgJ2h0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXJXaWFmWGRFN0FtQW00RjkwVUpkNnl1bmdKUlJaUGliaWJUT2dJRnNGNHZxN0xTSExpYUdXWm1sdElPMmNMaWJpYTNMM1V6V2xTWEk0WTZvZmcvMTMyJyxcbiAgfSlcbiAgYXZhdGFyOiBzdHJpbmc7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oeyB0eXBlOiAnZGF0ZXRpbWUnIH0pXG4gIGN0aW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIEBJbmRleCgpXG4gIHJvbGVJZDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgnbWVudScpXG5leHBvcnQgY2xhc3MgTWVudSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICBudWxsYWJsZTogZmFsc2UsXG4gICAgZGVmYXVsdDogMSxcbiAgICBjb21tZW50OiAnMDrnm67lvZUgMTroj5zljZUgMjrlpJbpk74gMzrop4TliJknLFxuICB9KVxuICB0eXBlOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMzAsIG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogJycsIGNvbW1lbnQ6ICflm77moIcnIH0pXG4gIGljb246IHN0cmluZztcblxuICBAQ29sdW1uKHsgZGVmYXVsdDogMCwgbnVsbGFibGU6IGZhbHNlLCBjb21tZW50OiAn6I+c5Y2V5piv5ZCm57yT5a2YJyB9KVxuICBjYWNoZTogYm9vbGVhbjtcblxuICBAQ29sdW1uKHsgZGVmYXVsdDogMCwgbnVsbGFibGU6IGZhbHNlLCBjb21tZW50OiAn5piv5ZCm5Zyo6I+c5Y2V5pi+56S6JyB9KVxuICBoaWRlOiBib29sZWFuO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMwLCBudWxsYWJsZTogZmFsc2UsIGRlZmF1bHQ6ICcnLCBjb21tZW50OiAn6I+c5Y2V5ZCN56ewJyB9KVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDEwMCwgbnVsbGFibGU6IGZhbHNlLCBkZWZhdWx0OiAnJywgY29tbWVudDogJ+i3r+eUseWcsOWdgCcgfSlcbiAgdXJsOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMjAsIG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogJycsIGNvbW1lbnQ6ICfnu4Tku7blkI3np7AnIH0pXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiA1MCwgbnVsbGFibGU6IHRydWUsIGRlZmF1bHQ6ICcnLCBjb21tZW50OiAn5pON5L2c6KeE5YiZJyB9KVxuICBhY3Rpb246IHN0cmluZztcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IGZhbHNlLCBkZWZhdWx0OiA5OSwgY29tbWVudDogJ+aOkuW6jycgfSlcbiAgc29ydDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogZmFsc2UsIGRlZmF1bHQ6ICcnLCBjb21tZW50OiAn57uE5Lu26Lev5b6EJyB9KVxuICBwYXRoOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogMCwgY29tbWVudDogJ+eItuiPnOWNlUlEIDA65pegJyB9KVxuICBwaWQ6IG51bWJlcjtcblxuICAvLyBATWFueVRvTWFueSgoKSA9PiBSb2xlLCAocm9sZSkgPT4gcm9sZS5tZW51KVxuICAvLyByb2xlOiBSb2xlW107XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIENvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xuXG5ARW50aXR5KCdyb2xlJylcbmV4cG9ydCBjbGFzcyBSb2xlIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDEwIH0pXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgbGV2ZWw6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAvLyBATWFueVRvTWFueSgoKSA9PiBNZW51LCAobWVudSkgPT4gbWVudS5yb2xlKVxuICAvLyBASm9pblRhYmxlKHtcbiAgLy8gICBuYW1lOiAncm9sZV9tZW51JyxcbiAgLy8gICAvLyBqb2luQ29sdW1uczogW3sgbmFtZTogJ3VzZXJfaWQnIH1dLFxuICAvLyAgIC8vIGludmVyc2VKb2luQ29sdW1uczogW3sgbmFtZTogJ3JvbGVfaWQnIH1dLFxuICAvLyB9KVxuICAvLyBtZW51OiBNZW51W107XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIENvbHVtbiwgSW5kZXgsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgncm9sZV9tZW51JylcbmV4cG9ydCBjbGFzcyBSb2xlTWVudSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+inkuiJsklEJyB9KVxuICBASW5kZXgoKVxuICByb2xlSWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+iPnOWNlUlEJyB9KVxuICBASW5kZXgoKVxuICBtZW51SWQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ3NldHRpbmcnKVxuZXhwb3J0IGNsYXNzIFNldHRpbmcge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMzAsIGNvbW1lbnQ6ICflkI3np7AnLCBudWxsYWJsZTogZmFsc2UgfSlcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMwLCBjb21tZW50OiAn6ZSu5ZCNJywgdW5pcXVlOiB0cnVlLCBudWxsYWJsZTogZmFsc2UgfSlcbiAga2V5OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6ICd0ZXh0JywgY29tbWVudDogJ+mUruWAvCcsIG51bGxhYmxlOiBmYWxzZSB9KVxuICB2YWx1ZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMwLCBjb21tZW50OiAn5YiG57uEJywgZGVmYXVsdDogJycsIG51bGxhYmxlOiBmYWxzZSB9KVxuICBncm91cDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIGxlbmd0aDogMTAsXG4gICAgY29tbWVudDogJ+aVsOaNruexu+WeiycsXG4gICAgbnVsbGFibGU6IGZhbHNlLFxuICB9KVxuICB2YWx1ZXR5cGU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+aOkuW6jycsIG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogMTAgfSlcbiAgc29ydDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiAndGV4dCcsIGNvbW1lbnQ6ICflpIfms6gnIH0pXG4gIGNvbW1vbjogc3RyaW5nO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9saWJzLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYnMuc2VydmljZSc7XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBMaWJzU2VydmljZSB9IGZyb20gJy4vbGlicy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJy4vY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgRGJNb2R1bGUgfSBmcm9tICcuL2RiL2RiLm1vZHVsZSc7XG5pbXBvcnQgeyBDcm9uU2VydmljZSB9IGZyb20gJy4vdXRpbHMvY3Jvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVkdWxlTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9zY2hlZHVsZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdhcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGJNb2R1bGUsIFNjaGVkdWxlTW9kdWxlLmZvclJvb3QoKSwgQ29uZmlnTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbTGlic1NlcnZpY2UsIENyb25TZXJ2aWNlXSxcbiAgZXhwb3J0czogW0xpYnNTZXJ2aWNlLCBDcm9uU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIExpYnNNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaWJzU2VydmljZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ3JvbiwgSW50ZXJ2YWwgfSBmcm9tICdAbmVzdGpzL3NjaGVkdWxlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdhcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXIgPSBuZXcgTG9nZ2VyKENyb25TZXJ2aWNlLm5hbWUpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgLy8g5q+P5YiG6ZKfIDMg56eS5pe25omn6KGMXG4gIC8vIEBDcm9uKCczICogKiAqICogKicpXG4gIC8vIGhhbmRsZUNyb24oKSB7XG4gIC8vICAgY29uc29sZS5sb2coJzExMTExJyk7XG4gIC8vICAgdGhpcy5sb2dnZXIuZGVidWcoJ0NhbGxlZCB3aGVuIHRoZSBjdXJyZW50IHNlY29uZCBpcyA0NScpO1xuICAvLyB9XG5cbiAgLy8gMTBzIOaJp+ihjOS4gOasoSDliLfmlrDnjq/looPlj5jph49cbiAgQEludGVydmFsKDEwMDAwKVxuICBhc3luYyBjcm9uU3luY0NvbmZpZygpIHtcbiAgICBhd2FpdCB0aGlzLmNvbmZpZ1NlcnZpY2Uuc3luY0NvbmZpZygpO1xuICB9XG5cbiAgLy8g5q+P5aSpIDIzLjAxIOaJp+ihjOS4gOasoVxuICBAQ3JvbignMCAxIDIzICogKiAqJylcbiAgaGFuZGxlQ3JvbigpIHtcbiAgICBjb25zb2xlLmxvZygnMTExMTEnKTtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnQ2FsbGVkIHdoZW4gdGhlIGN1cnJlbnQgc2Vjb25kIGlzIDQ1Jyk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2p3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9wYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3NjaGVkdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvc3dhZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3R5cGVvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3MtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxpYi1xcXdyeS15eXlqXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1YS1wYXJzZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG5pbXBvcnQgeyBIdHRwRXhjZXB0aW9uRmlsdGVyIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9maWx0ZXJzL2h0dHAtZXhjZXB0aW9uLmZpbHRlcic7XG5pbXBvcnQgeyBSZXNwb25zZUludGVyY2VwdG9ycyB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJjZXB0b3IvcmVzcG9uc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgVmFsaWRhdGlvblBpcGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBNaWNyb3NlcnZpY2VPcHRpb25zLCBUcmFuc3BvcnQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgU3dhZ2dlck1vZHVsZSwgRG9jdW1lbnRCdWlsZGVyIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IEdhdGV3YXlzTW9kdWxlIH0gZnJvbSAnLi9nYXRld2F5cy5tb2R1bGUnO1xuaW1wb3J0IHsgYWRkcmVzcyB9IGZyb20gJ2lwJztcblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGUoR2F0ZXdheXNNb2R1bGUsIHtcbiAgICBsb2dnZXI6IFsnZXJyb3InLCAnd2FybiddLFxuICB9KTtcblxuICBjb25zdCBtaWNybzEgPSBhcHAuY29ubmVjdE1pY3Jvc2VydmljZTxNaWNyb3NlcnZpY2VPcHRpb25zPih7XG4gICAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuVENQLFxuICAgIG9wdGlvbnM6IHsgcmV0cnlBdHRlbXB0czogNSwgcmV0cnlEZWxheTogMzAwMCB9LFxuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhtaWNybzEpO1xuXG4gIGF3YWl0IGFwcC5zdGFydEFsbE1pY3Jvc2VydmljZXMoKTtcblxuICAvLyDlhajlsYDpqozor4FcbiAgYXBwLnVzZUdsb2JhbFBpcGVzKFxuICAgIG5ldyBWYWxpZGF0aW9uUGlwZSh7XG4gICAgICBkaXNhYmxlRXJyb3JNZXNzYWdlczogZmFsc2UsIC8vIOWFs+mXreivpue7humUmeivr+S/oeaBr1xuICAgICAgdHJhbnNmb3JtOiB0cnVlLCAvLyDnsbvlnovovazmjaJcbiAgICB9KSxcbiAgKTtcbiAgLy8g5YWo5bGA5rOo5YaM5ZON5bqU5oum5oiq5ZmoXG4gIGFwcC51c2VHbG9iYWxJbnRlcmNlcHRvcnMobmV3IFJlc3BvbnNlSW50ZXJjZXB0b3JzKCkpO1xuICAvLyDlhajlsYDlvILluLjov4fmu6RcbiAgYXBwLnVzZUdsb2JhbEZpbHRlcnMobmV3IEh0dHBFeGNlcHRpb25GaWx0ZXIoKSk7XG4gIC8vIOWFqOWxgOi3r+W+hOWJjee8gDtcbiAgYXBwLnNldEdsb2JhbFByZWZpeCgnYXBpL3YxJyk7XG4gIC8vIOWkhOeQhui3qOWfn1xuICBhcHAuZW5hYmxlQ29ycygpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBEb2N1bWVudEJ1aWxkZXIoKVxuICAgIC5zZXRUaXRsZSgnTmVzdGpzIG1pY3Jvc2VydmljZSEhIScpXG4gICAgLnNldERlc2NyaXB0aW9uKCdUaGUgTmVzdGpzIG1pY3Jvc2VydmljZSBBUEkgZGVzY3JpcHRpb24nKVxuICAgIC5zZXRWZXJzaW9uKCcxLjAnKVxuICAgIC5hZGRCZWFyZXJBdXRoKClcbiAgICAuYnVpbGQoKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBTd2FnZ2VyTW9kdWxlLmNyZWF0ZURvY3VtZW50KGFwcCwgY29uZmlnKTtcbiAgU3dhZ2dlck1vZHVsZS5zZXR1cCgnYXBpL3YxL2RvYycsIGFwcCwgZG9jdW1lbnQpO1xuXG4gIGF3YWl0IGFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuR0FURVdBWVNfUE9SVCB8fCAzMDAwLCAoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKFxuICAgICAgYEdhdGV3YXlzIHJ1bmluZyBodHRwOi8vJHthZGRyZXNzKCl9OiR7cHJvY2Vzcy5lbnYuR0FURVdBWVNfUE9SVH1gLFxuICAgICk7XG4gIH0pO1xufVxuYm9vdHN0cmFwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=