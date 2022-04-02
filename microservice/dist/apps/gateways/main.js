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
const ipInterface = libQqwry.init();
ipInterface.speed();
let LogService = class LogService {
    constructor(loginLogModel) {
        this.loginLogModel = loginLogModel;
    }
    async loginLogCreate(body) {
        let city;
        try {
            const ip = body.ip.includes('ffff') ? body.ip.slice(7) : body.ip;
            const { Country } = ipInterface.searchIP(ip);
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
        timezone: 'Z',
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
        timezone: 'Z',
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
    app.connectMicroservice({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvYmxvZy9jYXRlZ29yeS9jYXRlZ29yeS5jb250cm9sbGVyLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL2Jsb2cvY2F0ZWdvcnkvY2F0ZWdvcnkubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL2Jsb2cvY2F0ZWdvcnkvZHRvL0NhdGVnb3J5Q3JlYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL2NhdGVnb3J5L2R0by9DYXRlZ29yeVVwZGF0ZS5kdG8udHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvYmxvZy9jb250ZW50L2NvbnRlbnQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL2NvbnRlbnQvY29udGVudC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvYmxvZy9jb250ZW50L2R0by9Db250ZW50Q3JlYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL2NvbnRlbnQvZHRvL0NvbnRlbnRQYWdlcy5kdG8udHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvYmxvZy9jb250ZW50L2R0by9Db250ZW50VXBkYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL3RhZy9kdG8vVGFnQ3JlYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL3RhZy9kdG8vVGFnVXBkYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL3RhZy90YWcuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9ibG9nL3RhZy90YWcubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL2dhdGV3YXlzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9sb2cvZHRvL0xvZ2luTG9nUGFnZXMuZHRvLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL2xvZy9sb2cuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9sb2cvbG9nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9sb2cvbG9nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2F1dGgvYXV0aC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9hdXRoL2F1dGgubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vYXV0aC9kdG8vTWFuYWdlTG9jYWxMb2dpbi5kdG8udHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2F1dGgvc3RyYXRlZ3kvbWFuYWdlTG9jYWwuc3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2NvbmZpZy9jb25maWcuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vY29uZmlnL2NvbmZpZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2NvbmZpZy9jb25maWcub3B0aW9uLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL2NvbmZpZy9jb25maWcuc2V0dGluZy50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vbWFuYWdlL2R0by9NYW5hZ2VDcmVhdGUuZHRvLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9tYW5hZ2UvZHRvL01hbmFnZVBhZ2VzLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vbWFuYWdlL2R0by9NYW5hZ2VVcGRhdGUuZHRvLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9tYW5hZ2UvbWFuYWdlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL21hbmFnZS9tYW5hZ2UubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9tYW5hZ2UvbWFuYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL21lbnUvZHRvL01lbnVDcmVhdGUuZHRvLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9tZW51L2R0by9NZW51VXBkYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vbWVudS9tZW51LmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL21lbnUvbWVudS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL21lbnUvbWVudS5zZXJ2aWNlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9yb2xlL2R0by9Sb2xlQ3JlYXRlLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vcm9sZS9kdG8vUm9sZVBhZ2VzLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vcm9sZS9kdG8vUm9sZVJ1bGVzLmR0by50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vcm9sZS9kdG8vUm9sZVVwZGF0ZS5kdG8udHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9nYXRld2F5cy9zcmMvc3lzdGVtL3JvbGUvcm9sZS5jb250cm9sbGVyLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9yb2xlL3JvbGUubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9yb2xlL3JvbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy91c2VyL3VzZXIuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2dhdGV3YXlzL3NyYy91c2VyL3VzZXIubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9jb21tb24ubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9kZWNvcmF0b3IvYWN0aW9uLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9kZWNvcmF0b3IvaXAuZGVjb3JhdG9yLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9kdG8vcGFnaW5hdGlvbi5kdG8udHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvY29tbW9uL2ZpbHRlcnMvaHR0cC1leGNlcHRpb24uZmlsdGVyLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9ndWFyZHMvYWN0aW9uLmd1YXJkLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2NvbW1vbi9ndWFyZHMvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9jb21tb24vaW50ZXJjZXB0b3IvcmVzcG9uc2UuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvY21zL2NhdGVnb3J5LmVudGl0eS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9kYi9jbXMvY29udGVudC5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvY21zL3RhZy5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvZGIubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2VudGl0eS9sb2dpbkxvZy5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvZW50aXR5L21hbmFnZS5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvZW50aXR5L21lbnUuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2VudGl0eS9yb2xlLmVudGl0eS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9kYi9lbnRpdHkvcm9sZU1lbnUuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2VudGl0eS9zZXR0aW5nLmVudGl0eS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9saWJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9saWJzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvdXRpbHMvY3Jvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb25maWdcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2p3dFwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvcGFzc3BvcnRcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3NjaGVkdWxlXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9zd2FnZ2VyXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy90eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJpcFwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcImxpYi1xcXdyeS15eXlqXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwicnhqcy9vcGVyYXRvcnNcIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwidWEtcGFyc2VyLWpzXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvZ2F0ZXdheXMvc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRyb2xsZXIsXG4gIERlbGV0ZSxcbiAgR2V0LFxuICBJbmplY3QsXG4gIFBhcmFtLFxuICBQYXJzZUFycmF5UGlwZSxcbiAgUG9zdCxcbiAgUHV0LFxuICBRdWVyeSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ2xpZW50UHJveHkgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgQXBpT3BlcmF0aW9uLCBBcGlUYWdzIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhdGVnb3J5Q3JlYXRlRHRvIH0gZnJvbSAnLi9kdG8vQ2F0ZWdvcnlDcmVhdGUuZHRvJztcbmltcG9ydCB7IENhdGVnb3J5TGlzdER0byB9IGZyb20gJy4vZHRvL0NhdGVnb3J5TGlzdC5kdG8nO1xuaW1wb3J0IHsgQ2F0ZWdvcnlVcGRhdGVEdG8gfSBmcm9tICcuL2R0by9DYXRlZ29yeVVwZGF0ZS5kdG8nO1xuXG5AQ29udHJvbGxlcignYmxvZy9jYXRlZ29yeScpXG5AQXBpVGFncygn5YiG57G7JylcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdCTE9HX1NFUlZJQ0UnKSBwcml2YXRlIHJlYWRvbmx5IGNsaWVudDogQ2xpZW50UHJveHkpIHt9XG5cbiAgQEdldCgnL2xpc3QnKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+afpeivouWIhuexu+WIl+ihqCcgfSlcbiAgQEF1dGgoWyd0YWc6dmlldyddKVxuICBsaXN0KFxuICAgIEBRdWVyeShcbiAgICAgICdhdHRycycsXG4gICAgICBuZXcgUGFyc2VBcnJheVBpcGUoe1xuICAgICAgICBpdGVtczogU3RyaW5nLFxuICAgICAgICBzZXBhcmF0b3I6ICcsJyxcbiAgICAgIH0pLFxuICAgIClcbiAgICBhdHRyczogc3RyaW5nLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSB7IGNhdGVnb3J5OiAnbGlzdCcgfTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZChwYXR0ZXJuLCB7IGF0dHJzIH0pO1xuICB9XG5cbiAgQFBvc3QoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIm+W7uuWIhuexuycgfSlcbiAgQEF1dGgoWyd0YWc6Y3JlYXRlJ10pXG4gIGNyZWF0ZShAQm9keSgpIGJvZHk6IENhdGVnb3J5Q3JlYXRlRHRvKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0geyBjYXRlZ29yeTogJ2NyZWF0ZScgfTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZChwYXR0ZXJuLCBib2R5KTtcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn57yW6L6R5YiG57G7JyB9KVxuICBAQXV0aChbJ3RhZzp1cGRhdGUnXSlcbiAgdXBkYXRlKFxuICAgIEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgYm9keTogQ2F0ZWdvcnlVcGRhdGVEdG8sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IHsgY2F0ZWdvcnk6ICd1cGRhdGUnIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgeyBpZCwgLi4uYm9keSB9KTtcbiAgfVxuXG4gIEBEZWxldGUoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIoOmZpOWIhuexuycgfSlcbiAgQEF1dGgoWyd0YWc6ZGVsZXRlJ10pXG4gIGRlbGV0ZShAQm9keSgnaWRzJykgaWRzOiBBcnJheTxudW1iZXI+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0geyBjYXRlZ29yeTogJ2RlbGV0ZScgfTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZChwYXR0ZXJuLCB7IGlkcyB9KTtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5YiG57G76K+m5oOFJyB9KVxuICBAQXV0aChbJ3RhZzp2aWV3J10pXG4gIGRldGFpbChAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IHsgY2F0ZWdvcnk6ICdkZXRhaWwnIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgeyBpZCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IENsaWVudFByb3h5RmFjdG9yeSwgVHJhbnNwb3J0IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuLi8uLi9zeXN0ZW0vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbnRyb2xsZXIgfSBmcm9tICcuL2NhdGVnb3J5LmNvbnRyb2xsZXInO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW0F1dGhNb2R1bGVdLFxuICBjb250cm9sbGVyczogW0NhdGVnb3J5Q29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6ICdCTE9HX1NFUlZJQ0UnLFxuICAgICAgdXNlRmFjdG9yeTogKGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpID0+IHtcbiAgICAgICAgY29uc3QgcG9ydCA9IGNvbmZpZ1NlcnZpY2UuZ2V0KCdCTE9HX1BPUlQnKTtcbiAgICAgICAgcmV0dXJuIENsaWVudFByb3h5RmFjdG9yeS5jcmVhdGUoe1xuICAgICAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlRDUCxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIHBvcnQ6IHBvcnQgfHwgODAwMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtDb25maWdTZXJ2aWNlXSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQXBpUHJvcGVydHkgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUNyZWF0ZUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAn5rWL6K+V5YiG57G7JywgZGVzY3JpcHRpb246ICflkI3np7AnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+WIhuexu+WQjeensOW/heWhqycgfSlcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAn5rWL6K+V5YiG57uEJywgZGVzY3JpcHRpb246ICfliIbnu4QnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+WIhuexu+WIhue7hOW/heWhqycgfSlcbiAgcmVhZG9ubHkgZ3JvdXA6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6IDk5LCBkZXNjcmlwdGlvbjogJ+aOkuW6jycgfSlcbiAgcmVhZG9ubHkgc29ydD86IG51bWJlcjtcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OlxuICAgICAgJ2h0dHA6Ly9xYXBwLWxtLm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb20vdXBsb2FkL2x3eWQvY292ZXIvMTYzNDEzODc2ODk1NF8xZmh0NDVoaHIuanBnJyxcbiAgICBkZXNjcmlwdGlvbjogJ+WwgemdouWbvicsXG4gIH0pXG4gIHJlYWRvbmx5IHNpbWc/OiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogJ+aIkeaYr+aPj+i/sOeahOWGheWuuScsXG4gICAgZGVzY3JpcHRpb246ICfmj4/ov7AnLFxuICB9KVxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCwgZGVzY3JpcHRpb246ICfniLbnuqfliIbnsbtJRCcgfSlcbiAgcmVhZG9ubHkgcGlkOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5VXBkYXRlRHRvIHtcbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6ICfmtYvor5XliIbnsbsnLCBkZXNjcmlwdGlvbjogJ+WQjeensCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5YiG57G75ZCN56ew5b+F5aGrJyB9KVxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6ICfmtYvor5XliIbnu4QnLCBkZXNjcmlwdGlvbjogJ+WIhue7hCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5YiG57G75YiG57uE5b+F5aGrJyB9KVxuICByZWFkb25seSBncm91cDogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogOTksIGRlc2NyaXB0aW9uOiAn5o6S5bqPJyB9KVxuICByZWFkb25seSBzb3J0OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDpcbiAgICAgICdodHRwOi8vcWFwcC1sbS5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL3VwbG9hZC9sd3lkL2NvdmVyLzE2MzQxMzg3Njg5NTRfMWZodDQ1aGhyLmpwZycsXG4gICAgZGVzY3JpcHRpb246ICflsIHpnaLlm74nLFxuICB9KVxuICByZWFkb25seSBzaW1nPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICfmiJHmmK/mj4/ov7DnmoTlhoXlrrknLFxuICAgIGRlc2NyaXB0aW9uOiAn5o+P6L+wJyxcbiAgfSlcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAsIGRlc2NyaXB0aW9uOiAn54i257qn5YiG57G7SUQnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+eItue6p+WIhuexu+W/heWhqycgfSlcbiAgcmVhZG9ubHkgcGlkOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBBdXRoIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9kZWNvcmF0b3IvYXV0aC5kZWNvcmF0b3InO1xuaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIEluamVjdCxcbiAgUGFyYW0sXG4gIFBvc3QsXG4gIFB1dCxcbiAgUXVlcnksXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudFByb3h5IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IEFwaU9wZXJhdGlvbiwgQXBpVGFncyB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb250ZW50Q3JlYXRlRHRvIH0gZnJvbSAnLi9kdG8vQ29udGVudENyZWF0ZS5kdG8nO1xuaW1wb3J0IHsgQ29udGVudFBhZ2VzRHRvIH0gZnJvbSAnLi9kdG8vQ29udGVudFBhZ2VzLmR0byc7XG5pbXBvcnQgeyBDb250ZW50VXBkYXRlRHRvIH0gZnJvbSAnLi9kdG8vQ29udGVudFVwZGF0ZS5kdG8nO1xuQENvbnRyb2xsZXIoJ2Jsb2cvY29udGVudCcpXG5AQXBpVGFncygn5YaF5a65JylcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0JMT0dfU0VSVklDRScpIHByaXZhdGUgcmVhZG9ubHkgY2xpZW50OiBDbGllbnRQcm94eSkge31cblxuICBAR2V0KClcbiAgQEF1dGgoWydjb250ZW50OnZpZXcnXSlcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICflhoXlrrnliIbpobXmn6Xor6InIH0pXG4gIGNvbnRlbnRQYWdlcyhAUXVlcnkoKSBxdWVyeTogQ29udGVudFBhZ2VzRHRvKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0geyBjb250ZW50OiAncGFnZXMnIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgcXVlcnkpO1xuICB9XG5cbiAgQFBvc3QoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIm+W7uuWGheWuuScgfSlcbiAgQEF1dGgoWydjb250ZW50OmNyZWF0ZSddKVxuICBjcmVhdGUoQEJvZHkoKSBib2R5OiBDb250ZW50Q3JlYXRlRHRvKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0geyBjb250ZW50OiAnY3JlYXRlJyB9O1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKHBhdHRlcm4sIGJvZHkpO1xuICB9XG5cbiAgQFB1dCgnOmlkJylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfnvJbovpHlhoXlrrknIH0pXG4gIEBBdXRoKFsnY29udGVudDp1cGRhdGUnXSlcbiAgdXBkYXRlKFxuICAgIEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgYm9keTogQ29udGVudFVwZGF0ZUR0byxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0geyBjb250ZW50OiAndXBkYXRlJyB9O1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKHBhdHRlcm4sIHsgaWQsIC4uLmJvZHkgfSk7XG4gIH1cblxuICBARGVsZXRlKClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliKDpmaTlhoXlrrknIH0pXG4gIEBBdXRoKFsnY29udGVudDpkZWxldGUnXSlcbiAgZGVsZXRlKEBCb2R5KCdpZHMnKSBpZHM6IEFycmF5PG51bWJlcj4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSB7IGNvbnRlbnQ6ICdkZWxldGUnIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgeyBpZHMgfSk7XG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WGheWuueivpuaDhScgfSlcbiAgQEF1dGgoWydjb250ZW50OnZpZXcnXSlcbiAgZGV0YWlsKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0geyBjb250ZW50OiAnZGV0YWlsJyB9O1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKHBhdHRlcm4sIHsgaWQgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBDbGllbnRQcm94eUZhY3RvcnksIFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3lzdGVtL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udGVudENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRlbnQuY29udHJvbGxlcic7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbQXV0aE1vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbQ29udGVudENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiAnQkxPR19TRVJWSUNFJyxcbiAgICAgIHVzZUZhY3Rvcnk6IChjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcnQgPSBjb25maWdTZXJ2aWNlLmdldCgnQkxPR19QT1JUJyk7XG4gICAgICAgIHJldHVybiBDbGllbnRQcm94eUZhY3RvcnkuY3JlYXRlKHtcbiAgICAgICAgICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5UQ1AsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgaG9zdDogJzEyNy4wLjAuMScsXG4gICAgICAgICAgICBwb3J0OiBwb3J0IHx8IDgwMDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaW5qZWN0OiBbQ29uZmlnU2VydmljZV0sXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQXBpUHJvcGVydHkgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDb250ZW50Q3JlYXRlRHRvIHtcbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6ICfpu5jorqTmoIfpopgnLCBkZXNjcmlwdGlvbjogJ+aWh+eroOagh+mimCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5qCH6aKY5LiN5b6X5Li656m6JyB9KVxuICByZWFkb25seSB0aXRsZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogJ+aIkeaYr+aWh+eroOeahOm7mOiupOWGheWuuScsXG4gICAgZGVzY3JpcHRpb246ICfmlofnq6DlhoXlrrknLFxuICB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICflhoXlrrnkuI3lvpfkuLrnqbonIH0pXG4gIHJlYWRvbmx5IGNvbnRlbnQ6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6IDEwLCBkZXNjcmlwdGlvbjogJ+aOqOiNkOaMh+aVsCcgfSlcbiAgcmVhZG9ubHkgcmVjb20/OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiB0cnVlLCBkZXNjcmlwdGlvbjogJ+aYr+WQpue9rumhticgfSlcbiAgcmVhZG9ubHkgdG9wPzogYm9vbGVhbjtcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICd1cF9yYWNrJywgZGVzY3JpcHRpb246ICflhoXlrrnnirbmgIEnIH0pXG4gIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgUGFnaW5hdGlvbkR0byB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZHRvL3BhZ2luYXRpb24uZHRvJztcbmltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlc0R0byBleHRlbmRzIFBhZ2luYXRpb25EdG8ge1xuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICfmtYvor5UnLCBkZXNjcmlwdGlvbjogJ+aWh+eroOagh+mimCcgfSlcbiAgcmVhZG9ubHkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiB0cnVlLCBkZXNjcmlwdGlvbjogJ+aYr+WQpue9rumhticgfSlcbiAgcmVhZG9ubHkgdG9wPzogYm9vbGVhbjtcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICd1cF9yYWNrJywgZGVzY3JpcHRpb246ICfmlofnq6DnirbmgIEnIH0pXG4gIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuZXhwb3J0IGNsYXNzIENvbnRlbnRVcGRhdGVEdG8ge1xuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogJ+m7mOiupOagh+mimCcsIGRlc2NyaXB0aW9uOiAn5paH56ug5qCH6aKYJyB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICfmoIfpopjkuI3lvpfkuLrnqbonIH0pXG4gIHJlYWRvbmx5IHRpdGxlOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiAn5oiR5piv5paH56ug55qE6buY6K6k5YaF5a65JyxcbiAgICBkZXNjcmlwdGlvbjogJ+aWh+eroOWGheWuuScsXG4gIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+WGheWuueS4jeW+l+S4uuepuicgfSlcbiAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogMCwgZGVzY3JpcHRpb246ICfmtY/op4jph48nIH0pXG4gIHJlYWRvbmx5IHNjYW4/OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDEwLCBkZXNjcmlwdGlvbjogJ+aOqOiNkOaMh+aVsCcgfSlcbiAgcmVhZG9ubHkgcmVjb206IG51bWJlcjtcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogdHJ1ZSwgZGVzY3JpcHRpb246ICfmmK/lkKbnva7pobYnIH0pXG4gIHJlYWRvbmx5IHRvcDogYm9vbGVhbjtcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICd1cF9yYWNrJywgZGVzY3JpcHRpb246ICflhoXlrrnnirbmgIEnIH0pXG4gIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQXBpUHJvcGVydHkgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBUYWdDcmVhdGUge1xuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogJ+a1i+ivleWIhue7hCcsIGRlc2NyaXB0aW9uOiAn5YiG57uEJyB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICfliIbnu4TlkI3np7Dlv4XloasnIH0pXG4gIHJlYWRvbmx5IGdyb3VwOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6ICfmtYvor5XmoIfnrb4nLCBkZXNjcmlwdGlvbjogJ+WQjeensCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5qCH562+5ZCN56ew5b+F5aGrJyB9KVxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiA5OSwgZGVzY3JpcHRpb246ICfmjpLluo8nIH0pXG4gIHJlYWRvbmx5IHNvcnQ/OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDpcbiAgICAgICdodHRwOi8vcWFwcC1sbS5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL3VwbG9hZC9sd3lkL2NvdmVyLzE2MzQxMzg3Njg5NTRfMWZodDQ1aGhyLmpwZycsXG4gICAgZGVzY3JpcHRpb246ICflsIHpnaLlm74nLFxuICB9KVxuICByZWFkb25seSBzaW1nPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICfmiJHmmK/mj4/ov7DnmoTlhoXlrrknLFxuICAgIGRlc2NyaXB0aW9uOiAn5o+P6L+wJyxcbiAgfSlcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFRhZ1VwZGF0ZSB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAn5rWL6K+V5YiG57uEJywgZGVzY3JpcHRpb246ICfliIbnu4QnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+WIhue7hOWQjeensOW/heWhqycgfSlcbiAgcmVhZG9ubHkgZ3JvdXA6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogJ+a1i+ivleagh+etvicsIGRlc2NyaXB0aW9uOiAn5ZCN56ewJyB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICfmoIfnrb7lkI3np7Dlv4XloasnIH0pXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6IDk5LCBkZXNjcmlwdGlvbjogJ+aOkuW6jycgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5qCH562+5o6S5bqP5b+F5aGrJyB9KVxuICByZWFkb25seSBzb3J0OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDpcbiAgICAgICdodHRwOi8vcWFwcC1sbS5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL3VwbG9hZC9sd3lkL2NvdmVyLzE2MzQxMzg3Njg5NTRfMWZodDQ1aGhyLmpwZycsXG4gICAgZGVzY3JpcHRpb246ICflsIHpnaLlm74nLFxuICB9KVxuICByZWFkb25seSBzaW1nPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICfmiJHmmK/mj4/ov7DnmoTlhoXlrrknLFxuICAgIGRlc2NyaXB0aW9uOiAn5o+P6L+wJyxcbiAgfSlcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBdXRoIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9kZWNvcmF0b3IvYXV0aC5kZWNvcmF0b3InO1xuaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIEluamVjdCxcbiAgUGFyYW0sXG4gIFBhcnNlQXJyYXlQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBcGlPcGVyYXRpb24sIEFwaVRhZ3MgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGFnQ3JlYXRlIH0gZnJvbSAnLi9kdG8vVGFnQ3JlYXRlLmR0byc7XG5pbXBvcnQgeyBUYWdMaXN0RHRvIH0gZnJvbSAnLi9kdG8vVGFnTGlzdC5kdG8nO1xuaW1wb3J0IHsgVGFnVXBkYXRlIH0gZnJvbSAnLi9kdG8vVGFnVXBkYXRlLmR0byc7XG5cbkBDb250cm9sbGVyKCdibG9nL3RhZycpXG5AQXBpVGFncygn5qCH562+JylcbmV4cG9ydCBjbGFzcyBUYWdDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoQEluamVjdCgnQkxPR19TRVJWSUNFJykgcHJpdmF0ZSByZWFkb25seSBjbGllbnQ6IENsaWVudFByb3h5KSB7fVxuXG4gIEBHZXQoJy9saXN0JylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfmn6Xor6LmoIfnrb7liJfooagnIH0pXG4gIEBBdXRoKFsndGFnOnZpZXcnXSlcbiAgbGlzdChcbiAgICBAUXVlcnkoJ2F0dHJzJywgbmV3IFBhcnNlQXJyYXlQaXBlKHsgaXRlbXM6IFN0cmluZywgc2VwYXJhdG9yOiAnLCcgfSkpXG4gICAgYXR0cnM6IEFycmF5PFRhZ0xpc3REdG8+LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSB7IHRhZzogJ2xpc3QnIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgeyBhdHRycyB9KTtcbiAgfVxuXG4gIEBQb3N0KClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliJvlu7rmoIfnrb4nIH0pXG4gIEBBdXRoKFsndGFnOmNyZWF0ZSddKVxuICBjcmVhdGUoQEJvZHkoKSBib2R5OiBUYWdDcmVhdGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSB7IHRhZzogJ2NyZWF0ZScgfTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZChwYXR0ZXJuLCBib2R5KTtcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn57yW6L6R5qCH562+JyB9KVxuICBAQXV0aChbJ3RhZzp1cGRhdGUnXSlcbiAgdXBkYXRlKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLCBAQm9keSgpIGJvZHk6IFRhZ1VwZGF0ZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IHsgdGFnOiAndXBkYXRlJyB9O1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKHBhdHRlcm4sIHsgaWQsIC4uLmJvZHkgfSk7XG4gIH1cblxuICBARGVsZXRlKClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliKDpmaTmoIfnrb4nIH0pXG4gIEBBdXRoKFsndGFnOmRlbGV0ZSddKVxuICBkZWxldGUoQEJvZHkoJ2lkcycpIGlkczogQXJyYXk8bnVtYmVyPik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IHsgdGFnOiAnZGVsZXRlJyB9O1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKHBhdHRlcm4sIHsgaWRzIH0pO1xuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfmoIfnrb7or6bmg4UnIH0pXG4gIEBBdXRoKFsndGFnOnZpZXcnXSlcbiAgZGV0YWlsKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0geyB0YWc6ICdkZXRhaWwnIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgeyBpZCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IENsaWVudFByb3h5RmFjdG9yeSwgVHJhbnNwb3J0IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuLi8uLi9zeXN0ZW0vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBUYWdDb250cm9sbGVyIH0gZnJvbSAnLi90YWcuY29udHJvbGxlcic7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbQXV0aE1vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbVGFnQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6ICdCTE9HX1NFUlZJQ0UnLFxuICAgICAgdXNlRmFjdG9yeTogKGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpID0+IHtcbiAgICAgICAgY29uc3QgcG9ydCA9IGNvbmZpZ1NlcnZpY2UuZ2V0KCdCTE9HX1BPUlQnKTtcbiAgICAgICAgcmV0dXJuIENsaWVudFByb3h5RmFjdG9yeS5jcmVhdGUoe1xuICAgICAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlRDUCxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIHBvcnQ6IHBvcnQgfHwgODAwMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtDb25maWdTZXJ2aWNlXSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWdNb2R1bGUge31cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL3N5c3RlbS9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IFVzZXJNb2R1bGUgfSBmcm9tICcuL3VzZXIvdXNlci5tb2R1bGUnO1xuaW1wb3J0IHsgUm9sZU1vZHVsZSB9IGZyb20gJy4vc3lzdGVtL3JvbGUvcm9sZS5tb2R1bGUnO1xuaW1wb3J0IHsgTWFuYWdlTW9kdWxlIH0gZnJvbSAnLi9zeXN0ZW0vbWFuYWdlL21hbmFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgRGJNb2R1bGUgfSBmcm9tICdAYXBwL2xpYnMvZGIvZGIubW9kdWxlJztcbmltcG9ydCB7IE1lbnVNb2R1bGUgfSBmcm9tICcuL3N5c3RlbS9tZW51L21lbnUubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSBhcyBTZXR0aW5nTW9kZWwgfSBmcm9tICcuL3N5c3RlbS9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBMaWJzTW9kdWxlIH0gZnJvbSAnQGFwcC9saWJzJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IExvZ01vZHVsZSB9IGZyb20gJy4vbG9nL2xvZy5tb2R1bGUnO1xuaW1wb3J0IHsgVGFnTW9kdWxlIH0gZnJvbSAnLi9ibG9nL3RhZy90YWcubW9kdWxlJztcbmltcG9ydCB7IENvbnRlbnRNb2R1bGUgfSBmcm9tICcuL2Jsb2cvY29udGVudC9jb250ZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBDYXRlZ29yeU1vZHVsZSB9IGZyb20gJy4vYmxvZy9jYXRlZ29yeS9jYXRlZ29yeS5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIERiTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHsgaXNHbG9iYWw6IHRydWUsIGNhY2hlOiB0cnVlIH0pLFxuICAgIExpYnNNb2R1bGUsXG4gICAgQXV0aE1vZHVsZSxcbiAgICBVc2VyTW9kdWxlLFxuICAgIFJvbGVNb2R1bGUsXG4gICAgTWFuYWdlTW9kdWxlLFxuICAgIE1lbnVNb2R1bGUsXG4gICAgU2V0dGluZ01vZGVsLFxuICAgIExvZ01vZHVsZSxcbiAgICBUYWdNb2R1bGUsXG4gICAgQ29udGVudE1vZHVsZSxcbiAgICBDYXRlZ29yeU1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgR2F0ZXdheXNNb2R1bGUge31cbiIsImltcG9ydCB7IFBhZ2luYXRpb25EdG8gfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2R0by9wYWdpbmF0aW9uLmR0byc7XG5pbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBMb2dpbkxvZ1BhZ2VzRHRvIGV4dGVuZHMgUGFnaW5hdGlvbkR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJ2FkbWluJywgZGVzY3JpcHRpb246ICfnlKjmiLflkI0nIH0pXG4gIHJlYWRvbmx5IHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAn6KW/5a6JJywgZGVzY3JpcHRpb246ICfnmbvlvZXlnLDlnYAnIH0pXG4gIHJlYWRvbmx5IGFkZHJlc3M6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICd3aW5kb3cnLCBkZXNjcmlwdGlvbjogJ+eZu+W9leW5s+WPsCcgfSlcbiAgcmVhZG9ubHkgdWE6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEF1dGggfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2RlY29yYXRvci9hdXRoLmRlY29yYXRvcic7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2ludGVyZmFjZS9yZXN1bHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUXVlcnkgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlPcGVyYXRpb24sIEFwaVRhZ3MgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgTG9naW5Mb2dQYWdlc0R0byB9IGZyb20gJy4vZHRvL0xvZ2luTG9nUGFnZXMuZHRvJztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcblxuQENvbnRyb2xsZXIoJ2xvZycpXG5AQXBpVGFncygn5pel5b+XJylcbmV4cG9ydCBjbGFzcyBMb2dDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoJy9sb2dpbicpXG4gIEBBdXRoKFsnbG9nX2xvZ2luOnZpZXcnXSlcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfnmbvlvZXml6Xlv5fmn6Xor6InIH0pXG4gIGFzeW5jIGxvZ2luTG9nUGFnZXMoQFF1ZXJ5KCkgcXVlcnk6IExvZ2luTG9nUGFnZXNEdG8pOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9nU2VydmljZS5sb2dpbkxvZ1BhZ2VzKHF1ZXJ5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+eZu+W9leaXpeW/l+afpeivouaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTG9naW5Mb2cgfSBmcm9tICdAYXBwL2xpYnMvZGIvZW50aXR5L2xvZ2luTG9nLmVudGl0eSc7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuLi9zeXN0ZW0vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dDb250cm9sbGVyIH0gZnJvbSAnLi9sb2cuY29udHJvbGxlcic7XG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbZm9yd2FyZFJlZigoKSA9PiBBdXRoTW9kdWxlKSwgVHlwZU9ybU1vZHVsZS5mb3JGZWF0dXJlKFtMb2dpbkxvZ10pXSxcbiAgY29udHJvbGxlcnM6IFtMb2dDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbTG9nU2VydmljZV0sXG4gIGV4cG9ydHM6IFtMb2dTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBMaWtlLCBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBMb2dpbkxvZyB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvbG9naW5Mb2cuZW50aXR5JztcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2ludGVyZmFjZS9wYWdpbmF0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMb2dpbkxvZ1BhZ2VzRHRvIH0gZnJvbSAnLi9kdG8vTG9naW5Mb2dQYWdlcy5kdG8nO1xuaW1wb3J0IHsgTG9naW5Mb2dQYWdlV2hlcmUgfSBmcm9tICcuL2ludGVyZmFjZS9Mb2dpbkxvZ1BhZ2VXaGVyZS5pbnRlcmZhY2UnO1xuaW1wb3J0ICogYXMgbGliUXF3cnkgZnJvbSAnbGliLXFxd3J5LXl5eWonO1xuY29uc3QgaXBJbnRlcmZhY2UgPSBsaWJRcXdyeS5pbml0KCk7XG5pcEludGVyZmFjZS5zcGVlZCgpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3RSZXBvc2l0b3J5KExvZ2luTG9nKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9naW5Mb2dNb2RlbDogUmVwb3NpdG9yeTxMb2dpbkxvZz4sXG4gICkge31cblxuICBhc3luYyBsb2dpbkxvZ0NyZWF0ZShib2R5KTogUHJvbWlzZTxMb2dpbkxvZz4ge1xuICAgIGxldCBjaXR5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpcCA9IGJvZHkuaXAuaW5jbHVkZXMoJ2ZmZmYnKSA/IGJvZHkuaXAuc2xpY2UoNykgOiBib2R5LmlwO1xuICAgICAgY29uc3QgeyBDb3VudHJ5IH0gPSBpcEludGVyZmFjZS5zZWFyY2hJUChpcCk7XG4gICAgICBjaXR5ID0gQ291bnRyeSB8fCAnJztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5sb2dpbkxvZ01vZGVsLnNhdmUoe1xuICAgICAgbWFuYWdlSWQ6IGJvZHkuaWQsXG4gICAgICB1c2VybmFtZTogYm9keS51c2VybmFtZSxcbiAgICAgIGFkZHJlc3M6IGNpdHksXG4gICAgICB1YTogYm9keS51YSxcbiAgICAgIGlwOiBib2R5LmlwLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW5Mb2dQYWdlcyhxdWVyeTogTG9naW5Mb2dQYWdlc0R0byk6IFByb21pc2U8UGFnaW5hdGlvbjxMb2dpbkxvZz4+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYWdlLCBsaW1pdCwgdWEsIGFkZHJlc3MgfSA9IHF1ZXJ5O1xuICAgIGNvbnN0IGZpbHRlcjogTG9naW5Mb2dQYWdlV2hlcmUgPSB7XG4gICAgICBza2lwOiAocGFnZSAtIDEpICogbGltaXQsXG4gICAgICB0YWtlOiBsaW1pdCxcbiAgICB9O1xuXG4gICAgaWYgKHVzZXJuYW1lKSBmaWx0ZXIud2hlcmUudXNlcm5hbWUgPSBMaWtlKGAlJHt1c2VybmFtZX0lYCk7XG4gICAgaWYgKHVhKSBmaWx0ZXIud2hlcmUudWEgPSBMaWtlKGAlJHt1YX0lYCk7XG4gICAgaWYgKGFkZHJlc3MpIGZpbHRlci53aGVyZS5hZGRyZXNzID0gTGlrZShgJSR7YWRkcmVzc30lYCk7XG5cbiAgICBjb25zdCBbcm93cywgdG90YWxdID0gYXdhaXQgdGhpcy5sb2dpbkxvZ01vZGVsLmZpbmRBbmRDb3VudChmaWx0ZXIpO1xuICAgIHJldHVybiB7XG4gICAgICByb3dzLFxuICAgICAgdG90YWwsXG4gICAgICBwYWdlcjoge1xuICAgICAgICBwYWdlLFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIG9mZnNldDogKHBhZ2UgLSAxKSAqIGxpbWl0LFxuICAgICAgICBwYWdlVG90YWw6IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7IElwIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9kZWNvcmF0b3IvaXAuZGVjb3JhdG9yJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgQ29udHJvbGxlcixcbiAgUG9zdCxcbiAgVXNlR3VhcmRzLFxuICBSZXF1ZXN0LFxuICBCb2R5LFxuICBHZXQsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgQXBpT3BlcmF0aW9uLCBBcGlUYWdzIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9sb2cvbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBNYW5hZ2VMb2NhbExvZ2luRHRvIH0gZnJvbSAnLi9kdG8vTWFuYWdlTG9jYWxMb2dpbi5kdG8nO1xuaW1wb3J0IHsgVUFQYXJzZXIgfSBmcm9tICd1YS1wYXJzZXItanMnO1xuXG5AQ29udHJvbGxlcignYXV0aCcpXG5AQXBpVGFncygn6K6k6K+BJylcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9nU2VydmljZTogTG9nU2VydmljZSxcbiAgKSB7fVxuXG4gIEBQb3N0KCdsb2dpbicpXG4gIEBVc2VHdWFyZHMoQXV0aEd1YXJkKCdNYW5hZ2VMb2NhbCcpKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+euoeeQhuWRmOeZu+W9lScgfSlcbiAgYXN5bmMgbG9naW4oXG4gICAgQEJvZHkoKSBib2R5OiBNYW5hZ2VMb2NhbExvZ2luRHRvLFxuICAgIEBSZXF1ZXN0KCkgcmVxLFxuICAgIEBJcCgpIGlwOiBzdHJpbmcsXG4gICk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNyZWF0ZVRva2VuKHJlcS51c2VyKTtcbiAgICBjb25zdCB7IHVhIH0gPSBVQVBhcnNlcihyZXEuaGVhZGVyc1sndXNlci1hZ2VudCddKTtcbiAgICByZXEudXNlci5pcCA9IGlwO1xuICAgIHJlcS51c2VyLnVhID0gdWE7XG4gICAgYXdhaXQgdGhpcy5sb2dTZXJ2aWNlLmxvZ2luTG9nQ3JlYXRlKHJlcS51c2VyKTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ+eZu+W9leaIkOWKnycsXG4gICAgICByZXN1bHQ6IHRva2VuLFxuICAgIH07XG4gIH1cblxuICBAR2V0KCdkZXRhaWwnKVxuICBAQXV0aCgpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn55So5oi35L+h5oGvJyB9KVxuICBhc3luYyBkZXRhaWwoQFJlcXVlc3QoKSByZXEpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZGV0YWlsKHJlcS51c2VyKTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ+eUqOaIt+S/oeaBr+iOt+WPluaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWFuYWdlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9tYW5hZ2UuZW50aXR5JztcbmltcG9ydCB7IGZvcndhcmRSZWYsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEp3dE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvand0JztcbmltcG9ydCB7IFBhc3Nwb3J0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSAnLi9hdXRoLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBNYW5hZ2VMb2NhbFN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9tYW5hZ2VMb2NhbC5zdHJhdGVneSc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2d1YXJkcy9hdXRoLmd1YXJkJztcbmltcG9ydCB7IExvZ01vZHVsZSB9IGZyb20gJy4uLy4uL2xvZy9sb2cubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBmb3J3YXJkUmVmKCgpID0+IExvZ01vZHVsZSksXG4gICAgVHlwZU9ybU1vZHVsZS5mb3JGZWF0dXJlKFtNYW5hZ2VdKSxcbiAgICBQYXNzcG9ydE1vZHVsZSxcbiAgICBKd3RNb2R1bGUucmVnaXN0ZXJBc3luYyh7XG4gICAgICB1c2VGYWN0b3J5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQsXG4gICAgICAgICAgc2lnbk9wdGlvbnM6IHsgZXhwaXJlc0luOiAnMWQnIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjb250cm9sbGVyczogW0F1dGhDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIE1hbmFnZUxvY2FsU3RyYXRlZ3ksIEF1dGhHdWFyZF0sXG4gIGV4cG9ydHM6IFtBdXRoU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiIsImltcG9ydCB7IE1hbmFnZSB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvbWFuYWdlLmVudGl0eSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJ0BuZXN0anMvand0JztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgY29tcGFyZVN5bmMgfSBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3RSZXBvc2l0b3J5KE1hbmFnZSkgcHJpdmF0ZSByZWFkb25seSBtYW5hZ2VNb2RlbDogUmVwb3NpdG9yeTxNYW5hZ2U+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgand0U2VydmljZTogSnd0U2VydmljZSxcbiAgKSB7fVxuXG4gIC8vIOeuoeeQhuWRmOmqjOivgVxuICBhc3luYyB2YWxpZGF0ZU1hbmFnZSh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBtYW5hZ2UgPSBhd2FpdCB0aGlzLm1hbmFnZU1vZGVsLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgdXNlcm5hbWUgfSxcbiAgICAgIHNlbGVjdDogWydpZCcsICd1c2VybmFtZScsICdwYXNzd29yZCcsICdyb2xlSWQnXSxcbiAgICB9KTtcblxuICAgIGlmICghbWFuYWdlKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoY29tcGFyZVN5bmMocGFzc3dvcmQsIG1hbmFnZS5wYXNzd29yZCkpIHtcbiAgICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnJlc3VsdCB9ID0gbWFuYWdlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfotKblj7flr4bnoIHplJnor68nKTtcbiAgICB9XG4gIH1cblxuICAvLyDnlJ/miJAgdG9rZW5cbiAgY3JlYXRlVG9rZW4ocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmp3dFNlcnZpY2Uuc2lnbihwYXlsb2FkKTtcbiAgfVxuXG4gIC8vIOino+aekCB0b2tlblxuICB2ZXJ0aWZ5VG9rZW4odG9rZW4sIHNlY3JldCkge1xuICAgIGlmICh0b2tlbi5pbmNsdWRlcygnQmVhcmVyJykpIHtcbiAgICAgIHRva2VuID0gdG9rZW4uc2xpY2UoNyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmp3dFNlcnZpY2UudmVyaWZ5KHRva2VuLCB7IHNlY3JldCB9KTtcbiAgfVxuXG4gIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICBhc3luYyBkZXRhaWwodXNlcikge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1hbmFnZU1vZGVsLmZpbmRPbmUodXNlci5pZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgTWFuYWdlTG9jYWxMb2dpbkR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAnYWRtaW4nLCBkZXNjcmlwdGlvbjogJ+eUqOaIt+WQjScgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn55So5oi35ZCN5LiN5b6X5Li656m6JyB9KVxuICByZWFkb25seSB1c2VybmFtZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAnMTIzNDU2JywgZGVzY3JpcHRpb246ICflr4bnoIEnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+WvhueggeS4jeW+l+S4uuepuicgfSlcbiAgcmVhZG9ubHkgcGFzc3dvcmQ6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgQmFkUmVxdWVzdEV4Y2VwdGlvbiwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hbmFnZUxvY2FsU3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFxuICBTdHJhdGVneSxcbiAgJ01hbmFnZUxvY2FsJyxcbikge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvLyBwYXNzcG9ydCDnmoTpqozor4Hmlrnms5VcbiAgYXN5bmMgdmFsaWRhdGUodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudmFsaWRhdGVNYW5hZ2UodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICBpZiAodXNlcikgcmV0dXJuIHVzZXI7XG4gICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFeGNlcHRpb24oJ+i0puWPt+WvhueggemUmeivrycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdXRoIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9kZWNvcmF0b3IvYXV0aC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9pbnRlcmZhY2UvcmVzdWx0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBhcmFtLCBQdXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlPcGVyYXRpb24sIEFwaVRhZ3MgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuY29uc3QgREVGQVVMVF9TRVJWSUNFID0gJ2NvbmZpZ1NlcnZpY2UnO1xuXG5AQ29udHJvbGxlcignc2V0dGluZycpXG5AQXBpVGFncygn6YWN572uJylcbmV4cG9ydCBjbGFzcyBDb25maWdDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoJy86bW9kZScpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn6I635Y+W6YWN572u5YiX6KGoJyB9KVxuICBsaXN0KEBQYXJhbSgnbW9kZScpIG1vZGU6IHN0cmluZyk6IFJlc3VsdCB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmxpc3QobW9kZSk7XG4gICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gIH1cblxuICBAUHV0KCdyZWZyZXNoJylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliLfmlrDphY3nva7liJfooagnIH0pXG4gIEBBdXRoKFsnc2V0dGluZzp1cGRhdGUnXSlcbiAgYXN5bmMgcmVmcmVzaCgpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXNbREVGQVVMVF9TRVJWSUNFXS5zeW5jQ29uZmlnKCk7XG4gICAgcmV0dXJuIHsgcmVzdWx0IH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFNldHRpbmcgfSBmcm9tICdAYXBwL2xpYnMvZGIvZW50aXR5L3NldHRpbmcuZW50aXR5JztcbmltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25maWdDb250cm9sbGVyIH0gZnJvbSAnLi9jb25maWcuY29udHJvbGxlcic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5cbkBHbG9iYWwoKVxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtUeXBlT3JtTW9kdWxlLmZvckZlYXR1cmUoW1NldHRpbmddKSwgQXV0aE1vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbQ29uZmlnQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW0NvbmZpZ1NlcnZpY2VdLFxuICBleHBvcnRzOiBbQ29uZmlnU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ01vZHVsZSB7fVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBvcmRlcl9zdGF0ZTogW1xuICAgIHsgbGFiZWw6ICfmiJDlip8nLCB2YWx1ZTogJ3N1Y2Nlc3MnIH0sXG4gICAgeyBsYWJlbDogJ+Wksei0pScsIHZhbHVlOiAnZXJyb3InIH0sXG4gIF0sXG59O1xuIiwiaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvc2V0dGluZy5lbnRpdHknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25BcHBsaWNhdGlvbkJvb3RzdHJhcCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IERFRkFVTFRfU0VUVElORyBmcm9tICcuL2NvbmZpZy5zZXR0aW5nJztcbmltcG9ydCBERUZBVUxUX09QVElPTiBmcm9tICcuL2NvbmZpZy5vcHRpb24nO1xuY29uc3QgREVGQVVMVF9NT0RFTCA9ICdzZXR0aW5nTW9kZWwnO1xuXG4vLyDnu6fmib8gb25BcHBsaWNhdGlvbkJvb3RzdHJhcO+8jOWcqOWIneWni+WMluaJgOacieaooeWdl+WQjuiwg+eUqO+8jOS9huWcqOS+puWQrOi/nuaOpeS5i+WJjeiwg+eUqOOAglxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkFwcGxpY2F0aW9uQm9vdHN0cmFwIHtcbiAgZGVmYXVsdFNldHRpbmc6IGFueTtcbiAgZGVmYXVsdE9wdGlvbjogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0UmVwb3NpdG9yeShTZXR0aW5nKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2V0dGluZ01vZGVsOiBSZXBvc2l0b3J5PFNldHRpbmc+LFxuICApIHtcbiAgICB0aGlzLmRlZmF1bHRTZXR0aW5nID0gbnVsbDtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb24gPSBudWxsO1xuICB9XG5cbiAgLy8g5Yid5aeL5YyW5omA5pyJ5qih5Z2X5ZCO6LCD55So77yM5Yqg6L29546v5aKD5Y+Y6YePXG4gIGFzeW5jIG9uQXBwbGljYXRpb25Cb290c3RyYXAoKSB7XG4gICAgY29uc3Qgc2V0dGluZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgLy8g5YGa5aSN5Yi25L2/55So77yM5L+d55WZ5Yid5aeL5YyW5pWw5o2uXG4gICAgdGhpcy5kZWZhdWx0U2V0dGluZyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2V0dGluZykpO1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoREVGQVVMVF9PUFRJT04pKTtcbiAgfVxuXG4gIC8vIOi/h+a7pOS4jeWPr+abtOaWsOeahOaVsOaNrlxuICBwcml2YXRlIGdldENvbmZpZygpIHtcbiAgICBjb25zdCBzZXR0aW5nID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKERFRkFVTFRfU0VUVElORykpIHtcbiAgICAgIGlmIChrZXkuY2hhckF0KDApICE9ICdfJykgc2V0dGluZ1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gc2V0dGluZztcbiAgfVxuXG4gIGxpc3QobW9kZSkge1xuICAgIGlmIChtb2RlID09PSAnYWRtaW4nKSB7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2xpZW50Jykge1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc2V0dGluZzogdGhpcy5kZWZhdWx0U2V0dGluZyxcbiAgICAgIG9wdGlvbjogdGhpcy5kZWZhdWx0T3B0aW9uLFxuICAgIH07XG4gIH1cblxuICAvLyDliLfmlrDnjq/looPlj5jph49cbiAgYXN5bmMgc3luY0NvbmZpZygpIHtcbiAgICBjb25zdCByb3dzID0gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kKHsgb3JkZXI6IHsgc29ydDogMSB9IH0pO1xuICAgIGNvbnN0IHNvdXJjZVNldHRpbmcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIGNvbnN0IHNldHRpbmcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRTZXR0aW5nLCBzb3VyY2VTZXR0aW5nKTtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICBjb25zdCB2YWx1ZXR5cGUgPSAocm93LnZhbHVldHlwZSB8fCAnc3RyaW5nJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGxldCB2YWx1ZTogYW55ID0gcm93LnZhbHVlO1xuICAgICAgc3dpdGNoICh2YWx1ZXR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgYOagvOW8j+WMluezu+e7n+iuvue9riR7cm93LmlkfSAke3Jvdy5rZXl9ICR7cm93LnZhbHVlfeWksei0pSFgLFxuICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocm93Lmdyb3VwKSB7XG4gICAgICAgIGlmICghc2V0dGluZ1tyb3cuZ3JvdXBdKSB7XG4gICAgICAgICAgc2V0dGluZ1tyb3cuZ3JvdXBdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ1tyb3cuZ3JvdXBdW3Jvdy5rZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0aW5nW3Jvdy5rZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdFNldHRpbmcgPSBzZXR0aW5nO1xuICAgIC8vIGNvbnNvbGUubG9nKCfnjq/looPlj5jph4/liLfmlrDmiJDlip/jgILjgILjgIInKTtcbiAgICByZXR1cm4gc2V0dGluZztcbiAgfVxufVxuIiwiLyoqXG4gKiDoh6rlrprkuYnphY3nva7poblcbiAqIDIwMjEtMTItMTIgMjM6MjJcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ25lc3Rqc+WQjuWPsOeuoeeQhuaooeeJiCcsXG59O1xuIiwiaW1wb3J0IHsgQXBpUHJvcGVydHkgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBNYW5hZ2VDcmVhdGVEdG8ge1xuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogJ2FkbWluJywgZGVzY3JpcHRpb246ICfnlKjmiLflkI0nIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+eUqOaIt+WQjeW/heWhqycgfSlcbiAgcmVhZG9ubHkgdXNlcm5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlZmF1bHQ6IDEyMzQ1NixcbiAgICBkZXNjcmlwdGlvbjogJ+WvhueggScsXG4gIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+WvhueggeW/heWhqycgfSlcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMSwgZGVzY3JpcHRpb246ICfop5LoibJJRCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn6KeS6Imy5b+F5aGrJyB9KVxuICByZWFkb25seSByb2xlSWQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IFBhZ2luYXRpb25EdG8gfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2R0by9wYWdpbmF0aW9uLmR0byc7XG5pbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBNYW5hZ2VQYWdlc0R0byBleHRlbmRzIFBhZ2luYXRpb25EdG8ge1xuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICdhZG1pbicsIGRlc2NyaXB0aW9uOiAn55So5oi35ZCNJyB9KVxuICByZWFkb25seSB1c2VybmFtZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICflsIbmoqbmi4nliLDnjrDlrp4nLFxuICAgIGRlc2NyaXB0aW9uOiAn5pi156ewJyxcbiAgfSlcbiAgcmVhZG9ubHkgbmlja25hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6IDEsIGRlc2NyaXB0aW9uOiAn6KeS6ImySUQnIH0pXG4gIHJlYWRvbmx5IHJvbGVJZDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQXBpUHJvcGVydHkgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuXG5leHBvcnQgY2xhc3MgTWFuYWdlVXBkYXRlRHRvIHtcbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAnYWRtaW4nLCBkZXNjcmlwdGlvbjogJ+eUqOaIt+WQjScgfSlcbiAgcmVhZG9ubHkgdXNlcm5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAxMjM0NTYsXG4gICAgZGVzY3JpcHRpb246ICflr4bnoIEnLFxuICB9KVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogMSwgZGVzY3JpcHRpb246ICfop5LoibJJRCcgfSlcbiAgcmVhZG9ubHkgcm9sZUlkOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBBdXRoIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9kZWNvcmF0b3IvYXV0aC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9pbnRlcmZhY2UvcmVzdWx0LmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBEZWxldGUsXG4gIEdldCxcbiAgUGFyYW0sXG4gIFBhcnNlQXJyYXlQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlPcGVyYXRpb24sIEFwaVRhZ3MgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgTWFuYWdlQ3JlYXRlRHRvIH0gZnJvbSAnLi9kdG8vTWFuYWdlQ3JlYXRlLmR0byc7XG5pbXBvcnQgeyBNYW5hZ2VQYWdlc0R0byB9IGZyb20gJy4vZHRvL01hbmFnZVBhZ2VzLmR0byc7XG5pbXBvcnQgeyBNYW5hZ2VVcGRhdGVEdG8gfSBmcm9tICcuL2R0by9NYW5hZ2VVcGRhdGUuZHRvJztcbmltcG9ydCB7IE1hbmFnZVNlcnZpY2UgfSBmcm9tICcuL21hbmFnZS5zZXJ2aWNlJztcbmNvbnN0IERFRkFVTFRfU0VSVklDRSA9ICdtYW5hZ2VyU2VydmljZSc7XG5cbkBDb250cm9sbGVyKCdtYW5hZ2UnKVxuQEFwaVRhZ3MoJ+euoeeQhuWRmCcpXG5leHBvcnQgY2xhc3MgTWFuYWdlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWFuYWdlclNlcnZpY2U6IE1hbmFnZVNlcnZpY2UpIHt9XG5cbiAgQFBvc3QoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIm+W7uueuoeeQhuWRmCcgfSlcbiAgQEF1dGgoWydtYW5hZ2U6Y3JlYXRlJ10pXG4gIGFzeW5jIGNyZWF0ZShAQm9keSgpIGJvZHk6IE1hbmFnZUNyZWF0ZUR0byk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmNyZWF0ZShib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+euoeeQhuWRmOWIm+W7uuaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5L+u5pS5566h55CG5ZGYJyB9KVxuICBAQXV0aChbJ21hbmFuZ2U6dXBkYXRlJ10pXG4gIGFzeW5jIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcixcbiAgICBAQm9keSgpIGJvZHk6IE1hbmFnZVVwZGF0ZUR0byxcbiAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0udXBkYXRlKGlkLCBib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+euoeeQhuWRmOS/ruaUueaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBEZWxldGUoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIoOmZpOeuoeeQhuWRmCcgfSlcbiAgQEF1dGgoWydtYW5hZ2U6ZGVsZXRlJ10pXG4gIGFzeW5jIGRlbGV0ZShcbiAgICBAQm9keSgnaWRzJywgbmV3IFBhcnNlQXJyYXlQaXBlKHsgaXRlbXM6IE51bWJlciwgc2VwYXJhdG9yOiAnLCcgfSkpXG4gICAgaWRzOiBudW1iZXJbXSxcbiAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uZGVsZXRlKGlkcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfnrqHnkIblkZjliKDpmaTmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBAR2V0KClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliIbpobXmn6Xor6InIH0pXG4gIEBBdXRoKFsnbWFuYWdlOnZpZXcnXSlcbiAgYXN5bmMgcGFnZXMoQFF1ZXJ5KCkgcXVlcnk6IE1hbmFnZVBhZ2VzRHRvKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0ucGFnZXMocXVlcnkpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAn566h55CG5ZGY5p+l6K+i5oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfnrqHnkIblkZjor6bmg4UnIH0pXG4gIEBBdXRoKFsnbWFuYWdlOnZpZXcnXSlcbiAgYXN5bmMgZGV0YWlsKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uZGV0YWlsKGlkKTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ+euoeeQhuWRmOS/oeaBr+afpeivouaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWFuYWdlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9tYW5hZ2UuZW50aXR5JztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgTWFuYWdlQ29udHJvbGxlciB9IGZyb20gJy4vbWFuYWdlLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTWFuYWdlU2VydmljZSB9IGZyb20gJy4vbWFuYWdlLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1R5cGVPcm1Nb2R1bGUuZm9yRmVhdHVyZShbTWFuYWdlXSksIEF1dGhNb2R1bGVdLFxuICBjb250cm9sbGVyczogW01hbmFnZUNvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtNYW5hZ2VTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWFuYWdlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9pbnRlcmZhY2UvcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWFuYWdlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9tYW5hZ2UuZW50aXR5JztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uTW9kdWxlSW5pdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgaGFzaFN5bmMgfSBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyBMaWtlLCBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBNYW5hZ2VDcmVhdGVEdG8gfSBmcm9tICcuL2R0by9NYW5hZ2VDcmVhdGUuZHRvJztcbmltcG9ydCB7IE1hbmFnZVBhZ2VzRHRvIH0gZnJvbSAnLi9kdG8vTWFuYWdlUGFnZXMuZHRvJztcbmltcG9ydCB7IE1hbmFnZVVwZGF0ZUR0byB9IGZyb20gJy4vZHRvL01hbmFnZVVwZGF0ZS5kdG8nO1xuaW1wb3J0IHsgTWFuYWdlUGFnZVdoZXJlIH0gZnJvbSAnLi9pbnRlcmZhY2UvTWFuYWdlUGFnZVdoZXJlLmludGVyZmFjZSc7XG5jb25zdCBERUZBVUxUX01PREVMID0gJ21hbmFnZU1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hbmFnZVNlcnZpY2UgaW1wbGVtZW50cyBPbk1vZHVsZUluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0UmVwb3NpdG9yeShNYW5hZ2UpIHByaXZhdGUgcmVhZG9ubHkgbWFuYWdlTW9kZWw6IFJlcG9zaXRvcnk8TWFuYWdlPixcbiAgKSB7fVxuXG4gIGFzeW5jIG9uTW9kdWxlSW5pdCgpIHtcbiAgICBjb25zdCByb3cgPSBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgdXNlcm5hbWU6ICd5a24nIH0sXG4gICAgfSk7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uc2F2ZSh7XG4gICAgICAgIHVzZXJuYW1lOiAneWtuJyxcbiAgICAgICAgcGFzc3dvcmQ6IGhhc2hTeW5jKCcxMjM0NTYnKSxcbiAgICAgICAgcm9sZUlkOiAxLFxuICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgJ2h0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXJXaWFmWGRFN0FtQW00RjkwVUpkNnl1bmdKUlJaUGliaWJUT2dJRnNGNHZxN0xTSExpYUdXWm1sdElPMmNMaWJpYTNMM1V6V2xTWEk0WTZvZmcvMTMyJyxcbiAgICAgICAgbmlja25hbWU6ICflsIbmoqbmi4nliLDnjrDlrp4nLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygn566h55CG5ZGY5Yib5bu65oiQ5Yqf77yB77yB77yBJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGJvZHk6IE1hbmFnZUNyZWF0ZUR0byk6IFByb21pc2U8TWFuYWdlPiB7XG4gICAgYm9keS5wYXNzd29yZCA9IGhhc2hTeW5jKGJvZHkucGFzc3dvcmQpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLnNhdmUoYm9keSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQ6IG51bWJlciwgYm9keTogTWFuYWdlVXBkYXRlRHRvKTogUHJvbWlzZTxNYW5hZ2U+IHtcbiAgICBpZiAoYm9keS5wYXNzd29yZCkge1xuICAgICAgYm9keS5wYXNzd29yZCA9IGhhc2hTeW5jKGJvZHkucGFzc3dvcmQpO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLnVwZGF0ZShpZCwgYm9keSk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZE9uZShpZCk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWRzOiBudW1iZXJbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZGVsZXRlKGlkcyk7XG4gIH1cblxuICBhc3luYyBkZXRhaWwoaWQ6IG51bWJlcik6IFByb21pc2U8TWFuYWdlPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZE9uZShpZCk7XG4gIH1cblxuICBhc3luYyBwYWdlcyhxdWVyeTogTWFuYWdlUGFnZXNEdG8pOiBQcm9taXNlPFBhZ2luYXRpb248TWFuYWdlPj4ge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhZ2UsIGxpbWl0LCByb2xlSWQsIG5pY2tuYW1lIH0gPSBxdWVyeTtcbiAgICBjb25zdCBtYW5hZ2VmaWx0ZXI6IE1hbmFnZVBhZ2VXaGVyZSA9IHtcbiAgICAgIHNraXA6IChwYWdlIC0gMSkgKiBsaW1pdCxcbiAgICAgIHRha2U6IGxpbWl0LFxuICAgICAgd2hlcmU6IHt9LFxuICAgIH07XG5cbiAgICBpZiAodXNlcm5hbWUpIG1hbmFnZWZpbHRlci53aGVyZS51c2VybmFtZSA9IExpa2UoYCUke3VzZXJuYW1lfSVgKTtcbiAgICBpZiAobmlja25hbWUpIG1hbmFnZWZpbHRlci53aGVyZS5uaWNrbmFtZSA9IExpa2UoYCUke25pY2tuYW1lfSVgKTtcbiAgICBpZiAocm9sZUlkKSBtYW5hZ2VmaWx0ZXIud2hlcmUucm9sZUlkID0gcm9sZUlkO1xuXG4gICAgY29uc3QgW3Jvd3MsIHRvdGFsXSA9IGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZEFuZENvdW50KG1hbmFnZWZpbHRlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvd3MsXG4gICAgICB0b3RhbCxcbiAgICAgIHBhZ2VyOiB7XG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxpbWl0LFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgb2Zmc2V0OiAocGFnZSAtIDEpICogbGltaXQsXG4gICAgICAgIHBhZ2VUb3RhbDogTWF0aC5jZWlsKHRvdGFsIC8gbGltaXQpLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIE1lbnVDcmVhdGVEdG8ge1xuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnMDrnm67lvZUgMTroj5zljZUgMjrlpJbpk74nLFxuICB9KVxuICByZWFkb25seSB0eXBlOiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAnaWNvbicsIGRlc2NyaXB0aW9uOiAn5Zu+5qCHJyB9KVxuICByZWFkb25seSBpY29uOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAwLCBkZXNjcmlwdGlvbjogJ+iPnOWNleaYr+WQpue8k+WtmCcgfSlcbiAgcmVhZG9ubHkgY2FjaGU6IGJvb2xlYW47XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAsIGRlc2NyaXB0aW9uOiAn5piv5ZCm5Zyo6I+c5Y2V5pi+56S6JyB9KVxuICByZWFkb25seSBoaWRlOiBib29sZWFuO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAn5rWL6K+VJywgZGVzY3JpcHRpb246ICfoj5zljZXlkI3np7AnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+iPnOWNleWQjeensOW/heWhqycgfSlcbiAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICcnLCBkZXNjcmlwdGlvbjogJ+i3r+eUseWcsOWdgCcgfSlcbiAgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAn5rWL6K+VJywgZGVzY3JpcHRpb246ICfnu4Tku7blkI3np7AnIH0pXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAnaG9tZTpjcmVhdGUnLFxuICAgIGRlc2NyaXB0aW9uOiAn5pON5L2c6KeE5YiZJyxcbiAgfSlcbiAgcmVhZG9ubHkgYWN0aW9uOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDk5LCBkZXNjcmlwdGlvbjogJ+aOkuW6jycgfSlcbiAgcmVhZG9ubHkgc29ydDogbnVtYmVyO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICcvdGVtcC9pbmRleC52dWUnLFxuICAgIGRlc2NyaXB0aW9uOiAn57uE5Lu26Lev5b6EJyxcbiAgfSlcbiAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwLCBkZXNjcmlwdGlvbjogJ+eItuiPnOWNlUlEIDA65pegJyB9KVxuICByZWFkb25seSBwaWQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgTWVudVVwZGF0ZUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogMSxcbiAgICBkZXNjcmlwdGlvbjogJzA655uu5b2VIDE66I+c5Y2VIDI65aSW6ZO+JyxcbiAgfSlcbiAgcmVhZG9ubHkgdHlwZTogbnVtYmVyO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJ2ljb24nLCBkZXNjcmlwdGlvbjogJ+WbvuaghycgfSlcbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6IDAsIGRlc2NyaXB0aW9uOiAn6I+c5Y2V5piv5ZCm57yT5a2YJyB9KVxuICByZWFkb25seSBjYWNoZT86IGJvb2xlYW47XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAwLCBkZXNjcmlwdGlvbjogJ+aYr+WQpuWcqOiPnOWNleaYvuekuicgfSlcbiAgcmVhZG9ubHkgaGlkZT86IGJvb2xlYW47XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6ICfmtYvor5UnLCBkZXNjcmlwdGlvbjogJ+iPnOWNleWQjeensCcgfSlcbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAn5ZCN56ew5b+F5aGrJyB9KVxuICByZWFkb25seSB0aXRsZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJy8nLCBkZXNjcmlwdGlvbjogJ+i3r+eUseWcsOWdgCcgfSlcbiAgcmVhZG9ubHkgdXJsPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJ+a1i+ivlScsIGRlc2NyaXB0aW9uOiAn57uE5Lu25ZCN56ewJyB9KVxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICdob21lOmNyZWF0ZScsXG4gICAgZGVzY3JpcHRpb246ICfmk43kvZzop4TliJknLFxuICB9KVxuICByZWFkb25seSBhY3Rpb24/OiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiA5OSwgZGVzY3JpcHRpb246ICfmjpLluo8nIH0pXG4gIHJlYWRvbmx5IHNvcnQ/OiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogJy90ZW1wL2luZGV4LnZ1ZScsXG4gICAgZGVzY3JpcHRpb246ICfnu4Tku7bot6/lvoQnLFxuICB9KVxuICByZWFkb25seSBwYXRoPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwLCBkZXNjcmlwdGlvbjogJ+eItuiPnOWNlUlEIDA65pegJyB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICfniLbnuqdJROW/heWhqycgfSlcbiAgcmVhZG9ubHkgcGlkOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBBdXRoIH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9kZWNvcmF0b3IvYXV0aC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9pbnRlcmZhY2UvcmVzdWx0LmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBEZWxldGUsXG4gIEdldCxcbiAgUGFyYW0sXG4gIFBhcnNlQXJyYXlQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlPcGVyYXRpb24sIEFwaVRhZ3MgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgTWVudUNyZWF0ZUR0byB9IGZyb20gJy4vZHRvL01lbnVDcmVhdGUuZHRvJztcbmltcG9ydCB7IE1lbnVMaXN0RHRvIH0gZnJvbSAnLi9kdG8vTWVudUxpc3QuZHRvJztcbmltcG9ydCB7IE1lbnVVcGRhdGVEdG8gfSBmcm9tICcuL2R0by9NZW51VXBkYXRlLmR0byc7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcbmNvbnN0IERFRkFVTFRfU0VSVklDRSA9ICdtZW51U2VydmljZSc7XG5cbkBDb250cm9sbGVyKCdtZW51JylcbkBBcGlUYWdzKCfoj5zljZUnKVxuZXhwb3J0IGNsYXNzIE1lbnVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtZW51U2VydmljZTogTWVudVNlcnZpY2UpIHt9XG5cbiAgQFBvc3QoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIm+W7uuiPnOWNlScgfSlcbiAgQEF1dGgoWydtZW51OmNyZWF0ZSddKVxuICBhc3luYyBjcmVhdGUoQEJvZHkoKSBib2R5OiBNZW51Q3JlYXRlRHRvKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uY3JlYXRlKGJvZHkpO1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAn6I+c5Y2V5Yib5bu65oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG5cbiAgQFB1dCgnOmlkJylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfkv67mlLnoj5zljZUnIH0pXG4gIEBBdXRoKFsnbWVudTp1cGRhdGUnXSlcbiAgYXN5bmMgdXBkYXRlKFxuICAgIEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgYm9keTogTWVudVVwZGF0ZUR0byxcbiAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0udXBkYXRlKGlkLCBib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+iPnOWNleS/ruaUueaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBEZWxldGUoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIoOmZpOiPnOWNlScgfSlcbiAgQEF1dGgoWydtZW51OmRlbGV0ZSddKVxuICBhc3luYyBkZWxldGUoXG4gICAgQEJvZHkoJ2lkcycsIG5ldyBQYXJzZUFycmF5UGlwZSh7IGl0ZW1zOiBOdW1iZXIsIHNlcGFyYXRvcjogJywnIH0pKVxuICAgIGlkczogbnVtYmVyW10sXG4gICk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmRlbGV0ZShpZHMpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAn6I+c5Y2V5Yig6Zmk5oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG5cbiAgQEdldCgnbGlzdCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5YiX6KGo5p+l6K+iJyB9KVxuICBAQXV0aChbJ21lbnU6dmlldyddKVxuICBhc3luYyBsaXN0KFxuICAgIEBRdWVyeSgnYXR0cnMnLCBuZXcgUGFyc2VBcnJheVBpcGUoeyBpdGVtczogU3RyaW5nLCBzZXBhcmF0b3I6ICcsJyB9KSlcbiAgICBhdHRyczogQXJyYXk8TWVudUxpc3REdG8+LFxuICApOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXNbREVGQVVMVF9TRVJWSUNFXS5saXN0KGF0dHJzKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+iPnOWNleafpeivouaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWVudSB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvbWVudS5lbnRpdHknO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBNZW51Q29udHJvbGxlciB9IGZyb20gJy4vbWVudS5jb250cm9sbGVyJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tZW51LnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1R5cGVPcm1Nb2R1bGUuZm9yRmVhdHVyZShbTWVudV0pLCBBdXRoTW9kdWxlXSxcbiAgY29udHJvbGxlcnM6IFtNZW51Q29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW01lbnVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTWVudSB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvbWVudS5lbnRpdHknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgTWVudUNyZWF0ZUR0byB9IGZyb20gJy4vZHRvL01lbnVDcmVhdGUuZHRvJztcbmltcG9ydCB7IE1lbnVVcGRhdGVEdG8gfSBmcm9tICcuL2R0by9NZW51VXBkYXRlLmR0byc7XG5jb25zdCBERUZBVUxUX01PREVMID0gJ21lbnVNb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3RSZXBvc2l0b3J5KE1lbnUpIHByaXZhdGUgcmVhZG9ubHkgbWVudU1vZGVsOiBSZXBvc2l0b3J5PE1lbnU+LFxuICApIHt9XG5cbiAgYXN5bmMgY3JlYXRlKGJvZHk6IE1lbnVDcmVhdGVEdG8pOiBQcm9taXNlPE1lbnU+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5zYXZlKGJvZHkpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkOiBudW1iZXIsIGJvZHk6IE1lbnVVcGRhdGVEdG8pOiBQcm9taXNlPE1lbnU+IHtcbiAgICBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLnVwZGF0ZShpZCwgYm9keSk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZE9uZShpZCk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWRzOiBudW1iZXJbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZGVsZXRlKGlkcyk7XG4gIH1cblxuICBhc3luYyBsaXN0KGF0dHJzKTogUHJvbWlzZTxBcnJheTxNZW51Pj4ge1xuICAgIGlmIChhdHRyc1swXSA9PT0gJ2FsbCcpIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZCh7IHNlbGVjdDogYXR0cnMgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgUm9sZUNyZWF0ZUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAn566h55CG5ZGYJywgZGVzY3JpcHRpb246ICfnrqHnkIblkZjlkI3np7AnIH0pXG4gIEBJc05vdEVtcHR5KHsgbWVzc2FnZTogJ+WQjeensOW/heWhqycgfSlcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogMTAsXG4gICAgZGVzY3JpcHRpb246ICfnuqfliKsnLFxuICB9KVxuICBASXNOb3RFbXB0eSh7IG1lc3NhZ2U6ICfnuqfliKvlv4XloasnIH0pXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogJ+aIkeaYr+inkuWEv+aPj+i/sCcsXG4gICAgZGVzY3JpcHRpb246ICfop5LoibLmj4/ov7AnLFxuICB9KVxuICByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgUGFnaW5hdGlvbkR0byB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZHRvL3BhZ2luYXRpb24uZHRvJztcbmltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuZXhwb3J0IGNsYXNzIFJvbGVQYWdlc0R0byBleHRlbmRzIFBhZ2luYXRpb25EdG8ge1xuICBAQXBpUHJvcGVydHkoeyByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICfnrqHnkIblkZgnLCBkZXNjcmlwdGlvbjogJ+WQjeensCcgfSlcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogMSwgZGVzY3JpcHRpb246ICfnuqfliKsnIH0pXG4gIHJlYWRvbmx5IGxldmVsOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc0FycmF5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFJvbGVSdWxlc0R0byB7XG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogWzEsIDIsIDNdLFxuICAgIGRlc2NyaXB0aW9uOiAn6I+c5Y2VSUTmlbDnu4QnLFxuICB9KVxuICBASXNBcnJheSh7IG1lc3NhZ2U6ICfoj5zljZVJROW/hemhu+aYr+S4gOS4quaVsOe7hCcgfSlcbiAgcmVhZG9ubHkgbWVudUlkczogQXJyYXk8bnVtYmVyPjtcbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgUm9sZVVwZGF0ZUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6ICfnrqHnkIblkZgnLFxuICAgIGRlc2NyaXB0aW9uOiAn566h55CG5ZGY5ZCN56ewJyxcbiAgfSlcbiAgQElzTm90RW1wdHkoKVxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogMTAsXG4gICAgZGVzY3JpcHRpb246ICfnuqfliKsnLFxuICB9KVxuICBASXNOb3RFbXB0eSgpXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogJ+aIkeaYr+inkuWEv+aPj+i/sCcsXG4gICAgZGVzY3JpcHRpb246ICfop5LoibLmj4/ov7AnLFxuICB9KVxuICByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZGVjb3JhdG9yL2F1dGguZGVjb3JhdG9yJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgUG9zdCxcbiAgUHV0LFxuICBQYXJhbSxcbiAgUXVlcnksXG4gIERlbGV0ZSxcbiAgR2V0LFxuICBQYXJzZUFycmF5UGlwZSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpT3BlcmF0aW9uLCBBcGlUYWdzIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IFJvbGVDcmVhdGVEdG8gfSBmcm9tICcuL2R0by9Sb2xlQ3JlYXRlLmR0byc7XG5pbXBvcnQgeyBSb2xlTGlzdER0byB9IGZyb20gJy4vZHRvL1JvbGVMaXN0LmR0byc7XG5pbXBvcnQgeyBSb2xlUGFnZXNEdG8gfSBmcm9tICcuL2R0by9Sb2xlUGFnZXMuZHRvJztcbmltcG9ydCB7IFJvbGVSdWxlc0R0byB9IGZyb20gJy4vZHRvL1JvbGVSdWxlcy5kdG8nO1xuaW1wb3J0IHsgUm9sZVVwZGF0ZUR0byB9IGZyb20gJy4vZHRvL1JvbGVVcGRhdGUuZHRvJztcbmltcG9ydCB7IFJvbGVTZXJ2aWNlIH0gZnJvbSAnLi9yb2xlLnNlcnZpY2UnO1xuY29uc3QgREVGQVVMVF9TRVJWSUNFID0gJ3JvbGVTZXJ2aWNlJztcbkBDb250cm9sbGVyKCdyb2xlJylcbkBBcGlUYWdzKCfop5LoibInKVxuZXhwb3J0IGNsYXNzIFJvbGVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb2xlU2VydmljZTogUm9sZVNlcnZpY2UpIHt9XG5cbiAgQEdldCgnL2FjdGlvbnMvOmlkJylcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfmn6Xor6Lop5LoibLoj5zljZUnIH0pXG4gIEBBdXRoKFsnbWVudTp2aWV3JywgJ3JvbGU6dmlldyddKVxuICBhc3luYyBnZXRBY3Rpb25zKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uZ2V0QWN0aW9ucyhpZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfop5LoibLoj5zljZXmn6Xor6LmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBAUHV0KCdhY3Rpb25zLzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5L+u5pS56KeS6Imy5p2D6ZmQJyB9KVxuICBAQXV0aChbJ3JvbGU6dXBkYXRlJywgJ3JvbGU6dXBkYXRlJ10pXG4gIGFzeW5jIHNldEFjdGlvbihcbiAgICBAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcixcbiAgICBAQm9keSgpIGJvZHk6IFJvbGVSdWxlc0R0byxcbiAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uc2V0QWN0aW9uKGlkLCBib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ+inkuiJsuadg+mZkOS/ruaUueaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBQb3N0KClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliJvlu7rop5LoibInIH0pXG4gIEBBdXRoKFsncm9sZTpjcmVhdGUnXSlcbiAgYXN5bmMgY3JlYXRlKEBCb2R5KCkgYm9keTogUm9sZUNyZWF0ZUR0byk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmNyZWF0ZShib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+inkuiJsuWIm+W7uuaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIEBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiAn5L+u5pS56KeS6ImyJyB9KVxuICBAQXV0aChbJ3JvbGU6dXBkYXRlJ10pXG4gIGFzeW5jIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcixcbiAgICBAQm9keSgpIGJvZHk6IFJvbGVVcGRhdGVEdG8sXG4gICk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnVwZGF0ZShpZCwgYm9keSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfop5LoibLkv67mlLnmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBARGVsZXRlKClcbiAgQEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6ICfliKDpmaTop5LoibInIH0pXG4gIEBBdXRoKFsncm9sZTpkZWxldGUnXSlcbiAgYXN5bmMgZGVsZXRlKFxuICAgIEBCb2R5KCdpZHMnLCBuZXcgUGFyc2VBcnJheVBpcGUoeyBpdGVtczogTnVtYmVyLCBzZXBhcmF0b3I6ICcsJyB9KSlcbiAgICBpZHM6IG51bWJlcltdLFxuICApOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXNbREVGQVVMVF9TRVJWSUNFXS5kZWxldGUoaWRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+inkuiJsuWIoOmZpOaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBHZXQoKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIhumhteafpeivoicgfSlcbiAgQEF1dGgoWydyb2xlOnZpZXcnXSlcbiAgYXN5bmMgcGFnZXMoQFF1ZXJ5KCkgcXVlcnk6IFJvbGVQYWdlc0R0byk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnBhZ2VzKHF1ZXJ5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+inkuiJsuafpeivouaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBHZXQoJ2xpc3QnKVxuICBAQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogJ+WIl+ihqOafpeivoicgfSlcbiAgQEF1dGgoWydyb2xlOnZpZXcnXSlcbiAgYXN5bmMgbGlzdChcbiAgICBAUXVlcnkoJ2F0dHJzJywgbmV3IFBhcnNlQXJyYXlQaXBlKHsgaXRlbXM6IFN0cmluZywgc2VwYXJhdG9yOiAnLCcgfSkpXG4gICAgYXR0cnM6IEFycmF5PFJvbGVMaXN0RHRvPixcbiAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0ubGlzdChhdHRycyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfop5LoibLmn6Xor6LmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFJvbGUgfSBmcm9tICdAYXBwL2xpYnMvZGIvZW50aXR5L3JvbGUuZW50aXR5JztcbmltcG9ydCB7IFJvbGVNZW51IH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9yb2xlTWVudS5lbnRpdHknO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBSb2xlQ29udHJvbGxlciB9IGZyb20gJy4vcm9sZS5jb250cm9sbGVyJztcbmltcG9ydCB7IFJvbGVTZXJ2aWNlIH0gZnJvbSAnLi9yb2xlLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1R5cGVPcm1Nb2R1bGUuZm9yRmVhdHVyZShbUm9sZSwgUm9sZU1lbnVdKSwgQXV0aE1vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbUm9sZUNvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtSb2xlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFJvbGVNb2R1bGUge31cbiIsImltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2ludGVyZmFjZS9wYWdpbmF0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2VudGl0eS9yb2xlLmVudGl0eSc7XG5pbXBvcnQgeyBSb2xlTWVudSB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvcm9sZU1lbnUuZW50aXR5JztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uTW9kdWxlSW5pdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgTGlrZSwgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgUm9sZUNyZWF0ZUR0byB9IGZyb20gJy4vZHRvL1JvbGVDcmVhdGUuZHRvJztcbmltcG9ydCB7IFJvbGVQYWdlc0R0byB9IGZyb20gJy4vZHRvL1JvbGVQYWdlcy5kdG8nO1xuaW1wb3J0IHsgUm9sZVJ1bGVzRHRvIH0gZnJvbSAnLi9kdG8vUm9sZVJ1bGVzLmR0byc7XG5pbXBvcnQgeyBSb2xlVXBkYXRlRHRvIH0gZnJvbSAnLi9kdG8vUm9sZVVwZGF0ZS5kdG8nO1xuaW1wb3J0IHsgUm9sZVBhZ2VXaGVyZSB9IGZyb20gJy4vaW50ZXJmYWNlL1JvbGVQYWdlV2hlcmUuaW50ZXJmYWNlJztcbmNvbnN0IERFRkFVTFRfTU9ERUwgPSAncm9sZU1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvbGVTZXJ2aWNlIGltcGxlbWVudHMgT25Nb2R1bGVJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdFJlcG9zaXRvcnkoUm9sZSkgcHJpdmF0ZSByZWFkb25seSByb2xlTW9kZWw6IFJlcG9zaXRvcnk8Um9sZT4sXG4gICAgQEluamVjdFJlcG9zaXRvcnkoUm9sZU1lbnUpXG4gICAgcHJpdmF0ZSByZWFkb25seSByb2xlTWVudU1vZGVsOiBSZXBvc2l0b3J5PFJvbGVNZW51PixcbiAgKSB7fVxuXG4gIGFzeW5jIG9uTW9kdWxlSW5pdCgpIHtcbiAgICBjb25zdCByb3cgPSBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoMSk7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uc2F2ZSh7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAn6LaF57qn566h55CG5ZGYJyxcbiAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn5oul5pyJ5LiA5YiH5p2D6ZmQ55qE6LaF57qn566h55CG5ZGYJyxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ+i2hee6p+euoeeQhuWRmOinkuiJsuWIneWni+WMluaIkOWKn++8ge+8ge+8gScpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNldEFjdGlvbihpZDogbnVtYmVyLCBib2R5OiBSb2xlUnVsZXNEdG8pIHtcbiAgICBhd2FpdCB0aGlzLnJvbGVNZW51TW9kZWwuZGVsZXRlKHsgcm9sZUlkOiBpZCB9KTtcbiAgICBjb25zdCBhcnIgPSBib2R5Lm1lbnVJZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4geyByb2xlSWQ6IGlkLCBtZW51SWQ6IGl0ZW0gfTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yb2xlTWVudU1vZGVsLnNhdmUoYXJyKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFjdGlvbnMocm9sZUlkKTogUHJvbWlzZTxBcnJheTxudW1iZXI+PiB7XG4gICAgY29uc3QgbWVudXMgPSBhd2FpdCB0aGlzLnJvbGVNZW51TW9kZWwuZmluZCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICByb2xlSWQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBtZW51cy5tYXAoKGl0ZW0pID0+IGl0ZW0ubWVudUlkKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShib2R5OiBSb2xlQ3JlYXRlRHRvKTogUHJvbWlzZTxSb2xlPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uc2F2ZShib2R5KTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZDogbnVtYmVyLCBib2R5OiBSb2xlVXBkYXRlRHRvKTogUHJvbWlzZTxSb2xlPiB7XG4gICAgYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS51cGRhdGUoaWQsIGJvZHkpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoaWQpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmRlbGV0ZShpZHMpO1xuICB9XG5cbiAgYXN5bmMgcGFnZXMocXVlcnk6IFJvbGVQYWdlc0R0byk6IFByb21pc2U8UGFnaW5hdGlvbjxSb2xlPj4ge1xuICAgIGNvbnN0IHsgbGV2ZWwsIG5hbWUsIHBhZ2UsIGxpbWl0IH0gPSBxdWVyeTtcbiAgICBjb25zdCBtYW5hZ2VmaWx0ZXI6IFJvbGVQYWdlV2hlcmUgPSB7XG4gICAgICBza2lwOiAocGFnZSAtIDEpICogbGltaXQsXG4gICAgICB0YWtlOiBsaW1pdCxcbiAgICAgIHdoZXJlOiB7fSxcbiAgICB9O1xuXG4gICAgaWYgKG5hbWUpIG1hbmFnZWZpbHRlci53aGVyZS5uYW1lID0gTGlrZShgJSR7bmFtZX0lYCk7XG4gICAgaWYgKGxldmVsKSBtYW5hZ2VmaWx0ZXIud2hlcmUubGV2ZWwgPSBsZXZlbDtcblxuICAgIGNvbnN0IFtyb3dzLCB0b3RhbF0gPSBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRBbmRDb3VudChtYW5hZ2VmaWx0ZXIpO1xuICAgIHJldHVybiB7XG4gICAgICByb3dzLFxuICAgICAgdG90YWwsXG4gICAgICBwYWdlcjoge1xuICAgICAgICBwYWdlLFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIG9mZnNldDogKHBhZ2UgLSAxKSAqIGxpbWl0LFxuICAgICAgICBwYWdlVG90YWw6IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGxpc3QoYXR0cnMpOiBQcm9taXNlPEFycmF5PFJvbGU+PiB7XG4gICAgaWYgKGF0dHJzWzBdID09PSAnYWxsJykge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZCgpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kKHsgc2VsZWN0OiBhdHRycyB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQENvbnRyb2xsZXIoJ3VzZXInKVxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHt9XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi91c2VyLmNvbnRyb2xsZXInO1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICBjb250cm9sbGVyczogW1VzZXJDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHt9XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBTZXRNZXRhZGF0YSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IEF1dGhBY3Rpb24gPSAoYWN0aW9uOiBBcnJheTxzdHJpbmc+KSA9PlxuICBTZXRNZXRhZGF0YSgnYWN0aW9uJywgYWN0aW9uKTtcbiIsImltcG9ydCB7IGFwcGx5RGVjb3JhdG9ycywgVXNlR3VhcmRzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpQmVhcmVyQXV0aCwgQXBpVW5hdXRob3JpemVkUmVzcG9uc2UgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vZ3VhcmRzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgQWN0aW9uR3VhcmQgfSBmcm9tICcuLi9ndWFyZHMvYWN0aW9uLmd1YXJkJztcbmltcG9ydCB7IEF1dGhBY3Rpb24gfSBmcm9tICcuL2FjdGlvbi5kZWNvcmF0b3InO1xuXG4vLyDogZrlkIjoo4XppbDlmaggaHR0cHM6Ly9kb2NzLm5lc3Rqcy5jb20vY3VzdG9tLWRlY29yYXRvcnMjZGVjb3JhdG9yLWNvbXBvc2l0aW9uXG4vKipcbiAqIOmbhuaIkCBhY3Rpb24g6aqM6K+BID0+IHRva2VuIOino+aekFxuICogQHBhcmFtIGFjdGlvbiB7QXJyYXl9IOaTjeS9nOaVsOaNrlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEF1dGgoYWN0aW9uPzogQXJyYXk8c3RyaW5nPikge1xuICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgIEF1dGhBY3Rpb24oYWN0aW9uKSxcbiAgICBVc2VHdWFyZHMoQXV0aEd1YXJkLCBBY3Rpb25HdWFyZCksXG4gICAgQXBpQmVhcmVyQXV0aCgpLFxuICAgIEFwaVVuYXV0aG9yaXplZFJlc3BvbnNlKHsgZGVzY3JpcHRpb246ICdVbmF1dGhvcml6ZWRcIicgfSksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbURlY29yYXRvciwgRXhlY3V0aW9uQ29udGV4dCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IElwID0gY3JlYXRlUGFyYW1EZWNvcmF0b3IoXG4gIChkYXRhOiB1bmtub3duLCBjdHg6IEV4ZWN1dGlvbkNvbnRleHQpID0+IHtcbiAgICBjb25zdCByZXEgPSBjdHguc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdCgpO1xuICAgIGNvbnN0IGlwID1cbiAgICAgIHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSB8fCAvLyDliKTmlq3mmK/lkKbmnInlj43lkJHku6PnkIYgSVBcbiAgICAgIHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3MgfHwgLy8g5Yik5patIGNvbm5lY3Rpb24g55qE6L+c56iLIElQXG4gICAgICByZXEuc29ja2V0LnJlbW90ZUFkZHJlc3MgfHwgLy8g5Yik5pat5ZCO56uv55qEIHNvY2tldCDnmoQgSVBcbiAgICAgIHJlcS5jb25uZWN0aW9uLnNvY2tldC5yZW1vdGVBZGRyZXNzIHx8XG4gICAgICByZXEuaXA7XG4gICAgcmV0dXJuIGlwO1xuICB9LFxuKTtcbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25EdG8ge1xuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAxLFxuICAgIGRlc2NyaXB0aW9uOiAn6aG156CBJyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgfSlcbiAgcmVhZG9ubHkgcGFnZTogbnVtYmVyID0gMTtcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiAyMCxcbiAgICBkZXNjcmlwdGlvbjogJ+aVsOmHjycsXG4gICAgdHlwZTogJ251bWJlcicsXG4gIH0pXG4gIHJlYWRvbmx5IGxpbWl0OiBudW1iZXIgPSAyMDtcbn1cbiIsImltcG9ydCB7XG4gIEV4Y2VwdGlvbkZpbHRlcixcbiAgQ2F0Y2gsXG4gIEFyZ3VtZW50c0hvc3QsXG4gIEh0dHBFeGNlcHRpb24sXG4gIEh0dHBTdGF0dXMsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xuXG5AQ2F0Y2goKVxuZXhwb3J0IGNsYXNzIEh0dHBFeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBjYXRjaChleGNlcHRpb246IEh0dHBFeGNlcHRpb24sIGhvc3Q6IEFyZ3VtZW50c0hvc3QpIHtcbiAgICBjb25zdCBjdHggPSBob3N0LnN3aXRjaFRvSHR0cCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY3R4LmdldFJlc3BvbnNlPFJlc3BvbnNlPigpO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBudWxsO1xuICAgIGxldCBlcnJvciA9IG51bGw7XG4gICAgY29uc3Qgc3RhdHVzID1cbiAgICAgIGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEh0dHBFeGNlcHRpb25cbiAgICAgICAgPyBleGNlcHRpb24uZ2V0U3RhdHVzKClcbiAgICAgICAgOiBIdHRwU3RhdHVzLkJBRF9SRVFVRVNUO1xuICAgIGxldCBleGNlcHRpb25SZXNwb25zZTogYW55ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIGV4Y2VwdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1lc3NhZ2UgPSBleGNlcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh1dGlsLmlzRnVuY3Rpb24oZXhjZXB0aW9uLmdldFJlc3BvbnNlKSkge1xuICAgICAgICBleGNlcHRpb25SZXNwb25zZSA9IGV4Y2VwdGlvbi5nZXRSZXNwb25zZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhleGNlcHRpb25SZXNwb25zZSk7XG4gICAgICAgIGlmICh0eXBlb2YgZXhjZXB0aW9uUmVzcG9uc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICB0eXBlb2YgZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyBleGNlcHRpb25SZXNwb25zZS5tZXNzYWdlXG4gICAgICAgICAgICAgIDogZXhjZXB0aW9uUmVzcG9uc2UubWVzc2FnZVswXTtcbiAgICAgICAgICBlcnJvciA9IGV4Y2VwdGlvblJlc3BvbnNlLmVycm9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPSBleGNlcHRpb25SZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChleGNlcHRpb24ubWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlID0gZXhjZXB0aW9uLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzcG9uc2Uuc3RhdHVzKHN0YXR1cykuanNvbih7XG4gICAgICBjb2RlOiBzdGF0dXMsXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHBhdGg6IHJlc3BvbnNlLnJlcS51cmwsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZXJyb3IsXG4gICAgICAvLyAuLi5leGNlcHRpb25SZXNwb25zZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWVudSB9IGZyb20gJ0BhcHAvbGlicy9kYi9lbnRpdHkvbWVudS5lbnRpdHknO1xuaW1wb3J0IHsgUm9sZU1lbnUgfSBmcm9tICdAYXBwL2xpYnMvZGIvZW50aXR5L3JvbGVNZW51LmVudGl0eSc7XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDYW5BY3RpdmF0ZSxcbiAgRXhlY3V0aW9uQ29udGV4dCxcbiAgRm9yYmlkZGVuRXhjZXB0aW9uLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBSZWZsZWN0b3IgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSwgSW4gfSBmcm9tICd0eXBlb3JtJztcblxuLy8g6Ym05p2D5a6I5Y2rICDpibTliKvlvZPliY3nlKjmiLflhbPogZTop5LoibLmmK/lkKbnrKblkIggYXBpIOimgeaxgueahOadg+mZkOinhOWImVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZmxlY3RvcjogUmVmbGVjdG9yKSB7fVxuXG4gIGFzeW5jIGNhbkFjdGl2YXRlKGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAvLyDojrflj5blvZPliY0gYXBpIOaJgOmcgOimgeeahOinhOWImeaVsOe7hFxuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5yZWZsZWN0b3IuZ2V0PHN0cmluZ1tdPignYWN0aW9uJywgY29udGV4dC5nZXRIYW5kbGVyKCkpO1xuXG4gICAgaWYgKHJ1bGVzICYmIHJ1bGVzLmxlbmd0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyB1c2VyIH0gPSBjb250ZXh0LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgICAgICAgLy8g6I635Y+WIGdhdGV3YXkg5pWw5o2u5bqT5LiL55qE6I+c5Y2V5p2D6ZmQXG4gICAgICAgIGNvbnN0IHJvbGVNZW51TW9kZWwgPSBnZXRSZXBvc2l0b3J5KFJvbGVNZW51LCAnZ2F0ZXdheScpO1xuICAgICAgICBjb25zdCByb2xlTWVudUxpc3QgPSBhd2FpdCByb2xlTWVudU1vZGVsLmZpbmQoe1xuICAgICAgICAgIHdoZXJlOiB7IHJvbGVJZDogdXNlci5yb2xlSWQgfSxcbiAgICAgICAgICBzZWxlY3Q6IFsnbWVudUlkJ10sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtZW51SWRzID0gcm9sZU1lbnVMaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5tZW51SWQpO1xuICAgICAgICAvLyDojrflj5YgZ2F0ZXdheSDmlbDmja7lupPkuIvnmoToj5zljZVcbiAgICAgICAgY29uc3QgbWVudU1vZGVsID0gZ2V0UmVwb3NpdG9yeShNZW51LCAnZ2F0ZXdheScpO1xuICAgICAgICBjb25zdCBtZW51bGlzdCA9IGF3YWl0IG1lbnVNb2RlbC5maW5kKHtcbiAgICAgICAgICB3aGVyZTogeyBpZDogSW4obWVudUlkcyksIHR5cGU6IDMgfSwgLy8gdHlwZT0zIOS4uuadg+mZkFxuICAgICAgICAgIHNlbGVjdDogWydhY3Rpb24nXSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOinkuiJsuS4i+aLpeacieeahOaJgOacieadg+mZkFxuICAgICAgICBjb25zdCBhY3Rpb25MaXN0ID0gbWVudWxpc3QubWFwKChpdGVtKSA9PiBpdGVtLmFjdGlvbik7XG5cbiAgICAgICAgLy8g5Yik5pat5p2D6ZmQICDkuI3nrKblkIjpgIDlh7pcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIHJ1bGVzKSB7XG4gICAgICAgICAgaWYgKCFhY3Rpb25MaXN0LmluY2x1ZGVzKHJ1bGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXhjZXB0aW9uKHtcbiAgICAgICAgICAgICAgc3RhdHVzQ29kZTogJzQwMycsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfmnYPpmZDkuI3otrMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEZvcmJpZGRlbkV4Y2VwdGlvbih7XG4gICAgICAgICAgZXJyb3I6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDYW5BY3RpdmF0ZSxcbiAgRXhlY3V0aW9uQ29udGV4dCxcbiAgVW5hdXRob3JpemVkRXhjZXB0aW9uLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ2FwcHMvZ2F0ZXdheXMvc3JjL3N5c3RlbS9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8vIHRva2VuIOmqjOivgVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG4gIGNhbkFjdGl2YXRlKFxuICAgIGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQsXG4gICk6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+IHwgT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdCgpO1xuICAgIGNvbnN0IHRva2VuID0gcmVxdWVzdC5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgdGhyb3cgbmV3IFVuYXV0aG9yaXplZEV4Y2VwdGlvbih7XG4gICAgICAgIGVycm9yOiAnNDAxJyxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+WFiOeZu+W9le+8ge+8ge+8gScsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLnZlcnRpZnlUb2tlbihcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCxcbiAgICAgICk7XG4gICAgICByZXF1ZXN0LnVzZXIgPSB1c2VyO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oe1xuICAgICAgICBlcnJvcjogJzQwMScsXG4gICAgICAgIG1lc3NhZ2U6ICfnmbvlvZXnirbmgIHlvILluLjvvIzor7fph43mlrDnmbvlvZUnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBOZXN0SW50ZXJjZXB0b3IsXG4gIEV4ZWN1dGlvbkNvbnRleHQsXG4gIENhbGxIYW5kbGVyLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNwb25zZUludGVyY2VwdG9ycyBpbXBsZW1lbnRzIE5lc3RJbnRlcmNlcHRvciB7XG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8g6K+35rGC55qE5YaF5a65XG4gICAgY29uc3QgcmVxdWVzdCA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdCgpO1xuICAgIC8vIOi/lOWbnueahOWGheWuuVxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gY29udGV4dC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXNwb25zZSgpO1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoKS5waXBlKFxuICAgICAgbWFwKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgY29kZSwgcmVzdWx0IH0gPSBkYXRhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvZGU6IGNvZGUgfHwgMjAwLFxuICAgICAgICAgIHBhdGg6IHJlcXVlc3QudXJsLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgJ+aTjeS9nOaIkOWKnycsXG4gICAgICAgICAgcmVzcG9uc2V0aW1lOiBgJHtEYXRlLm5vdygpIC0gbm93fW1zYCxcbiAgICAgICAgICByZXN1bHQ6IHJlc3VsdCB8fCBkYXRhLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIE1hbnlUb01hbnksXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJy4vY29udGVudC5lbnRpdHknO1xuXG5ARW50aXR5KCdjYXRlZ29yeScpXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnkge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMzIsIGNvbW1lbnQ6ICflkI3np7AnIH0pXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiAzMiwgY29tbWVudDogJ+WIhue7hCcgfSlcbiAgZ3JvdXA6IHN0cmluZztcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+aOkuW6jycgfSlcbiAgc29ydDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5YiG57G75Zu+JyB9KVxuICBzaW1nOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmj4/ov7AnIH0pXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfniLZJRCcgfSlcbiAgcGlkOiBudW1iZXI7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oeyB0eXBlOiAnZGF0ZXRpbWUnLCBjb21tZW50OiAn5Yib5bu65pe26Ze0JyB9KVxuICBjdGltZTogc3RyaW5nO1xuXG4gIEBNYW55VG9NYW55KCgpID0+IENvbnRlbnQsIChjb250ZW50KSA9PiBjb250ZW50LmNhdGVnb3J5cylcbiAgY29udGVudDogQ29udGVudFtdO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5UYWJsZSxcbiAgTWFueVRvTWFueSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbiAgVXBkYXRlRGF0ZUNvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnkuZW50aXR5JztcbmltcG9ydCB7IFRhZyB9IGZyb20gJy4vdGFnLmVudGl0eSc7XG5cbkBFbnRpdHkoJ2NvbnRlbnQnKVxuZXhwb3J0IGNsYXNzIENvbnRlbnQge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmoIfpopgnIH0pXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6ICdsb25ndGV4dCcsIGNvbW1lbnQ6ICflhoXlrrknLCBzZWxlY3Q6IGZhbHNlIH0pXG4gIGNvbnRlbnQ6IHN0cmluZztcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+a1j+iniOaVsOmHjycsIGRlZmF1bHQ6IDAgfSlcbiAgc2NhbjogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5o6o6I2Q5oyH5pWwJywgZGVmYXVsdDogMCB9KVxuICByZWNvbTogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn572u6aG2JywgZGVmYXVsdDogZmFsc2UgfSlcbiAgdG9wOiBib29sZWFuO1xuXG4gIEBDb2x1bW4oeyBkZWZhdWx0OiAnZHJhZnQnLCBjb21tZW50OiAn54q25oCBJyB9KSAvLyBkcmFmdDrojYnnqL8gIHVwX3JhY2s65LiK5p62ICBkb3duX3JhY2s65LiL5p62XG4gIHN0YXR1czogc3RyaW5nO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgdHlwZTogJ2RhdGV0aW1lJywgY29tbWVudDogJ+WIm+W7uuaXtumXtCcgfSlcbiAgY3RpbWU6IHN0cmluZztcblxuICBAVXBkYXRlRGF0ZUNvbHVtbih7IHR5cGU6ICdkYXRldGltZScsIGNvbW1lbnQ6ICfmm7TmlrDml7bpl7QnIH0pXG4gIHV0aW1lOiBzdHJpbmc7XG5cbiAgQE1hbnlUb01hbnkoKCkgPT4gVGFnLCAodGFnKSA9PiB0YWcuY29udGVudClcbiAgQEpvaW5UYWJsZSh7IG5hbWU6ICdjb250ZW50X3RhZycgfSlcbiAgdGFnczogVGFnW107XG5cbiAgQE1hbnlUb01hbnkoKCkgPT4gQ2F0ZWdvcnksIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuY29udGVudClcbiAgQEpvaW5UYWJsZSh7IG5hbWU6ICdjb250ZW50X2NhdGVnb3J5JyB9KVxuICBjYXRlZ29yeXM6IENhdGVnb3J5W107XG59XG4iLCJpbXBvcnQge1xuICBDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIEVudGl0eSxcbiAgTWFueVRvTWFueSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnLi9jb250ZW50LmVudGl0eSc7XG5cbkBFbnRpdHkoJ3RhZycpXG5leHBvcnQgY2xhc3MgVGFnIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMyLCBjb21tZW50OiAn5YiG57uEJyB9KVxuICBncm91cDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMyLCBjb21tZW50OiAn5ZCN56ewJyB9KVxuICBuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmjpLluo8nLCBkZWZhdWx0OiA5OSB9KVxuICBzb3J0OiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfliIbnsbvlm74nLCBkZWZhdWx0OiAnJyB9KVxuICBzaW1nOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmj4/ov7AnLCBkZWZhdWx0OiAnJyB9KVxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgdHlwZTogJ2RhdGV0aW1lJywgY29tbWVudDogJ+WIm+W7uuaXtumXtCcgfSlcbiAgY3RpbWU6IHN0cmluZztcblxuICBATWFueVRvTWFueSgoKSA9PiBDb250ZW50LCAoY29udGVudCkgPT4gY29udGVudC50YWdzKVxuICBjb250ZW50OiBDb250ZW50W107XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IExvZ2luTG9nIH0gZnJvbSAnLi9lbnRpdHkvbG9naW5Mb2cuZW50aXR5JztcbmltcG9ydCB7IE1hbmFnZSB9IGZyb20gJy4vZW50aXR5L21hbmFnZS5lbnRpdHknO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vZW50aXR5L21lbnUuZW50aXR5JztcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuL2VudGl0eS9yb2xlLmVudGl0eSc7XG5pbXBvcnQgeyBSb2xlTWVudSB9IGZyb20gJy4vZW50aXR5L3JvbGVNZW51LmVudGl0eSc7XG5pbXBvcnQgeyBTZXR0aW5nIH0gZnJvbSAnLi9lbnRpdHkvc2V0dGluZy5lbnRpdHknO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vZW50aXR5L3VzZXIuZW50aXR5JztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi9jbXMvY2F0ZWdvcnkuZW50aXR5JztcbmltcG9ydCB7IFRhZyB9IGZyb20gJy4vY21zL3RhZy5lbnRpdHknO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJy4vY21zL2NvbnRlbnQuZW50aXR5JztcblxuLy8gdHlwZW9ybSDlv4XpobvmnInkuIDkuKrpu5jorqTmlbDmja7lupPvvIzlkKbkvqfkvJrlh7rnjrDlvILluLjvvIzmiYDku6XnvZHlhbPkuLrpu5jorqTmnI3liqHlmahcbmNvbnN0IGdhdGV3YXlEQiA9IFR5cGVPcm1Nb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgdXNlRmFjdG9yeTogYXN5bmMgKCkgPT4gKHtcbiAgICBuYW1lOiAnZ2F0ZXdheScsXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuREJfUE9SVCksXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkdBVEVXQVlfREJfVVNFUk5BTUUsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkdBVEVXQVlfREJfUEFTU1dPUkQsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkdBVEVXQVlfREJfREFUQUJTRSxcbiAgICB0eXBlOiAnbXlzcWwnLFxuICAgIGVudGl0aWVzOiBbUm9sZSwgTWFuYWdlLCBNZW51LCBTZXR0aW5nLCBSb2xlTWVudSwgTG9naW5Mb2ddLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGxvZ2dlcjogJ2ZpbGUnLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAgdGltZXpvbmU6ICdaJyxcbiAgfSksXG59KTtcblxuY29uc3QgYmxvZ0RCID0gVHlwZU9ybU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICBuYW1lOiAnYmxvZycsXG4gIHVzZUZhY3Rvcnk6ICgpID0+ICh7XG4gICAgbmFtZTogJ2Jsb2cnLFxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkRCX1BPUlQpLFxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5CTE9HX0RCX1VTRVJOQU1FLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5CTE9HX0RCX1BBU1NXT1JELFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5CTE9HX0RCX0RBVEFCU0UsXG4gICAgdHlwZTogJ215c3FsJyxcbiAgICBlbnRpdGllczogW0NhdGVnb3J5LCBUYWcsIENvbnRlbnRdLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGxvZ2dlcjogJ2ZpbGUnLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAgdGltZXpvbmU6ICdaJyxcbiAgfSksXG59KTtcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtnYXRld2F5REIsIGJsb2dEQl0sXG59KVxuZXhwb3J0IGNsYXNzIERiTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICBFbnRpdHksXG4gIENvbHVtbixcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ2xvZ2luX2xvZycpXG5leHBvcnQgY2xhc3MgTG9naW5Mb2cge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNjQsIGNvbW1lbnQ6ICfnlKjmiLflkI0nIH0pXG4gIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICflhbPogZRJRCcgfSlcbiAgbWFuYWdlSWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+eZu+W9lUlQJyB9KVxuICBpcDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5omA5bGe5Zyw5Z2AJywgZGVmYXVsdDogJycgfSlcbiAgYWRkcmVzczogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn55m75b2V5bmz5Y+wJyB9KVxuICB1YTogc3RyaW5nO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgdHlwZTogJ2RhdGV0aW1lJyB9KVxuICBsb2dpbl90aW1lOiBzdHJpbmc7XG5cbiAgLy8gQE1hbnlUb01hbnkoKCkgPT4gTWVudSwgKG1lbnUpID0+IG1lbnUucm9sZSlcbiAgLy8gQEpvaW5UYWJsZSh7XG4gIC8vICAgbmFtZTogJ3JvbGVfbWVudScsXG4gIC8vICAgLy8gam9pbkNvbHVtbnM6IFt7IG5hbWU6ICd1c2VyX2lkJyB9XSxcbiAgLy8gICAvLyBpbnZlcnNlSm9pbkNvbHVtbnM6IFt7IG5hbWU6ICdyb2xlX2lkJyB9XSxcbiAgLy8gfSlcbiAgLy8gbWVudTogTWVudVtdO1xufVxuIiwiaW1wb3J0IHtcbiAgRW50aXR5LFxuICBDb2x1bW4sXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIEluZGV4LFxufSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgnbWFuYWdlJylcbmV4cG9ydCBjbGFzcyBNYW5hZ2Uge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNjQgfSlcbiAgdXNlcm5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgc2VsZWN0OiBmYWxzZSwgbGVuZ3RoOiAxMjggfSlcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiA2NCwgZGVmYXVsdDogJ+euoeeQhuWRmCcgfSlcbiAgbmlja25hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICBkZWZhdWx0OlxuICAgICAgJ2h0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXJXaWFmWGRFN0FtQW00RjkwVUpkNnl1bmdKUlJaUGliaWJUT2dJRnNGNHZxN0xTSExpYUdXWm1sdElPMmNMaWJpYTNMM1V6V2xTWEk0WTZvZmcvMTMyJyxcbiAgfSlcbiAgYXZhdGFyOiBzdHJpbmc7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oeyB0eXBlOiAnZGF0ZXRpbWUnIH0pXG4gIGN0aW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIEBJbmRleCgpXG4gIHJvbGVJZDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgnbWVudScpXG5leHBvcnQgY2xhc3MgTWVudSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICBudWxsYWJsZTogZmFsc2UsXG4gICAgZGVmYXVsdDogMSxcbiAgICBjb21tZW50OiAnMDrnm67lvZUgMTroj5zljZUgMjrlpJbpk74gMzrop4TliJknLFxuICB9KVxuICB0eXBlOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMzAsIG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogJycsIGNvbW1lbnQ6ICflm77moIcnIH0pXG4gIGljb246IHN0cmluZztcblxuICBAQ29sdW1uKHsgZGVmYXVsdDogMCwgbnVsbGFibGU6IGZhbHNlLCBjb21tZW50OiAn6I+c5Y2V5piv5ZCm57yT5a2YJyB9KVxuICBjYWNoZTogYm9vbGVhbjtcblxuICBAQ29sdW1uKHsgZGVmYXVsdDogMCwgbnVsbGFibGU6IGZhbHNlLCBjb21tZW50OiAn5piv5ZCm5Zyo6I+c5Y2V5pi+56S6JyB9KVxuICBoaWRlOiBib29sZWFuO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMwLCBudWxsYWJsZTogZmFsc2UsIGRlZmF1bHQ6ICcnLCBjb21tZW50OiAn6I+c5Y2V5ZCN56ewJyB9KVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDEwMCwgbnVsbGFibGU6IGZhbHNlLCBkZWZhdWx0OiAnJywgY29tbWVudDogJ+i3r+eUseWcsOWdgCcgfSlcbiAgdXJsOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMjAsIG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogJycsIGNvbW1lbnQ6ICfnu4Tku7blkI3np7AnIH0pXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiA1MCwgbnVsbGFibGU6IHRydWUsIGRlZmF1bHQ6ICcnLCBjb21tZW50OiAn5pON5L2c6KeE5YiZJyB9KVxuICBhY3Rpb246IHN0cmluZztcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IGZhbHNlLCBkZWZhdWx0OiA5OSwgY29tbWVudDogJ+aOkuW6jycgfSlcbiAgc29ydDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogZmFsc2UsIGRlZmF1bHQ6ICcnLCBjb21tZW50OiAn57uE5Lu26Lev5b6EJyB9KVxuICBwYXRoOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogMCwgY29tbWVudDogJ+eItuiPnOWNlUlEIDA65pegJyB9KVxuICBwaWQ6IG51bWJlcjtcblxuICAvLyBATWFueVRvTWFueSgoKSA9PiBSb2xlLCAocm9sZSkgPT4gcm9sZS5tZW51KVxuICAvLyByb2xlOiBSb2xlW107XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIENvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xuXG5ARW50aXR5KCdyb2xlJylcbmV4cG9ydCBjbGFzcyBSb2xlIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDEwIH0pXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgbGV2ZWw6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAvLyBATWFueVRvTWFueSgoKSA9PiBNZW51LCAobWVudSkgPT4gbWVudS5yb2xlKVxuICAvLyBASm9pblRhYmxlKHtcbiAgLy8gICBuYW1lOiAncm9sZV9tZW51JyxcbiAgLy8gICAvLyBqb2luQ29sdW1uczogW3sgbmFtZTogJ3VzZXJfaWQnIH1dLFxuICAvLyAgIC8vIGludmVyc2VKb2luQ29sdW1uczogW3sgbmFtZTogJ3JvbGVfaWQnIH1dLFxuICAvLyB9KVxuICAvLyBtZW51OiBNZW51W107XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIENvbHVtbiwgSW5kZXgsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgncm9sZV9tZW51JylcbmV4cG9ydCBjbGFzcyBSb2xlTWVudSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+inkuiJsklEJyB9KVxuICBASW5kZXgoKVxuICByb2xlSWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+iPnOWNlUlEJyB9KVxuICBASW5kZXgoKVxuICBtZW51SWQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ3NldHRpbmcnKVxuZXhwb3J0IGNsYXNzIFNldHRpbmcge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMzAsIGNvbW1lbnQ6ICflkI3np7AnLCBudWxsYWJsZTogZmFsc2UgfSlcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMwLCBjb21tZW50OiAn6ZSu5ZCNJywgdW5pcXVlOiB0cnVlLCBudWxsYWJsZTogZmFsc2UgfSlcbiAga2V5OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHR5cGU6ICd0ZXh0JywgY29tbWVudDogJ+mUruWAvCcsIG51bGxhYmxlOiBmYWxzZSB9KVxuICB2YWx1ZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMwLCBjb21tZW50OiAn5YiG57uEJywgZGVmYXVsdDogJycsIG51bGxhYmxlOiBmYWxzZSB9KVxuICBncm91cDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIGxlbmd0aDogMTAsXG4gICAgY29tbWVudDogJ+aVsOaNruexu+WeiycsXG4gICAgbnVsbGFibGU6IGZhbHNlLFxuICB9KVxuICB2YWx1ZXR5cGU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+aOkuW6jycsIG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogMTAgfSlcbiAgc29ydDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiAndGV4dCcsIGNvbW1lbnQ6ICflpIfms6gnIH0pXG4gIGNvbW1vbjogc3RyaW5nO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9saWJzLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYnMuc2VydmljZSc7XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBMaWJzU2VydmljZSB9IGZyb20gJy4vbGlicy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJy4vY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgRGJNb2R1bGUgfSBmcm9tICcuL2RiL2RiLm1vZHVsZSc7XG5pbXBvcnQgeyBDcm9uU2VydmljZSB9IGZyb20gJy4vdXRpbHMvY3Jvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVkdWxlTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9zY2hlZHVsZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdhcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGJNb2R1bGUsIFNjaGVkdWxlTW9kdWxlLmZvclJvb3QoKSwgQ29uZmlnTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbTGlic1NlcnZpY2UsIENyb25TZXJ2aWNlXSxcbiAgZXhwb3J0czogW0xpYnNTZXJ2aWNlLCBDcm9uU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIExpYnNNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaWJzU2VydmljZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ3JvbiwgSW50ZXJ2YWwgfSBmcm9tICdAbmVzdGpzL3NjaGVkdWxlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdhcHBzL2dhdGV3YXlzL3NyYy9zeXN0ZW0vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXIgPSBuZXcgTG9nZ2VyKENyb25TZXJ2aWNlLm5hbWUpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgLy8g5q+P5YiG6ZKfIDMg56eS5pe25omn6KGMXG4gIC8vIEBDcm9uKCczICogKiAqICogKicpXG4gIC8vIGhhbmRsZUNyb24oKSB7XG4gIC8vICAgY29uc29sZS5sb2coJzExMTExJyk7XG4gIC8vICAgdGhpcy5sb2dnZXIuZGVidWcoJ0NhbGxlZCB3aGVuIHRoZSBjdXJyZW50IHNlY29uZCBpcyA0NScpO1xuICAvLyB9XG5cbiAgLy8gMTBzIOaJp+ihjOS4gOasoSDliLfmlrDnjq/looPlj5jph49cbiAgQEludGVydmFsKDEwMDAwKVxuICBhc3luYyBjcm9uU3luY0NvbmZpZygpIHtcbiAgICBhd2FpdCB0aGlzLmNvbmZpZ1NlcnZpY2Uuc3luY0NvbmZpZygpO1xuICB9XG5cbiAgLy8g5q+P5aSpIDIzLjAxIOaJp+ihjOS4gOasoVxuICBAQ3JvbignMCAxIDIzICogKiAqJylcbiAgaGFuZGxlQ3JvbigpIHtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnQ2FsbGVkIHdoZW4gdGhlIGN1cnJlbnQgc2Vjb25kIGlzIDQ1Jyk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2p3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9wYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3NjaGVkdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvc3dhZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3R5cGVvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3MtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxpYi1xcXdyeS15eXlqXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1YS1wYXJzZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgSHR0cEV4Y2VwdGlvbkZpbHRlciB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vZmlsdGVycy9odHRwLWV4Y2VwdGlvbi5maWx0ZXInO1xuaW1wb3J0IHsgUmVzcG9uc2VJbnRlcmNlcHRvcnMgfSBmcm9tICdAYXBwL2xpYnMvY29tbW9uL2ludGVyY2VwdG9yL3Jlc3BvbnNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFZhbGlkYXRpb25QaXBlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgTWljcm9zZXJ2aWNlT3B0aW9ucywgVHJhbnNwb3J0IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IFN3YWdnZXJNb2R1bGUsIERvY3VtZW50QnVpbGRlciB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBHYXRld2F5c01vZHVsZSB9IGZyb20gJy4vZ2F0ZXdheXMubW9kdWxlJztcbmltcG9ydCB7IGFkZHJlc3MgfSBmcm9tICdpcCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgY29uc3QgYXBwID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlKEdhdGV3YXlzTW9kdWxlLCB7XG4gICAgbG9nZ2VyOiBbJ2Vycm9yJywgJ3dhcm4nXSxcbiAgfSk7XG5cbiAgYXBwLmNvbm5lY3RNaWNyb3NlcnZpY2U8TWljcm9zZXJ2aWNlT3B0aW9ucz4oe1xuICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlRDUCxcbiAgICBvcHRpb25zOiB7IHJldHJ5QXR0ZW1wdHM6IDUsIHJldHJ5RGVsYXk6IDMwMDAgfSxcbiAgfSk7XG5cbiAgYXdhaXQgYXBwLnN0YXJ0QWxsTWljcm9zZXJ2aWNlcygpO1xuXG4gIC8vIOWFqOWxgOmqjOivgVxuICBhcHAudXNlR2xvYmFsUGlwZXMoXG4gICAgbmV3IFZhbGlkYXRpb25QaXBlKHtcbiAgICAgIGRpc2FibGVFcnJvck1lc3NhZ2VzOiBmYWxzZSwgLy8g5YWz6Zet6K+m57uG6ZSZ6K+v5L+h5oGvXG4gICAgICB0cmFuc2Zvcm06IHRydWUsIC8vIOexu+Wei+i9rOaNolxuICAgIH0pLFxuICApO1xuICAvLyDlhajlsYDms6jlhozlk43lupTmi6bmiKrlmahcbiAgYXBwLnVzZUdsb2JhbEludGVyY2VwdG9ycyhuZXcgUmVzcG9uc2VJbnRlcmNlcHRvcnMoKSk7XG4gIC8vIOWFqOWxgOW8guW4uOi/h+a7pFxuICBhcHAudXNlR2xvYmFsRmlsdGVycyhuZXcgSHR0cEV4Y2VwdGlvbkZpbHRlcigpKTtcbiAgLy8g5YWo5bGA6Lev5b6E5YmN57yAO1xuICBhcHAuc2V0R2xvYmFsUHJlZml4KCdhcGkvdjEnKTtcbiAgLy8g5aSE55CG6Leo5Z+fXG4gIGFwcC5lbmFibGVDb3JzKCk7XG5cbiAgY29uc3QgY29uZmlnID0gbmV3IERvY3VtZW50QnVpbGRlcigpXG4gICAgLnNldFRpdGxlKCdOZXN0anMgbWljcm9zZXJ2aWNlISEhJylcbiAgICAuc2V0RGVzY3JpcHRpb24oJ1RoZSBOZXN0anMgbWljcm9zZXJ2aWNlIEFQSSBkZXNjcmlwdGlvbicpXG4gICAgLnNldFZlcnNpb24oJzEuMCcpXG4gICAgLmFkZEJlYXJlckF1dGgoKVxuICAgIC5idWlsZCgpO1xuICBjb25zdCBkb2N1bWVudCA9IFN3YWdnZXJNb2R1bGUuY3JlYXRlRG9jdW1lbnQoYXBwLCBjb25maWcpO1xuICBTd2FnZ2VyTW9kdWxlLnNldHVwKCdhcGkvdjEvZG9jJywgYXBwLCBkb2N1bWVudCk7XG5cbiAgYXdhaXQgYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5HQVRFV0FZU19QT1JUIHx8IDMwMDAsICgpID0+IHtcbiAgICBjb25zb2xlLmluZm8oXG4gICAgICBgR2F0ZXdheXMgcnVuaW5nIGh0dHA6Ly8ke2FkZHJlc3MoKX06JHtwcm9jZXNzLmVudi5HQVRFV0FZU19QT1JUfWAsXG4gICAgKTtcbiAgfSk7XG59XG5ib290c3RyYXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==