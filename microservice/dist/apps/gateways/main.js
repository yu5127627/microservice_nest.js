/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/gateways/src/blog/category/category.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/gateways/src/blog/category/category.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const CategoryCreate_dto_1 = __webpack_require__(/*! ./dto/CategoryCreate.dto */ "./apps/gateways/src/blog/category/dto/CategoryCreate.dto.ts");
const CategoryUpdate_dto_1 = __webpack_require__(/*! ./dto/CategoryUpdate.dto */ "./apps/gateways/src/blog/category/dto/CategoryUpdate.dto.ts");
let CategoryController = class CategoryController {
    constructor(client) {
        this.client = client;
    }
    list(attrs) {
        const pattern = { category: 'list' };
        return this.client.send(pattern, { attrs });
    }
    create(body) {
        const pattern = { category: 'create' };
        return this.client.send(pattern, body);
    }
    update(id, body) {
        const pattern = { category: 'update' };
        return this.client.send(pattern, Object.assign({ id }, body));
    }
    delete(ids) {
        const pattern = { category: 'delete' };
        return this.client.send(pattern, { ids });
    }
    detail(id) {
        const pattern = { category: 'detail' };
        return this.client.send(pattern, { id });
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: '查询分类列表' }),
    (0, auth_decorator_1.Auth)(['tag:view']),
    __param(0, (0, common_1.Query)('attrs', new common_1.ParseArrayPipe({
        items: String,
        separator: ',',
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_a = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _a : Object)
], CategoryController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建分类' }),
    (0, auth_decorator_1.Auth)(['tag:create']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof CategoryCreate_dto_1.CategoryCreateDto !== "undefined" && CategoryCreate_dto_1.CategoryCreateDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _c : Object)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '编辑分类' }),
    (0, auth_decorator_1.Auth)(['tag:update']),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof CategoryUpdate_dto_1.CategoryUpdateDto !== "undefined" && CategoryUpdate_dto_1.CategoryUpdateDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _e : Object)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: '删除分类' }),
    (0, auth_decorator_1.Auth)(['tag:delete']),
    __param(0, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof Array !== "undefined" && Array) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _g : Object)
], CategoryController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '分类详情' }),
    (0, auth_decorator_1.Auth)(['tag:view']),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_h = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _h : Object)
], CategoryController.prototype, "detail", null);
CategoryController = __decorate([
    (0, common_1.Controller)('blog/category'),
    (0, swagger_1.ApiTags)('分类'),
    __param(0, (0, common_1.Inject)('BLOG_SERVICE')),
    __metadata("design:paramtypes", [typeof (_j = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _j : Object])
], CategoryController);
exports.CategoryController = CategoryController;


/***/ }),

/***/ "./apps/gateways/src/blog/category/category.module.ts":
/*!************************************************************!*\
  !*** ./apps/gateways/src/blog/category/category.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const auth_module_1 = __webpack_require__(/*! ../../system/auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const category_controller_1 = __webpack_require__(/*! ./category.controller */ "./apps/gateways/src/blog/category/category.controller.ts");
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        controllers: [category_controller_1.CategoryController],
        providers: [
            {
                provide: 'BLOG_SERVICE',
                useFactory: (configService) => {
                    const port = configService.get('BLOG_PORT');
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: '127.0.0.1',
                            port: port || 8001,
                        },
                    });
                },
                inject: [config_1.ConfigService],
            },
        ],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;


/***/ }),

/***/ "./apps/gateways/src/blog/category/dto/CategoryCreate.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/gateways/src/blog/category/dto/CategoryCreate.dto.ts ***!
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
exports.CategoryCreateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CategoryCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '测试分类', description: '名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '分类名称必填' }),
    __metadata("design:type", String)
], CategoryCreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '测试分组', description: '分组' }),
    (0, class_validator_1.IsNotEmpty)({ message: '分类分组必填' }),
    __metadata("design:type", String)
], CategoryCreateDto.prototype, "group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 99, description: '排序' }),
    __metadata("design:type", Number)
], CategoryCreateDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 'http://qapp-lm.oss-cn-hangzhou.aliyuncs.com/upload/lwyd/cover/1634138768954_1fht45hhr.jpg',
        description: '封面图',
    }),
    __metadata("design:type", String)
], CategoryCreateDto.prototype, "simg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '我是描述的内容',
        description: '描述',
    }),
    __metadata("design:type", String)
], CategoryCreateDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 0, description: '父级分类ID' }),
    __metadata("design:type", Number)
], CategoryCreateDto.prototype, "pid", void 0);
exports.CategoryCreateDto = CategoryCreateDto;


/***/ }),

/***/ "./apps/gateways/src/blog/category/dto/CategoryUpdate.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/gateways/src/blog/category/dto/CategoryUpdate.dto.ts ***!
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
exports.CategoryUpdateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CategoryUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '测试分类', description: '名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '分类名称必填' }),
    __metadata("design:type", String)
], CategoryUpdateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '测试分组', description: '分组' }),
    (0, class_validator_1.IsNotEmpty)({ message: '分类分组必填' }),
    __metadata("design:type", String)
], CategoryUpdateDto.prototype, "group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 99, description: '排序' }),
    __metadata("design:type", Number)
], CategoryUpdateDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 'http://qapp-lm.oss-cn-hangzhou.aliyuncs.com/upload/lwyd/cover/1634138768954_1fht45hhr.jpg',
        description: '封面图',
    }),
    __metadata("design:type", String)
], CategoryUpdateDto.prototype, "simg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '我是描述的内容',
        description: '描述',
    }),
    __metadata("design:type", String)
], CategoryUpdateDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 0, description: '父级分类ID' }),
    (0, class_validator_1.IsNotEmpty)({ message: '父级分类必填' }),
    __metadata("design:type", Number)
], CategoryUpdateDto.prototype, "pid", void 0);
exports.CategoryUpdateDto = CategoryUpdateDto;


/***/ }),

/***/ "./apps/gateways/src/blog/content/content.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/gateways/src/blog/content/content.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentController = void 0;
const auth_decorator_1 = __webpack_require__(/*! @app/libs/common/decorator/auth.decorator */ "./libs/src/common/decorator/auth.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const ContentCreate_dto_1 = __webpack_require__(/*! ./dto/ContentCreate.dto */ "./apps/gateways/src/blog/content/dto/ContentCreate.dto.ts");
const ContentPages_dto_1 = __webpack_require__(/*! ./dto/ContentPages.dto */ "./apps/gateways/src/blog/content/dto/ContentPages.dto.ts");
const ContentUpdate_dto_1 = __webpack_require__(/*! ./dto/ContentUpdate.dto */ "./apps/gateways/src/blog/content/dto/ContentUpdate.dto.ts");
let ContentController = class ContentController {
    constructor(client) {
        this.client = client;
    }
    contentPages(query) {
        const pattern = { content: 'pages' };
        return this.client.send(pattern, query);
    }
    create(body) {
        const pattern = { content: 'create' };
        return this.client.send(pattern, body);
    }
    update(id, body) {
        const pattern = { content: 'update' };
        return this.client.send(pattern, Object.assign({ id }, body));
    }
    delete(ids) {
        const pattern = { content: 'delete' };
        return this.client.send(pattern, { ids });
    }
    detail(id) {
        const pattern = { content: 'detail' };
        return this.client.send(pattern, { id });
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(['content:view']),
    (0, swagger_1.ApiOperation)({ summary: '内容分页查询' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ContentPages_dto_1.ContentPagesDto !== "undefined" && ContentPages_dto_1.ContentPagesDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], ContentController.prototype, "contentPages", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '创建内容' }),
    (0, auth_decorator_1.Auth)(['content:create']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof ContentCreate_dto_1.ContentCreateDto !== "undefined" && ContentCreate_dto_1.ContentCreateDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _d : Object)
], ContentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '编辑内容' }),
    (0, auth_decorator_1.Auth)(['content:update']),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof ContentUpdate_dto_1.ContentUpdateDto !== "undefined" && ContentUpdate_dto_1.ContentUpdateDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _f : Object)
], ContentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: '删除内容' }),
    (0, auth_decorator_1.Auth)(['content:delete']),
    __param(0, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof Array !== "undefined" && Array) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _h : Object)
], ContentController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '内容详情' }),
    (0, auth_decorator_1.Auth)(['content:view']),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_j = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _j : Object)
], ContentController.prototype, "detail", null);
ContentController = __decorate([
    (0, common_1.Controller)('blog/content'),
    (0, swagger_1.ApiTags)('内容'),
    __param(0, (0, common_1.Inject)('BLOG_SERVICE')),
    __metadata("design:paramtypes", [typeof (_k = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _k : Object])
], ContentController);
exports.ContentController = ContentController;


/***/ }),

/***/ "./apps/gateways/src/blog/content/content.module.ts":
/*!**********************************************************!*\
  !*** ./apps/gateways/src/blog/content/content.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const auth_module_1 = __webpack_require__(/*! ../../system/auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const content_controller_1 = __webpack_require__(/*! ./content.controller */ "./apps/gateways/src/blog/content/content.controller.ts");
let ContentModule = class ContentModule {
};
ContentModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        controllers: [content_controller_1.ContentController],
        providers: [
            {
                provide: 'BLOG_SERVICE',
                useFactory: (configService) => {
                    const port = configService.get('BLOG_PORT');
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: '127.0.0.1',
                            port: port || 8001,
                        },
                    });
                },
                inject: [config_1.ConfigService],
            },
        ],
    })
], ContentModule);
exports.ContentModule = ContentModule;


/***/ }),

/***/ "./apps/gateways/src/blog/content/dto/ContentCreate.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/gateways/src/blog/content/dto/ContentCreate.dto.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentCreateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ContentCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '默认标题', description: '文章标题' }),
    (0, class_validator_1.IsNotEmpty)({ message: '标题不得为空' }),
    __metadata("design:type", String)
], ContentCreateDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        default: '我是文章的默认内容',
        description: '文章内容',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: '内容不得为空' }),
    __metadata("design:type", String)
], ContentCreateDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 10, description: '推荐指数' }),
    __metadata("design:type", Number)
], ContentCreateDto.prototype, "recom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: true, description: '是否置顶' }),
    __metadata("design:type", Boolean)
], ContentCreateDto.prototype, "top", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'up_rack', description: '内容状态' }),
    __metadata("design:type", String)
], ContentCreateDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: [1, 2, 3], description: '标签' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: '至少添加一个标签' }),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], ContentCreateDto.prototype, "tagIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: [1, 2, 3], description: '分类' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: '至少添加一个分类' }),
    __metadata("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], ContentCreateDto.prototype, "cateIds", void 0);
exports.ContentCreateDto = ContentCreateDto;


/***/ }),

/***/ "./apps/gateways/src/blog/content/dto/ContentPages.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/gateways/src/blog/content/dto/ContentPages.dto.ts ***!
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
exports.ContentPagesDto = void 0;
const pagination_dto_1 = __webpack_require__(/*! @app/libs/common/dto/pagination.dto */ "./libs/src/common/dto/pagination.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ContentPagesDto extends pagination_dto_1.PaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '测试', description: '文章标题' }),
    __metadata("design:type", String)
], ContentPagesDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: true, description: '是否置顶' }),
    __metadata("design:type", Boolean)
], ContentPagesDto.prototype, "top", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'up_rack', description: '文章状态' }),
    __metadata("design:type", String)
], ContentPagesDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '+id', description: '排序方式' }),
    __metadata("design:type", String)
], ContentPagesDto.prototype, "orderBy", void 0);
exports.ContentPagesDto = ContentPagesDto;


/***/ }),

/***/ "./apps/gateways/src/blog/content/dto/ContentUpdate.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/gateways/src/blog/content/dto/ContentUpdate.dto.ts ***!
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
exports.ContentUpdateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ContentUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: '默认标题', description: '文章标题' }),
    (0, class_validator_1.IsNotEmpty)({ message: '标题不得为空' }),
    __metadata("design:type", String)
], ContentUpdateDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        default: '我是文章的默认内容',
        description: '文章内容',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: '内容不得为空' }),
    __metadata("design:type", String)
], ContentUpdateDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0, description: '浏览量' }),
    __metadata("design:type", Number)
], ContentUpdateDto.prototype, "scan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 10, description: '推荐指数' }),
    __metadata("design:type", Number)
], ContentUpdateDto.prototype, "recom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: true, description: '是否置顶' }),
    __metadata("design:type", Boolean)
], ContentUpdateDto.prototype, "top", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'up_rack', description: '内容状态' }),
    __metadata("design:type", String)
], ContentUpdateDto.prototype, "status", void 0);
exports.ContentUpdateDto = ContentUpdateDto;


/***/ }),

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
    (0, swagger_1.ApiProperty)({ required: true, default: '测试分组', description: '分组' }),
    (0, class_validator_1.IsNotEmpty)({ message: '分组名称必填' }),
    __metadata("design:type", String)
], TagCreate.prototype, "group", void 0);
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
    (0, swagger_1.ApiProperty)({ required: true, default: '测试分组', description: '分组' }),
    (0, class_validator_1.IsNotEmpty)({ message: '分组名称必填' }),
    __metadata("design:type", String)
], TagUpdate.prototype, "group", void 0);
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
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: '删除标签' }),
    (0, auth_decorator_1.Auth)(['tag:delete']),
    __param(0, (0, common_1.Body)('ids')),
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
    (0, common_1.Controller)('blog/tag'),
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
                    const port = configService.get('BLOG_PORT');
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: '127.0.0.1',
                            port: port || 8001,
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

/***/ "./apps/gateways/src/gateways.controller.ts":
/*!**************************************************!*\
  !*** ./apps/gateways/src/gateways.controller.ts ***!
  \**************************************************/
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
exports.GatewaysController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const config_service_1 = __webpack_require__(/*! ./system/config/config.service */ "./apps/gateways/src/system/config/config.service.ts");
let GatewaysController = class GatewaysController {
    constructor(configService) {
        this.configService = configService;
    }
    loginLogPages(res) {
        const host = res.req.headers.host;
        const hostRedirect = this.configService.getConfig('host_redirect');
        const item = hostRedirect.find((item) => item.host === host);
        if (!item) {
            return res.end('<h1>502 访问失败</h1>');
        }
        else {
            res.redirect(item.path);
            return res.end();
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Content-Type', 'text/html; charset=utf-8'),
    (0, swagger_1.ApiOperation)({ summary: '访问重定向' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], GatewaysController.prototype, "loginLogPages", null);
GatewaysController = __decorate([
    (0, common_1.Controller)('/'),
    (0, swagger_1.ApiTags)('日志'),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _a : Object])
], GatewaysController);
exports.GatewaysController = GatewaysController;


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
const content_module_1 = __webpack_require__(/*! ./blog/content/content.module */ "./apps/gateways/src/blog/content/content.module.ts");
const category_module_1 = __webpack_require__(/*! ./blog/category/category.module */ "./apps/gateways/src/blog/category/category.module.ts");
const cms_module_1 = __webpack_require__(/*! ./ssr/cms/cms.module */ "./apps/gateways/src/ssr/cms/cms.module.ts");
const gateways_controller_1 = __webpack_require__(/*! ./gateways.controller */ "./apps/gateways/src/gateways.controller.ts");
let GatewaysModule = class GatewaysModule {
};
GatewaysModule = __decorate([
    (0, common_1.Module)({
        imports: [
            db_module_1.DbModule,
            config_1.ConfigModule.forRoot({ isGlobal: true, cache: true }),
            libs_1.LibsModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            role_module_1.RoleModule,
            manage_module_1.ManageModule,
            menu_module_1.MenuModule,
            config_module_1.ConfigModule,
            log_module_1.LogModule,
            tag_module_1.TagModule,
            content_module_1.ContentModule,
            category_module_1.CategoryModule,
            cms_module_1.CmsModule,
        ],
        controllers: [gateways_controller_1.GatewaysController],
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
    (0, auth_decorator_1.Auth)(['log_login:view']),
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
const ip_1 = __webpack_require__(/*! ip */ "ip");
const ipInterface = libQqwry.init();
ipInterface.speed();
let LogService = class LogService {
    constructor(loginLogModel) {
        this.loginLogModel = loginLogModel;
    }
    async loginLogCreate(body) {
        try {
            const ip = body.ip.includes('ffff') ? body.ip.slice(7) : body.ip;
            const { Country } = ipInterface.searchIP(ip);
            const city = Country || '';
            return await this.loginLogModel.save({
                manageId: body.id,
                username: body.username,
                address: city,
                ua: body.ua,
                ip: ip === '127.0.0.1' ? (0, ip_1.address)() : ip,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async loginLogPages(query) {
        const { username, page, limit, ua, address } = query;
        const filter = {
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'DESC',
            },
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

/***/ "./apps/gateways/src/ssr/cms/cms.controller.ts":
/*!*****************************************************!*\
  !*** ./apps/gateways/src/ssr/cms/cms.controller.ts ***!
  \*****************************************************/
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CmsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const express_1 = __webpack_require__(/*! express */ "express");
const cms_service_1 = __webpack_require__(/*! ./cms.service */ "./apps/gateways/src/ssr/cms/cms.service.ts");
const menuList = [
    { title: '主页', path: '/' },
    { title: '归档', path: '/ssr/cms/timeline' },
    { title: '标签', path: '/ssr/cms/tag' },
    { title: '友链', path: '/ssr/cms/friends' },
    { title: '关于我', path: '/ssr/cms/about' },
    { title: '随笔', path: '/ssr/cms/note' },
    { title: '播放器', path: '/ssr/cms/player' },
];
let CmsController = class CmsController {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    welcome(res) {
        res.render('welcome', { title: 'welcome' });
        return res.end();
    }
    async home(res) {
        const { articleList } = await this.cmsService.home();
        res.render('home', { title: '首页', menuList, articleList });
        return res.end();
    }
    tag(res) {
        res.render('tag', { title: 'tag' });
        return res.end();
    }
    timeline(res) {
        res.render('timeline', { title: 'timeline' });
        return res.end();
    }
    async article(res, id) {
        const article = await this.cmsService.article(id);
        res.render('article', { title: article.title, menuList, article });
        return res.end();
    }
};
__decorate([
    (0, common_1.Get)('welcome'),
    (0, common_1.Header)('Content-Type', 'text/html; charset=utf-8'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], CmsController.prototype, "welcome", null);
__decorate([
    (0, common_1.Get)('home'),
    (0, common_1.Header)('Content-Type', 'text/html; charset=utf-8'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "home", null);
__decorate([
    (0, common_1.Get)('tag'),
    (0, common_1.Header)('Content-Type', 'text/html; charset=utf-8'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CmsController.prototype, "tag", null);
__decorate([
    (0, common_1.Get)('timeline'),
    (0, common_1.Header)('Content-Type', 'text/html; charset=utf-8'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CmsController.prototype, "timeline", null);
__decorate([
    (0, common_1.Get)('article/:id'),
    (0, common_1.Header)('Content-Type', 'text/html; charset=utf-8'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object, Number]),
    __metadata("design:returntype", Promise)
], CmsController.prototype, "article", null);
CmsController = __decorate([
    (0, common_1.Controller)('ssr/cms'),
    __metadata("design:paramtypes", [typeof (_f = typeof cms_service_1.CmsService !== "undefined" && cms_service_1.CmsService) === "function" ? _f : Object])
], CmsController);
exports.CmsController = CmsController;


/***/ }),

/***/ "./apps/gateways/src/ssr/cms/cms.module.ts":
/*!*************************************************!*\
  !*** ./apps/gateways/src/ssr/cms/cms.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CmsModule = void 0;
const utils_1 = __webpack_require__(/*! @app/libs/utils/utils */ "./libs/src/utils/utils.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cms_controller_1 = __webpack_require__(/*! ./cms.controller */ "./apps/gateways/src/ssr/cms/cms.controller.ts");
const cms_service_1 = __webpack_require__(/*! ./cms.service */ "./apps/gateways/src/ssr/cms/cms.service.ts");
let CmsModule = class CmsModule {
};
CmsModule = __decorate([
    (0, common_1.Module)({
        controllers: [cms_controller_1.CmsController],
        providers: [(0, utils_1.lazyLoadDB)('blog', 'Content'), cms_service_1.CmsService],
    })
], CmsModule);
exports.CmsModule = CmsModule;


/***/ }),

/***/ "./apps/gateways/src/ssr/cms/cms.service.ts":
/*!**************************************************!*\
  !*** ./apps/gateways/src/ssr/cms/cms.service.ts ***!
  \**************************************************/
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
exports.CmsService = void 0;
const content_entity_1 = __webpack_require__(/*! @app/libs/db/cms/content.entity */ "./libs/src/db/cms/content.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const marked_1 = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.cjs");
let CmsService = class CmsService {
    constructor(contentModel) {
        this.contentModel = contentModel;
    }
    async home() {
        const articleList = await this.contentModel.find({
            where: { status: 'up_rack' },
            select: ['id', 'content', 'ctime', 'recom', 'scan', 'title', 'top'],
            order: {
                top: 'DESC',
                recom: 'DESC',
                ctime: 'DESC',
            },
            relations: ['tags', 'categorys'],
        });
        return { articleList };
    }
    async article(id) {
        const article = await this.contentModel.findOne(id, {
            where: { status: 'up_rack' },
            select: ['id', 'content', 'ctime', 'recom', 'scan', 'title', 'top'],
            relations: ['tags', 'categorys'],
        });
        article.content = (0, marked_1.marked)(article.content);
        return article;
    }
};
CmsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(content_entity_1.Content)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CmsService);
exports.CmsService = CmsService;


/***/ }),

/***/ "./apps/gateways/src/ssr/whitelist.ts":
/*!********************************************!*\
  !*** ./apps/gateways/src/ssr/whitelist.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WhiteList = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.WhiteList = [
    { path: '', method: common_1.RequestMethod.GET },
    { path: 'ssr/cms/welcome', method: common_1.RequestMethod.GET },
    { path: 'ssr/cms/home', method: common_1.RequestMethod.GET },
    { path: 'ssr/cms/tag', method: common_1.RequestMethod.GET },
    { path: 'ssr/cms/timeline', method: common_1.RequestMethod.GET },
    { path: 'ssr/cms/article/:id', method: common_1.RequestMethod.GET },
];


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
            throw new Error('账号密码错误');
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
        if (user)
            return user;
        throw new common_1.BadRequestException('账号密码错误');
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
    __param(0, (0, common_1.Param)('mode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_a = typeof result_interface_1.Result !== "undefined" && result_interface_1.Result) === "function" ? _a : Object)
], ConfigController.prototype, "list", null);
__decorate([
    (0, common_1.Put)('refresh'),
    (0, swagger_1.ApiOperation)({ summary: '刷新配置列表' }),
    (0, auth_decorator_1.Auth)(['setting:update']),
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
    content_state: [
        { label: '草稿', value: 'draft', type: 'info' },
        { label: '上架', value: 'up_rack', type: 'success' },
        { label: '下架', value: 'down_rack', type: 'error' },
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
var ConfigService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const setting_entity_1 = __webpack_require__(/*! @app/libs/db/entity/setting.entity */ "./libs/src/db/entity/setting.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const config_setting_1 = __webpack_require__(/*! ./config.setting */ "./apps/gateways/src/system/config/config.setting.ts");
const config_option_1 = __webpack_require__(/*! ./config.option */ "./apps/gateways/src/system/config/config.option.ts");
const DEFAULT_MODEL = 'settingModel';
let ConfigService = ConfigService_1 = class ConfigService {
    constructor(settingModel) {
        this.settingModel = settingModel;
        this.defaultSetting = null;
        this.defaultOption = null;
    }
    async onApplicationBootstrap() {
        const setting = ConfigService_1.getConfigFile();
        this.defaultSetting = JSON.parse(JSON.stringify(setting));
        this.defaultOption = JSON.parse(JSON.stringify(config_option_1.default));
    }
    static getConfigFile(k) {
        const setting = {};
        for (const [key, val] of Object.entries(config_setting_1.default)) {
            if (key.charAt(0) != '_')
                setting[key] = val;
            if (k && k === key)
                return val;
        }
        return setting;
    }
    getConfig(k) {
        const setting = {};
        for (const [key, val] of Object.entries(this.defaultSetting)) {
            if (key.charAt(0) != '_')
                setting[key] = val;
            if (k && k === key)
                return val;
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
        const sourceSetting = ConfigService_1.getConfigFile();
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
ConfigService = ConfigService_1 = __decorate([
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
    top_level: 0,
    host_redirect: [{ host: 'localhost:8001', path: '/ssr/cms/welcome' }],
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
    (0, swagger_1.ApiProperty)({
        required: false,
        default: '将梦拉到现实',
        description: '昵称',
    }),
    __metadata("design:type", String)
], ManagePagesDto.prototype, "nickname", void 0);
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
    (0, auth_decorator_1.Auth)(['manange:update']),
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
        const { username, page, limit, roleId, nickname } = query;
        const managefilter = {
            skip: (page - 1) * limit,
            take: limit,
            where: {},
        };
        if (username)
            managefilter.where.username = (0, typeorm_2.Like)(`%${username}%`);
        if (nickname)
            managefilter.where.nickname = (0, typeorm_2.Like)(`%${nickname}%`);
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
        required: true,
        default: 1,
        description: '0:目录 1:菜单 2:外链',
    }),
    __metadata("design:type", Number)
], MenuUpdateDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'icon', description: '图标' }),
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
    (0, swagger_1.ApiProperty)({ required: true, default: '测试', description: '菜单名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '名称必填' }),
    __metadata("design:type", String)
], MenuUpdateDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '/', description: '路由地址' }),
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
    (0, swagger_1.ApiProperty)({ required: true, default: 0, description: '父菜单ID 0:无' }),
    (0, class_validator_1.IsNotEmpty)({ message: '父级ID必填' }),
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
        console.log(body);
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
    async list(attrs, req) {
        const result = await this[DEFAULT_SERVICE].list(attrs, req.user);
        return {
            code: 200,
            message: '菜单查询成功',
            result,
        };
    }
    async getRoleMenu(roleId) {
        const result = await this[DEFAULT_SERVICE].getRoleMenu(roleId);
        return {
            code: 200,
            message: '角色下菜单查询成功',
            result,
        };
    }
    async setRoleMenu(roleId, menuIds) {
        const result = await this[DEFAULT_SERVICE].setRoleMenu(roleId, menuIds);
        return {
            code: 200,
            message: '角色下菜单修改成功',
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
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof Array !== "undefined" && Array) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], MenuController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('list/:roleId'),
    (0, swagger_1.ApiOperation)({ summary: '角色下菜单查询' }),
    (0, auth_decorator_1.Auth)(['menu:view', 'role:view']),
    __param(0, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], MenuController.prototype, "getRoleMenu", null);
__decorate([
    (0, common_1.Put)('list/:roleId'),
    (0, swagger_1.ApiOperation)({ summary: '角色下菜单修改' }),
    (0, auth_decorator_1.Auth)(['menu:update', 'role:update']),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Body)('menuIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], MenuController.prototype, "setRoleMenu", null);
MenuController = __decorate([
    (0, common_1.Controller)('menu'),
    (0, swagger_1.ApiTags)('菜单'),
    __metadata("design:paramtypes", [typeof (_k = typeof menu_service_1.MenuService !== "undefined" && menu_service_1.MenuService) === "function" ? _k : Object])
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
const role_entity_1 = __webpack_require__(/*! @app/libs/db/entity/role.entity */ "./libs/src/db/entity/role.entity.ts");
const roleMenu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/roleMenu.entity */ "./libs/src/db/entity/roleMenu.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/gateways/src/system/auth/auth.module.ts");
const config_module_1 = __webpack_require__(/*! ../config/config.module */ "./apps/gateways/src/system/config/config.module.ts");
const menu_controller_1 = __webpack_require__(/*! ./menu.controller */ "./apps/gateways/src/system/menu/menu.controller.ts");
const menu_service_1 = __webpack_require__(/*! ./menu.service */ "./apps/gateways/src/system/menu/menu.service.ts");
let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([menu_entity_1.Menu, role_entity_1.Role, roleMenu_entity_1.RoleMenu]),
            auth_module_1.AuthModule,
            config_module_1.ConfigModule,
        ],
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuService = void 0;
const menu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/menu.entity */ "./libs/src/db/entity/menu.entity.ts");
const role_entity_1 = __webpack_require__(/*! @app/libs/db/entity/role.entity */ "./libs/src/db/entity/role.entity.ts");
const roleMenu_entity_1 = __webpack_require__(/*! @app/libs/db/entity/roleMenu.entity */ "./libs/src/db/entity/roleMenu.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const config_service_1 = __webpack_require__(/*! ../config/config.service */ "./apps/gateways/src/system/config/config.service.ts");
const DEFAULT_MODEL = 'menuModel';
let MenuService = class MenuService {
    constructor(menuModel, roleModel, roleMenuModel, configService) {
        this.menuModel = menuModel;
        this.roleModel = roleModel;
        this.roleMenuModel = roleMenuModel;
        this.configService = configService;
    }
    async create(body) {
        return await this[DEFAULT_MODEL].save(body);
    }
    async update(id, body) {
        const { action, cache, hide, icon, name, path, pid, sort, title, type, url, } = body;
        await this[DEFAULT_MODEL].update(id, {
            action,
            cache,
            hide,
            icon,
            name,
            path,
            pid,
            sort,
            title,
            type,
            url,
        });
        return await this[DEFAULT_MODEL].findOne(id);
    }
    async delete(ids) {
        var e_1, _a;
        try {
            for (var ids_1 = __asyncValues(ids), ids_1_1; ids_1_1 = await ids_1.next(), !ids_1_1.done;) {
                const id = ids_1_1.value;
                const count = await this[DEFAULT_MODEL].count({ where: { pid: id } });
                if (count > 0) {
                    throw new common_1.BadRequestException({ message: '请先移除当前节点下子节点' });
                }
                await this[DEFAULT_MODEL].delete(id);
                await this.roleMenuModel.delete({ menuId: id });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) await _a.call(ids_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    async list(attrs, user) {
        const role = await this.roleModel.findOne(user.roleId);
        const topLevel = this.configService.getConfig('top_level');
        const where = {};
        if (role.level !== topLevel)
            where.id = (0, typeorm_2.In)(user.menuIds);
        if (attrs[0] === 'all') {
            return await this[DEFAULT_MODEL].find(where);
        }
        return await this[DEFAULT_MODEL].find({ where, select: attrs });
    }
    async getRoleMenu(roleId) {
        const roleMenuList = await this.roleMenuModel.find({
            where: { roleId },
            select: ['menuId'],
        });
        const menuIds = roleMenuList.map((item) => item.menuId);
        const menulist = await this.menuModel.find({
            where: { id: (0, typeorm_2.In)(menuIds) },
        });
        return menulist.map((item) => item.id);
    }
    async setRoleMenu(roleId, menuIds) {
        await this.roleMenuModel.delete({ roleId });
        const arr = menuIds.map((item) => {
            return {
                roleId,
                menuId: item,
            };
        });
        await this.roleMenuModel.save(arr);
    }
};
MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(2, (0, typeorm_1.InjectRepository)(roleMenu_entity_1.RoleMenu)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof config_service_1.ConfigService !== "undefined" && config_service_1.ConfigService) === "function" ? _d : Object])
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
    (0, swagger_1.ApiProperty)({ required: false, default: '管理员', description: '名称' }),
    __metadata("design:type", String)
], RolePagesDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 1, description: '级别' }),
    __metadata("design:type", Number)
], RolePagesDto.prototype, "level", void 0);
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
        const { level, name, page, limit } = query;
        const managefilter = {
            skip: (page - 1) * limit,
            take: limit,
            where: {},
        };
        if (name)
            managefilter.where.name = (0, typeorm_2.Like)(`%${name}%`);
        if (level)
            managefilter.where.level = level;
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
const util = __webpack_require__(/*! util */ "util");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let message = null;
        let error = null;
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.BAD_REQUEST;
        let exceptionResponse = null;
        if (typeof exception === 'string') {
            message = exception;
        }
        else {
            if (util.isFunction(exception.getResponse)) {
                exceptionResponse = exception.getResponse();
                console.log(exceptionResponse);
                if (typeof exceptionResponse === 'object') {
                    message =
                        typeof exceptionResponse.message === 'string'
                            ? exceptionResponse.message
                            : exceptionResponse.message[0];
                    error = exceptionResponse.error;
                }
                else {
                    message = exceptionResponse;
                }
            }
            else if (exception.message) {
                message = exception.message;
            }
        }
        response.status(status).json({
            code: status,
            timestamp: new Date().toISOString(),
            path: response.req.url,
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
                for (const rule of rules) {
                    if (!actionList.includes(rule)) {
                        throw new common_1.ForbiddenException({
                            statusCode: '403',
                            message: '权限不足',
                        });
                    }
                }
                user.menuIds = menuIds;
                return true;
            }
            catch (error) {
                throw new common_1.ForbiddenException({
                    error: error.status,
                    message: error.message,
                });
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
    (0, typeorm_1.ManyToMany)(() => content_entity_1.Content, (content) => content.categorys),
    __metadata("design:type", Array)
], Category.prototype, "content", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)('category')
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
const utils_1 = __webpack_require__(/*! @app/libs/utils/utils */ "./libs/src/utils/utils.ts");
let Content = class Content {
    updateCounters() {
        if (this.ctime)
            this.ctime = (0, utils_1.parseTime)(this.ctime);
        if (this.utime)
            this.ctime = (0, utils_1.parseTime)(this.utime);
    }
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
    (0, typeorm_1.Column)({ type: 'longtext', comment: '内容', select: false }),
    __metadata("design:type", String)
], Content.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '浏览数量', default: 0 }),
    __metadata("design:type", Number)
], Content.prototype, "scan", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '推荐指数', default: 0 }),
    __metadata("design:type", Number)
], Content.prototype, "recom", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: '置顶', default: false }),
    __metadata("design:type", Boolean)
], Content.prototype, "top", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'draft', comment: '状态' }),
    __metadata("design:type", String)
], Content.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', comment: '创建时间' }),
    __metadata("design:type", String)
], Content.prototype, "ctime", void 0);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Content.prototype, "updateCounters", null);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'datetime', comment: '更新时间' }),
    __metadata("design:type", String)
], Content.prototype, "utime", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tag_entity_1.Tag, (tag) => tag.content),
    (0, typeorm_1.JoinTable)({ name: 'content_tag' }),
    __metadata("design:type", Array)
], Content.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_entity_1.Category, (category) => category.content),
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
    (0, typeorm_1.Column)({ length: 32, comment: '分组' }),
    __metadata("design:type", String)
], Tag.prototype, "group", void 0);
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
    (0, typeorm_1.ManyToMany)(() => content_entity_1.Content, (content) => content.tags),
    __metadata("design:type", Array)
], Tag.prototype, "content", void 0);
Tag = __decorate([
    (0, typeorm_1.Entity)('tag')
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
const gatewayDB = typeorm_1.TypeOrmModule.forRootAsync({
    useFactory: async () => ({
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
    }),
});
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
    }),
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
    (0, typeorm_1.Column)({ type: 'text', nullable: true, comment: '备注' }),
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

/***/ "./libs/src/utils/utils.ts":
/*!*********************************!*\
  !*** ./libs/src/utils/utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lazyLoadDB = exports.sleep = exports.parseTime = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const moment = __webpack_require__(/*! moment */ "moment");
const parseTime = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(time).format(format);
};
exports.parseTime = parseTime;
const sleep = (wait = 300) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, wait);
    });
};
exports.sleep = sleep;
const lazyLoadDB = (database = 'default', tableName, wait = 1000) => {
    return {
        provide: tableName + 'Repository',
        useFactory: async () => {
            try {
                await (0, exports.sleep)(wait);
                return await (0, typeorm_1.getRepository)(tableName, database);
            }
            catch (error) {
                console.log(error);
            }
        },
    };
};
exports.lazyLoadDB = lazyLoadDB;


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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-art-template":
/*!***************************************!*\
  !*** external "express-art-template" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("express-art-template");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "./node_modules/marked/lib/marked.cjs":
/*!********************************************!*\
  !*** ./node_modules/marked/lib/marked.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */



Object.defineProperty(exports, "__esModule", ({ value: true }));

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
exports.defaults = getDefaults();
function changeDefaults(newDefaults) {
  exports.defaults = newDefaults;
}

/**
 * Helpers
 */
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

var getEscapeReplacement = function getEscapeReplacement(ch) {
  return escapeReplacements[ch];
};

function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
/**
 * @param {string} html
 */

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, function (_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }

    return '';
  });
}
var caret = /(^|[^\[])\^/g;
/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */

function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  var obj = {
    replace: function replace(name, val) {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: function getRegex() {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    var prot;

    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
    } catch (e) {
      return null;
    }

    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }

  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }

  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }

  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
/**
 * @param {string} base
 * @param {string} href
 */

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }

  base = baseUrls[' ' + base];
  var relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }

    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }

    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}
var noopTest = {
  exec: function noopTest() {}
};
function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}
function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
    var escaped = false,
        curr = offset;

    while (--curr >= 0 && str[curr] === '\\') {
      escaped = !escaped;
    }

    if (escaped) {
      // odd number of slashes means | is escaped
      // so we leave it alone
      return '|';
    } else {
      // add space before unescaped |
      return ' |';
    }
  }),
      cells = row.split(/ \|/);
  var i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe

  if (!cells[0].trim()) {
    cells.shift();
  }

  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) {
      cells.push('');
    }
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }

  return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */

function rtrim(str, c, invert) {
  var l = str.length;

  if (l === 0) {
    return '';
  } // Length of suffix matching the invert condition.


  var suffLen = 0; // Step left until we fail to match the invert condition.

  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);

    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }

  var l = str.length;
  var level = 0,
      i = 0;

  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;

      if (level < 0) {
        return i;
      }
    }
  }

  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
} // copied from https://stackoverflow.com/a/5450113/806777

/**
 * @param {string} pattern
 * @param {number} count
 */

function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }

  var result = '';

  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }

    count >>= 1;
    pattern += pattern;
  }

  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  var href = link.href;
  var title = link.title ? escape(link.title) : null;
  var text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    var token = {
      type: 'link',
      raw: raw,
      href: href,
      title: title,
      text: text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  } else {
    return {
      type: 'image',
      raw: raw,
      href: href,
      title: title,
      text: escape(text)
    };
  }
}

function indentCodeCompensation(raw, text) {
  var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  var indentToCode = matchIndentToCode[1];
  return text.split('\n').map(function (node) {
    var matchIndentInNode = node.match(/^\s+/);

    if (matchIndentInNode === null) {
      return node;
    }

    var indentInNode = matchIndentInNode[0];

    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }

    return node;
  }).join('\n');
}
/**
 * Tokenizer
 */


var Tokenizer = /*#__PURE__*/function () {
  function Tokenizer(options) {
    this.options = options || exports.defaults;
  }

  var _proto = Tokenizer.prototype;

  _proto.space = function space(src) {
    var cap = this.rules.block.newline.exec(src);

    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  };

  _proto.code = function code(src) {
    var cap = this.rules.block.code.exec(src);

    if (cap) {
      var text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic ? rtrim(text, '\n') : text
      };
    }
  };

  _proto.fences = function fences(src) {
    var cap = this.rules.block.fences.exec(src);

    if (cap) {
      var raw = cap[0];
      var text = indentCodeCompensation(raw, cap[3] || '');
      return {
        type: 'code',
        raw: raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: text
      };
    }
  };

  _proto.heading = function heading(src) {
    var cap = this.rules.block.heading.exec(src);

    if (cap) {
      var text = cap[2].trim(); // remove trailing #s

      if (/#$/.test(text)) {
        var trimmed = rtrim(text, '#');

        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      var token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text: text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  };

  _proto.hr = function hr(src) {
    var cap = this.rules.block.hr.exec(src);

    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  };

  _proto.blockquote = function blockquote(src) {
    var cap = this.rules.block.blockquote.exec(src);

    if (cap) {
      var text = cap[0].replace(/^ *>[ \t]?/gm, '');
      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text: text
      };
    }
  };

  _proto.list = function list(src) {
    var cap = this.rules.block.list.exec(src);

    if (cap) {
      var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      var bull = cap[1].trim();
      var isordered = bull.length > 1;
      var list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };
      bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      } // Get next list item


      var itemRegex = new RegExp("^( {0,3}" + bull + ")((?:[\t ][^\\n]*)?(?:\\n|$))"); // Check if current bullet point can start a new List Item

      while (src) {
        endEarly = false;

        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) {
          // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char

          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent

          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) {
          // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])"); // Check if following lines should be included in List Item

          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine; // Re-align to follow commonmark nesting rules

            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            } // End list item if found start of new bullet


            if (nextBulletRegex.test(line)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) {
              // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else {
              // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) {
              // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        } // Check for task list items


        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);

          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw: raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic


      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      var l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first

      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        var spacers = list.items[i].tokens.filter(function (t) {
          return t.type === 'space';
        });
        var hasMultipleLineBreaks = spacers.every(function (t) {
          var chars = t.raw.split('');
          var lineBreaks = 0;

          for (var _iterator = _createForOfIteratorHelperLoose(chars), _step; !(_step = _iterator()).done;) {
            var _char = _step.value;

            if (_char === '\n') {
              lineBreaks += 1;
            }

            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  };

  _proto.html = function html(src) {
    var cap = this.rules.block.html.exec(src);

    if (cap) {
      var token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };

      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }

      return token;
    }
  };

  _proto.def = function def(src) {
    var cap = this.rules.block.def.exec(src);

    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag: tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  };

  _proto.table = function table(src) {
    var cap = this.rules.block.table.exec(src);

    if (cap) {
      var item = {
        type: 'table',
        header: splitCells(cap[1]).map(function (c) {
          return {
            text: c
          };
        }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        var l = item.align.length;
        var i, j, k, row;

        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;

        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(function (c) {
            return {
              text: c
            };
          });
        } // parse child tokens inside headers and cells
        // header child tokens


        l = item.header.length;

        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        } // cell child tokens


        l = item.rows.length;

        for (j = 0; j < l; j++) {
          row = item.rows[j];

          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }

        return item;
      }
    }
  };

  _proto.lheading = function lheading(src) {
    var cap = this.rules.block.lheading.exec(src);

    if (cap) {
      var token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  };

  _proto.paragraph = function paragraph(src) {
    var cap = this.rules.block.paragraph.exec(src);

    if (cap) {
      var token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  };

  _proto.text = function text(src) {
    var cap = this.rules.block.text.exec(src);

    if (cap) {
      var token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  };

  _proto.escape = function escape$1(src) {
    var cap = this.rules.inline.escape.exec(src);

    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  };

  _proto.tag = function tag(src) {
    var cap = this.rules.inline.tag.exec(src);

    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }

      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize ? 'text' : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  };

  _proto.link = function link(src) {
    var cap = this.rules.inline.link.exec(src);

    if (cap) {
      var trimmedUrl = cap[2].trim();

      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!/>$/.test(trimmedUrl)) {
          return;
        } // ending angle bracket cannot be escaped


        var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        var lastParenIndex = findClosingBracket(cap[2], '()');

        if (lastParenIndex > -1) {
          var start = cap[0].indexOf('!') === 0 ? 5 : 4;
          var linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }

      var href = cap[2];
      var title = '';

      if (this.options.pedantic) {
        // split pedantic href and title
        var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();

      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }

      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  };

  _proto.reflink = function reflink(src, links) {
    var cap;

    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];

      if (!link || !link.href) {
        var text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text: text
        };
      }

      return outputLink(cap, link, cap[0], this.lexer);
    }
  };

  _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
    if (prevChar === void 0) {
      prevChar = '';
    }

    var match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

    if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
    var nextChar = match[1] || match[2] || '';

    if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
      var lLength = match[0].length - 1;
      var rDelim,
          rLength,
          delimTotal = lLength,
          midDelimTotal = 0;
      var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) {
          // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;
        if (delimTotal > 0) continue; // Haven't found enough closing delimiters
        // Remove extra characters. *a*** -> *a*

        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

        if (Math.min(lLength, rLength) % 2) {
          var _text = src.slice(1, lLength + match.index + rLength);

          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: _text,
            tokens: this.lexer.inlineTokens(_text, [])
          };
        } // Create 'strong' if smallest delimiter has even char count. **a***


        var text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text: text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  };

  _proto.codespan = function codespan(src) {
    var cap = this.rules.inline.code.exec(src);

    if (cap) {
      var text = cap[2].replace(/\n/g, ' ');
      var hasNonSpaceChars = /[^ ]/.test(text);
      var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }

      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text: text
      };
    }
  };

  _proto.br = function br(src) {
    var cap = this.rules.inline.br.exec(src);

    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  };

  _proto.del = function del(src) {
    var cap = this.rules.inline.del.exec(src);

    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  };

  _proto.autolink = function autolink(src, mangle) {
    var cap = this.rules.inline.autolink.exec(src);

    if (cap) {
      var text, href;

      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text: text,
        href: href,
        tokens: [{
          type: 'text',
          raw: text,
          text: text
        }]
      };
    }
  };

  _proto.url = function url(src, mangle) {
    var cap;

    if (cap = this.rules.inline.url.exec(src)) {
      var text, href;

      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        var prevCapZero;

        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);

        text = escape(cap[0]);

        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }

      return {
        type: 'link',
        raw: cap[0],
        text: text,
        href: href,
        tokens: [{
          type: 'text',
          raw: text,
          text: text
        }]
      };
    }
  };

  _proto.inlineText = function inlineText(src, smartypants) {
    var cap = this.rules.inline.text.exec(src);

    if (cap) {
      var text;

      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }

      return {
        type: 'text',
        raw: cap[0],
        text: text
      };
    }
  };

  return Tokenizer;
}();

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
  + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
  + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
  + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
  + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
  + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

});
block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('table', block.gfm.table) // interrupt paragraphs with table
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});
/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
}; // list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _

inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});

/**
 * smartypants text replacement
 * @param {string} text
 */

function smartypants(text) {
  return text // em-dashes
  .replace(/---/g, "\u2014") // en-dashes
  .replace(/--/g, "\u2013") // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
  .replace(/'/g, "\u2019") // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
  .replace(/"/g, "\u201D") // ellipses
  .replace(/\.{3}/g, "\u2026");
}
/**
 * mangle email addresses
 * @param {string} text
 */


function mangle(text) {
  var out = '',
      i,
      ch;
  var l = text.length;

  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
}
/**
 * Block Lexer
 */


var Lexer = /*#__PURE__*/function () {
  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || exports.defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    var rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;

      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }

    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */


  /**
   * Static Lex Method
   */
  Lexer.lex = function lex(src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  ;

  Lexer.lexInline = function lexInline(src, options) {
    var lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  ;

  var _proto = Lexer.prototype;

  _proto.lex = function lex(src) {
    src = src.replace(/\r\n|\r/g, '\n');
    this.blockTokens(src, this.tokens);
    var next;

    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }
  /**
   * Lexing
   */
  ;

  _proto.blockTokens = function blockTokens(src, tokens) {
    var _this = this;

    if (tokens === void 0) {
      tokens = [];
    }

    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, function (_, leading, tabs) {
        return leading + '    '.repeat(tabs.length);
      });
    }

    var token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (extTokenizer) {
        if (token = extTokenizer.call({
          lexer: _this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }

        return false;
      })) {
        continue;
      } // newline


      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);

        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }

        continue;
      } // code


      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // fences


      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // heading


      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // hr


      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // blockquote


      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // list


      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // html


      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // def


      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }

        continue;
      } // table (gfm)


      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // lheading


      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start


      cutSrc = src;

      if (this.options.extensions && this.options.extensions.startBlock) {
        (function () {
          var startIndex = Infinity;
          var tempSrc = src.slice(1);
          var tempStart = void 0;

          _this.options.extensions.startBlock.forEach(function (getStartIndex) {
            tempStart = getStartIndex.call({
              lexer: this
            }, tempSrc);

            if (typeof tempStart === 'number' && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });

          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        })();
      }

      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];

        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      } // text


      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }

        continue;
      }

      if (src) {
        var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  };

  _proto.inline = function inline(src, tokens) {
    this.inlineQueue.push({
      src: src,
      tokens: tokens
    });
  }
  /**
   * Lexing/Compiling
   */
  ;

  _proto.inlineTokens = function inlineTokens(src, tokens) {
    var _this2 = this;

    if (tokens === void 0) {
      tokens = [];
    }

    var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong

    var maskedSrc = src;
    var match;
    var keepPrevChar, prevChar; // Mask out reflinks

    if (this.tokens.links) {
      var links = Object.keys(this.tokens.links);

      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    } // Mask out other blocks


    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    } // Mask out escaped em & strong delimiters


    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }

      keepPrevChar = false; // extensions

      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (extTokenizer) {
        if (token = extTokenizer.call({
          lexer: _this2
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }

        return false;
      })) {
        continue;
      } // escape


      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // tag


      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // link


      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // reflink, nolink


      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];

        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      } // em & strong


      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // code


      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // br


      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // del (gfm)


      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // autolink


      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // url (gfm)


      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      } // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start


      cutSrc = src;

      if (this.options.extensions && this.options.extensions.startInline) {
        (function () {
          var startIndex = Infinity;
          var tempSrc = src.slice(1);
          var tempStart = void 0;

          _this2.options.extensions.startInline.forEach(function (getStartIndex) {
            tempStart = getStartIndex.call({
              lexer: this
            }, tempSrc);

            if (typeof tempStart === 'number' && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });

          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        })();
      }

      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);

        if (token.raw.slice(-1) !== '_') {
          // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }

        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }

        continue;
      }

      if (src) {
        var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  };

  _createClass(Lexer, null, [{
    key: "rules",
    get: function get() {
      return {
        block: block,
        inline: inline
      };
    }
  }]);

  return Lexer;
}();

/**
 * Renderer
 */

var Renderer = /*#__PURE__*/function () {
  function Renderer(options) {
    this.options = options || exports.defaults;
  }

  var _proto = Renderer.prototype;

  _proto.code = function code(_code, infostring, escaped) {
    var lang = (infostring || '').match(/\S*/)[0];

    if (this.options.highlight) {
      var out = this.options.highlight(_code, lang);

      if (out != null && out !== _code) {
        escaped = true;
        _code = out;
      }
    }

    _code = _code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
  }
  /**
   * @param {string} quote
   */
  ;

  _proto.blockquote = function blockquote(quote) {
    return "<blockquote>\n" + quote + "</blockquote>\n";
  };

  _proto.html = function html(_html) {
    return _html;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  ;

  _proto.heading = function heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      var id = this.options.headerPrefix + slugger.slug(raw);
      return "<h" + level + " id=\"" + id + "\">" + text + "</h" + level + ">\n";
    } // ignore IDs


    return "<h" + level + ">" + text + "</h" + level + ">\n";
  };

  _proto.hr = function hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  _proto.list = function list(body, ordered, start) {
    var type = ordered ? 'ol' : 'ul',
        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }
  /**
   * @param {string} text
   */
  ;

  _proto.listitem = function listitem(text) {
    return "<li>" + text + "</li>\n";
  };

  _proto.checkbox = function checkbox(checked) {
    return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
  }
  /**
   * @param {string} text
   */
  ;

  _proto.paragraph = function paragraph(text) {
    return "<p>" + text + "</p>\n";
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  ;

  _proto.table = function table(header, body) {
    if (body) body = "<tbody>" + body + "</tbody>";
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
  }
  /**
   * @param {string} content
   */
  ;

  _proto.tablerow = function tablerow(content) {
    return "<tr>\n" + content + "</tr>\n";
  };

  _proto.tablecell = function tablecell(content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align ? "<" + type + " align=\"" + flags.align + "\">" : "<" + type + ">";
    return tag + content + ("</" + type + ">\n");
  }
  /**
   * span level renderer
   * @param {string} text
   */
  ;

  _proto.strong = function strong(text) {
    return "<strong>" + text + "</strong>";
  }
  /**
   * @param {string} text
   */
  ;

  _proto.em = function em(text) {
    return "<em>" + text + "</em>";
  }
  /**
   * @param {string} text
   */
  ;

  _proto.codespan = function codespan(text) {
    return "<code>" + text + "</code>";
  };

  _proto.br = function br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }
  /**
   * @param {string} text
   */
  ;

  _proto.del = function del(text) {
    return "<del>" + text + "</del>";
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  ;

  _proto.link = function link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    var out = '<a href="' + escape(href) + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += '>' + text + '</a>';
    return out;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  ;

  _proto.image = function image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    var out = "<img src=\"" + href + "\" alt=\"" + text + "\"";

    if (title) {
      out += " title=\"" + title + "\"";
    }

    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  _proto.text = function text(_text) {
    return _text;
  };

  return Renderer;
}();

/**
 * TextRenderer
 * returns only the textual part of the token
 */
var TextRenderer = /*#__PURE__*/function () {
  function TextRenderer() {}

  var _proto = TextRenderer.prototype;

  // no need for block level renderers
  _proto.strong = function strong(text) {
    return text;
  };

  _proto.em = function em(text) {
    return text;
  };

  _proto.codespan = function codespan(text) {
    return text;
  };

  _proto.del = function del(text) {
    return text;
  };

  _proto.html = function html(text) {
    return text;
  };

  _proto.text = function text(_text) {
    return _text;
  };

  _proto.link = function link(href, title, text) {
    return '' + text;
  };

  _proto.image = function image(href, title, text) {
    return '' + text;
  };

  _proto.br = function br() {
    return '';
  };

  return TextRenderer;
}();

/**
 * Slugger generates header id
 */
var Slugger = /*#__PURE__*/function () {
  function Slugger() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */


  var _proto = Slugger.prototype;

  _proto.serialize = function serialize(value) {
    return value.toLowerCase().trim() // remove html tags
    .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  ;

  _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
    var slug = originalSlug;
    var occurenceAccumulator = 0;

    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];

      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }

    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }

    return slug;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  ;

  _proto.slug = function slug(value, options) {
    if (options === void 0) {
      options = {};
    }

    var slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  };

  return Slugger;
}();

/**
 * Parsing & Compiling
 */

var Parser = /*#__PURE__*/function () {
  function Parser(options) {
    this.options = options || exports.defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */


  Parser.parse = function parse(tokens, options) {
    var parser = new Parser(options);
    return parser.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  ;

  Parser.parseInline = function parseInline(tokens, options) {
    var parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  ;

  var _proto = Parser.prototype;

  _proto.parse = function parse(tokens, top) {
    if (top === void 0) {
      top = true;
    }

    var out = '',
        i,
        j,
        k,
        l2,
        l3,
        row,
        cell,
        header,
        body,
        token,
        ordered,
        start,
        loose,
        itemBody,
        item,
        checked,
        task,
        checkbox,
        ret;
    var l = tokens.length;

    for (i = 0; i < l; i++) {
      token = tokens[i]; // Run any renderer extensions

      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);

        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space':
          {
            continue;
          }

        case 'hr':
          {
            out += this.renderer.hr();
            continue;
          }

        case 'heading':
          {
            out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
            continue;
          }

        case 'code':
          {
            out += this.renderer.code(token.text, token.lang, token.escaped);
            continue;
          }

        case 'table':
          {
            header = ''; // header

            cell = '';
            l2 = token.header.length;

            for (j = 0; j < l2; j++) {
              cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                header: true,
                align: token.align[j]
              });
            }

            header += this.renderer.tablerow(cell);
            body = '';
            l2 = token.rows.length;

            for (j = 0; j < l2; j++) {
              row = token.rows[j];
              cell = '';
              l3 = row.length;

              for (k = 0; k < l3; k++) {
                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                  header: false,
                  align: token.align[k]
                });
              }

              body += this.renderer.tablerow(cell);
            }

            out += this.renderer.table(header, body);
            continue;
          }

        case 'blockquote':
          {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }

        case 'list':
          {
            ordered = token.ordered;
            start = token.start;
            loose = token.loose;
            l2 = token.items.length;
            body = '';

            for (j = 0; j < l2; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = '';

              if (item.task) {
                checkbox = this.renderer.checkbox(checked);

                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                      item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: 'text',
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }

              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }

            out += this.renderer.list(body, ordered, start);
            continue;
          }

        case 'html':
          {
            // TODO parse inline content if parameter markdown=1
            out += this.renderer.html(token.text);
            continue;
          }

        case 'paragraph':
          {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }

        case 'text':
          {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;

            while (i + 1 < l && tokens[i + 1].type === 'text') {
              token = tokens[++i];
              body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }

            out += top ? this.renderer.paragraph(body) : body;
            continue;
          }

        default:
          {
            var errMsg = 'Token with "' + token.type + '" type was not found.';

            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }

    return out;
  }
  /**
   * Parse Inline Tokens
   */
  ;

  _proto.parseInline = function parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    var out = '',
        i,
        token,
        ret;
    var l = tokens.length;

    for (i = 0; i < l; i++) {
      token = tokens[i]; // Run any renderer extensions

      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);

        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape':
          {
            out += renderer.text(token.text);
            break;
          }

        case 'html':
          {
            out += renderer.html(token.text);
            break;
          }

        case 'link':
          {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }

        case 'image':
          {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }

        case 'strong':
          {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'em':
          {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'codespan':
          {
            out += renderer.codespan(token.text);
            break;
          }

        case 'br':
          {
            out += renderer.br();
            break;
          }

        case 'del':
          {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }

        case 'text':
          {
            out += renderer.text(token.text);
            break;
          }

        default:
          {
            var errMsg = 'Token with "' + token.type + '" type was not found.';

            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }

    return out;
  };

  return Parser;
}();

/**
 * Marked
 */

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    var highlight = opt.highlight;
    var tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    var done = function done(err) {
      var out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }

          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;
    if (!tokens.length) return done();
    var pending = 0;
    marked.walkTokens(tokens, function (token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(function () {
          highlight(token.text, token.lang, function (err, code) {
            if (err) {
              return done(err);
            }

            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;

            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    var _tokens = Lexer.lex(src, opt);

    if (opt.walkTokens) {
      marked.walkTokens(_tokens, opt.walkTokens);
    }

    return Parser.parse(_tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
}
/**
 * Options
 */

marked.options = marked.setOptions = function (opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;
marked.defaults = exports.defaults;
/**
 * Use Extension
 */

marked.use = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var opts = merge.apply(void 0, [{}].concat(args));
  var extensions = marked.defaults.extensions || {
    renderers: {},
    childTokens: {}
  };
  var hasExtensions;
  args.forEach(function (pack) {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach(function (ext) {
        if (!ext.name) {
          throw new Error('extension name required');
        }

        if (ext.renderer) {
          // Renderer extensions
          var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;

          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var ret = ext.renderer.apply(this, args);

              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }

              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }

        if (ext.tokenizer) {
          // Tokenizer Extensions
          if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
            throw new Error("extension level must be 'block' or 'inline'");
          }

          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }

          if (ext.start) {
            // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }

        if (ext.childTokens) {
          // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    } // ==-- Parse "overwrite" extensions --== //


    if (pack.renderer) {
      (function () {
        var renderer = marked.defaults.renderer || new Renderer();

        var _loop = function _loop(prop) {
          var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false

          renderer[prop] = function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            var ret = pack.renderer[prop].apply(renderer, args);

            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }

            return ret;
          };
        };

        for (var prop in pack.renderer) {
          _loop(prop);
        }

        opts.renderer = renderer;
      })();
    }

    if (pack.tokenizer) {
      (function () {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer();

        var _loop2 = function _loop2(prop) {
          var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false

          tokenizer[prop] = function () {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            var ret = pack.tokenizer[prop].apply(tokenizer, args);

            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }

            return ret;
          };
        };

        for (var prop in pack.tokenizer) {
          _loop2(prop);
        }

        opts.tokenizer = tokenizer;
      })();
    } // ==-- Parse WalkTokens extensions --== //


    if (pack.walkTokens) {
      var _walkTokens = marked.defaults.walkTokens;

      opts.walkTokens = function (token) {
        pack.walkTokens.call(this, token);

        if (_walkTokens) {
          _walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};
/**
 * Run callback for every token
 */


marked.walkTokens = function (tokens, callback) {
  var _loop3 = function _loop3() {
    var token = _step.value;
    callback.call(marked, token);

    switch (token.type) {
      case 'table':
        {
          for (var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;) {
            var cell = _step2.value;
            marked.walkTokens(cell.tokens, callback);
          }

          for (var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;) {
            var row = _step3.value;

            for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
              var _cell = _step4.value;
              marked.walkTokens(_cell.tokens, callback);
            }
          }

          break;
        }

      case 'list':
        {
          marked.walkTokens(token.items, callback);
          break;
        }

      default:
        {
          if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
            // Walk any extensions
            marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
              marked.walkTokens(token[childTokens], callback);
            });
          } else if (token.tokens) {
            marked.walkTokens(token.tokens, callback);
          }
        }
    }
  };

  for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
    _loop3();
  }
};
/**
 * Parse Inline
 * @param {string} src
 */


marked.parseInline = function (src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    var tokens = Lexer.lexInline(src, opt);

    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }

    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
};
/**
 * Expose
 */


marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parse = marked;
var parser = Parser.parse;
var lexer = Lexer.lex;

exports.Lexer = Lexer;
exports.Parser = Parser;
exports.Renderer = Renderer;
exports.Slugger = Slugger;
exports.TextRenderer = TextRenderer;
exports.Tokenizer = Tokenizer;
exports.getDefaults = getDefaults;
exports.lexer = lexer;
exports.marked = marked;
exports.options = options;
exports.parse = parse;
exports.parseInline = parseInline;
exports.parser = parser;
exports.setOptions = setOptions;
exports.use = use;
exports.walkTokens = walkTokens;


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
const path_1 = __webpack_require__(/*! path */ "path");
const expressArtTemplate = __webpack_require__(/*! express-art-template */ "express-art-template");
const whitelist_1 = __webpack_require__(/*! ./ssr/whitelist */ "./apps/gateways/src/ssr/whitelist.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(gateways_module_1.GatewaysModule, {
        logger: ['error', 'warn'],
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '../../../', 'public'), {
        prefix: '/static/',
    });
    app.setBaseViewsDir((0, path_1.join)(__dirname, '../../../', 'views'));
    app.setViewEngine('html');
    app.engine('html', expressArtTemplate);
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: { retryAttempts: 5, retryDelay: 3000 },
    });
    await app.startAllMicroservices();
    app.useGlobalPipes(new common_1.ValidationPipe({
        disableErrorMessages: false,
        transform: true,
        skipMissingProperties: true,
        stopAtFirstError: true,
    }));
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptors());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.setGlobalPrefix('api/v1', { exclude: whitelist_1.WhiteList });
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