/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/blog/src/blog.module.ts":
/*!**************************************!*\
  !*** ./apps/blog/src/blog.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const category_module_1 = __webpack_require__(/*! ./category/category.module */ "./apps/blog/src/category/category.module.ts");
const tag_module_1 = __webpack_require__(/*! ./tag/tag.module */ "./apps/blog/src/tag/tag.module.ts");
const content_module_1 = __webpack_require__(/*! ./content/content.module */ "./apps/blog/src/content/content.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const db_module_1 = __webpack_require__(/*! @app/libs/db/db.module */ "./libs/src/db/db.module.ts");
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            tag_module_1.TagModule,
            db_module_1.DbModule,
            category_module_1.CategoryModule,
            content_module_1.ContentModule,
        ],
    })
], BlogModule);
exports.BlogModule = BlogModule;


/***/ }),

/***/ "./apps/blog/src/category/category.controller.ts":
/*!*******************************************************!*\
  !*** ./apps/blog/src/category/category.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const category_service_1 = __webpack_require__(/*! ./category.service */ "./apps/blog/src/category/category.service.ts");
const DEFAULT_SERVICE = 'categoryService';
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async list(query) {
        const result = await this[DEFAULT_SERVICE].list(query.attrs);
        return {
            code: 200,
            message: '分类查询成功',
            result,
        };
    }
    async create(body) {
        const result = await this[DEFAULT_SERVICE].create(body);
        return {
            code: 200,
            message: '分类创建成功',
            result,
        };
    }
    async update(body) {
        const { id } = body, rest = __rest(body, ["id"]);
        const result = await this[DEFAULT_SERVICE].update(id, rest);
        return {
            code: 200,
            message: '分类更新成功',
            result,
        };
    }
    async delete(body) {
        const result = await this[DEFAULT_SERVICE].delete(body.ids);
        return {
            code: 200,
            message: '分类删除成功',
            result,
        };
    }
    async detail(body) {
        const result = await this[DEFAULT_SERVICE].detail(body.id);
        return {
            code: 200,
            message: '分类查询成功',
            result,
        };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ category: 'list' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CategoryController.prototype, "list", null);
__decorate([
    (0, microservices_1.MessagePattern)({ category: 'create' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CategoryController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ category: 'update' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CategoryController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ category: 'delete' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], CategoryController.prototype, "delete", null);
__decorate([
    (0, microservices_1.MessagePattern)({ category: 'detail' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CategoryController.prototype, "detail", null);
CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [typeof (_f = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _f : Object])
], CategoryController);
exports.CategoryController = CategoryController;


/***/ }),

/***/ "./apps/blog/src/category/category.module.ts":
/*!***************************************************!*\
  !*** ./apps/blog/src/category/category.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const utils_1 = __webpack_require__(/*! @app/libs/utils/utils */ "./libs/src/utils/utils.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const category_controller_1 = __webpack_require__(/*! ./category.controller */ "./apps/blog/src/category/category.controller.ts");
const category_service_1 = __webpack_require__(/*! ./category.service */ "./apps/blog/src/category/category.service.ts");
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [category_controller_1.CategoryController],
        providers: [(0, utils_1.lazyLoadDB)('blog', 'Category'), category_service_1.CategoryService],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;


/***/ }),

/***/ "./apps/blog/src/category/category.service.ts":
/*!****************************************************!*\
  !*** ./apps/blog/src/category/category.service.ts ***!
  \****************************************************/
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
exports.CategoryService = void 0;
const category_entity_1 = __webpack_require__(/*! @app/libs/db/cms/category.entity */ "./libs/src/db/cms/category.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const DEFAULT_MODEL = 'categoryModel';
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async list(attrs) {
        if (attrs[0] === 'all') {
            return await this[DEFAULT_MODEL].find();
        }
        return await this[DEFAULT_MODEL].find({ select: attrs });
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
    async detail(id) {
        return await this[DEFAULT_MODEL].findOne(id);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategoryService);
exports.CategoryService = CategoryService;


/***/ }),

/***/ "./apps/blog/src/content/content.controller.ts":
/*!*****************************************************!*\
  !*** ./apps/blog/src/content/content.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ContentController = class ContentController {
};
ContentController = __decorate([
    (0, common_1.Controller)('content')
], ContentController);
exports.ContentController = ContentController;


/***/ }),

/***/ "./apps/blog/src/content/content.module.ts":
/*!*************************************************!*\
  !*** ./apps/blog/src/content/content.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentModule = void 0;
const utils_1 = __webpack_require__(/*! @app/libs/utils/utils */ "./libs/src/utils/utils.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const content_controller_1 = __webpack_require__(/*! ./content.controller */ "./apps/blog/src/content/content.controller.ts");
const content_service_1 = __webpack_require__(/*! ./content.service */ "./apps/blog/src/content/content.service.ts");
let ContentModule = class ContentModule {
};
ContentModule = __decorate([
    (0, common_1.Module)({
        controllers: [content_controller_1.ContentController],
        providers: [(0, utils_1.lazyLoadDB)('blog', 'Content'), content_service_1.ContentService],
    })
], ContentModule);
exports.ContentModule = ContentModule;


/***/ }),

/***/ "./apps/blog/src/content/content.service.ts":
/*!**************************************************!*\
  !*** ./apps/blog/src/content/content.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ContentService = class ContentService {
};
ContentService = __decorate([
    (0, common_1.Injectable)()
], ContentService);
exports.ContentService = ContentService;


/***/ }),

/***/ "./apps/blog/src/tag/tag.controller.ts":
/*!*********************************************!*\
  !*** ./apps/blog/src/tag/tag.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const tag_service_1 = __webpack_require__(/*! ./tag.service */ "./apps/blog/src/tag/tag.service.ts");
const DEFAULT_SERVICE = 'tagService';
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    async list(query) {
        const result = await this[DEFAULT_SERVICE].list(query.attrs);
        return {
            code: 200,
            message: '标签查询成功',
            result,
        };
    }
    async create(body) {
        const result = await this[DEFAULT_SERVICE].create(body);
        return {
            code: 200,
            message: '标签创建成功',
            result,
        };
    }
    async update(body) {
        const { id } = body, rest = __rest(body, ["id"]);
        const result = await this[DEFAULT_SERVICE].update(id, rest);
        return {
            code: 200,
            message: '标签更新成功',
            result,
        };
    }
    async delete(body) {
        const result = await this[DEFAULT_SERVICE].delete(body.ids);
        return {
            code: 200,
            message: '标签删除成功',
            result,
        };
    }
    async detail(body) {
        const result = await this[DEFAULT_SERVICE].detail(body.id);
        return {
            code: 200,
            message: '标签查询成功',
            result,
        };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ tag: 'list' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], TagController.prototype, "list", null);
__decorate([
    (0, microservices_1.MessagePattern)({ tag: 'create' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TagController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ tag: 'update' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TagController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ tag: 'delete' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TagController.prototype, "delete", null);
__decorate([
    (0, microservices_1.MessagePattern)({ tag: 'detail' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TagController.prototype, "detail", null);
TagController = __decorate([
    (0, common_1.Controller)('tag'),
    __metadata("design:paramtypes", [typeof (_f = typeof tag_service_1.TagService !== "undefined" && tag_service_1.TagService) === "function" ? _f : Object])
], TagController);
exports.TagController = TagController;


/***/ }),

/***/ "./apps/blog/src/tag/tag.module.ts":
/*!*****************************************!*\
  !*** ./apps/blog/src/tag/tag.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagModule = void 0;
const utils_1 = __webpack_require__(/*! @app/libs/utils/utils */ "./libs/src/utils/utils.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tag_controller_1 = __webpack_require__(/*! ./tag.controller */ "./apps/blog/src/tag/tag.controller.ts");
const tag_service_1 = __webpack_require__(/*! ./tag.service */ "./apps/blog/src/tag/tag.service.ts");
let TagModule = class TagModule {
};
TagModule = __decorate([
    (0, common_1.Module)({
        controllers: [tag_controller_1.TagController],
        providers: [(0, utils_1.lazyLoadDB)('blog', 'Tag'), tag_service_1.TagService],
    })
], TagModule);
exports.TagModule = TagModule;


/***/ }),

/***/ "./apps/blog/src/tag/tag.service.ts":
/*!******************************************!*\
  !*** ./apps/blog/src/tag/tag.service.ts ***!
  \******************************************/
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
exports.TagService = void 0;
const tag_entity_1 = __webpack_require__(/*! @app/libs/db/cms/tag.entity */ "./libs/src/db/cms/tag.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const DEFAULT_MODEL = 'tagModel';
let TagService = class TagService {
    constructor(tagModel) {
        this.tagModel = tagModel;
    }
    async list(attrs) {
        if (attrs[0] === 'all') {
            return await this[DEFAULT_MODEL].find();
        }
        return await this[DEFAULT_MODEL].find({ select: attrs });
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
    async detail(id) {
        return await this[DEFAULT_MODEL].findOne(id);
    }
};
TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TagService);
exports.TagService = TagService;


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

/***/ "./libs/src/utils/utils.ts":
/*!*********************************!*\
  !*** ./libs/src/utils/utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lazyLoadDB = exports.sleep = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
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

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

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
/*!*******************************!*\
  !*** ./apps/blog/src/main.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const blog_module_1 = __webpack_require__(/*! ./blog.module */ "./apps/blog/src/blog.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(blog_module_1.BlogModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '127.0.0.1',
            port: Number(process.env.BLOG_PORT),
            retryAttempts: 5,
            retryDelay: 5000,
        },
        logger: ['error', 'warn'],
    });
    app.listen();
    console.log(`Blog Microservice is listening ${process.env.BLOG_PORT} port...`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ1Qsa0NBQWtDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxVQUFVLENBQ2xFLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2Jsb2cvc3JjL2Jsb2cubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvYmxvZy9zcmMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2Jsb2cvc3JjL2NhdGVnb3J5L2NhdGVnb3J5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2Jsb2cvc3JjL2NhdGVnb3J5L2NhdGVnb3J5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9ibG9nL3NyYy9jb250ZW50L2NvbnRlbnQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2Jsb2cvc3JjL2NvbnRlbnQvY29udGVudC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9ibG9nL3NyYy9jb250ZW50L2NvbnRlbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2Jsb2cvc3JjL3RhZy90YWcuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9hcHBzL2Jsb2cvc3JjL3RhZy90YWcubW9kdWxlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2FwcHMvYmxvZy9zcmMvdGFnL3RhZy5zZXJ2aWNlLnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2Ntcy9jYXRlZ29yeS5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvY21zL2NvbnRlbnQuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2Ntcy90YWcuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2RiLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9kYi9lbnRpdHkvbG9naW5Mb2cuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2VudGl0eS9tYW5hZ2UuZW50aXR5LnRzIiwid2VicGFjazovL21pY3Jvc2VydmljZS8uL2xpYnMvc3JjL2RiL2VudGl0eS9tZW51LmVudGl0eS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9kYi9lbnRpdHkvcm9sZS5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvZGIvZW50aXR5L3JvbGVNZW51LmVudGl0eS50cyIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvLi9saWJzL3NyYy9kYi9lbnRpdHkvc2V0dGluZy5lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vbGlicy9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb21tb25cIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbmZpZ1wiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29yZVwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvdHlwZW9ybVwiIiwid2VicGFjazovL21pY3Jvc2VydmljZS9leHRlcm5hbCBjb21tb25qcyBcInR5cGVvcm1cIiIsIndlYnBhY2s6Ly9taWNyb3NlcnZpY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWljcm9zZXJ2aWNlLy4vYXBwcy9ibG9nL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENhdGVnb3J5TW9kdWxlIH0gZnJvbSAnLi9jYXRlZ29yeS9jYXRlZ29yeS5tb2R1bGUnO1xuaW1wb3J0IHsgVGFnTW9kdWxlIH0gZnJvbSAnLi90YWcvdGFnLm1vZHVsZSc7XG5pbXBvcnQgeyBDb250ZW50TW9kdWxlIH0gZnJvbSAnLi9jb250ZW50L2NvbnRlbnQubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IERiTW9kdWxlIH0gZnJvbSAnQGFwcC9saWJzL2RiL2RiLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoeyBpc0dsb2JhbDogdHJ1ZSB9KSxcbiAgICBUYWdNb2R1bGUsXG4gICAgRGJNb2R1bGUsXG4gICAgQ2F0ZWdvcnlNb2R1bGUsXG4gICAgQ29udGVudE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQmxvZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnQGFwcC9saWJzL2NvbW1vbi9pbnRlcmZhY2UvcmVzdWx0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4gfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSAnLi9jYXRlZ29yeS5zZXJ2aWNlJztcbmNvbnN0IERFRkFVTFRfU0VSVklDRSA9ICdjYXRlZ29yeVNlcnZpY2UnO1xuQENvbnRyb2xsZXIoJ2NhdGVnb3J5JylcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhdGVnb3J5U2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlKSB7fVxuXG4gIEBNZXNzYWdlUGF0dGVybih7IGNhdGVnb3J5OiAnbGlzdCcgfSlcbiAgYXN5bmMgbGlzdChxdWVyeSk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmxpc3QocXVlcnkuYXR0cnMpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAn5YiG57G75p+l6K+i5oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKHsgY2F0ZWdvcnk6ICdjcmVhdGUnIH0pXG4gIGFzeW5jIGNyZWF0ZShib2R5KTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uY3JlYXRlKGJvZHkpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAn5YiG57G75Yib5bu65oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKHsgY2F0ZWdvcnk6ICd1cGRhdGUnIH0pXG4gIGFzeW5jIHVwZGF0ZShib2R5KTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCB7IGlkLCAuLi5yZXN0IH0gPSBib2R5O1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXNbREVGQVVMVF9TRVJWSUNFXS51cGRhdGUoaWQsIHJlc3QpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAn5YiG57G75pu05paw5oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKHsgY2F0ZWdvcnk6ICdkZWxldGUnIH0pXG4gIGFzeW5jIGRlbGV0ZShib2R5KTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uZGVsZXRlKGJvZHkuaWRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+WIhuexu+WIoOmZpOaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybih7IGNhdGVnb3J5OiAnZGV0YWlsJyB9KVxuICBhc3luYyBkZXRhaWwoYm9keSk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmRldGFpbChib2R5LmlkKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+WIhuexu+afpeivouaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbGF6eUxvYWREQiB9IGZyb20gJ0BhcHAvbGlicy91dGlscy91dGlscyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbnRyb2xsZXIgfSBmcm9tICcuL2NhdGVnb3J5LmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSAnLi9jYXRlZ29yeS5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGNvbnRyb2xsZXJzOiBbQ2F0ZWdvcnlDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbbGF6eUxvYWREQignYmxvZycsICdDYXRlZ29yeScpLCBDYXRlZ29yeVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICdAYXBwL2xpYnMvZGIvY21zL2NhdGVnb3J5LmVudGl0eSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5jb25zdCBERUZBVUxUX01PREVMID0gJ2NhdGVnb3J5TW9kZWwnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3RSZXBvc2l0b3J5KENhdGVnb3J5KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2F0ZWdvcnlNb2RlbDogUmVwb3NpdG9yeTxDYXRlZ29yeT4sXG4gICkge31cblxuICBhc3luYyBsaXN0KGF0dHJzKTogUHJvbWlzZTxBcnJheTxDYXRlZ29yeT4+IHtcbiAgICBpZiAoYXR0cnNbMF0gPT09ICdhbGwnKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kKCk7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmQoeyBzZWxlY3Q6IGF0dHJzIH0pO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGJvZHkpOiBQcm9taXNlPENhdGVnb3J5PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uc2F2ZShib2R5KTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZDogbnVtYmVyLCBib2R5KTogUHJvbWlzZTxDYXRlZ29yeT4ge1xuICAgIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0udXBkYXRlKGlkLCBib2R5KTtcbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kT25lKGlkKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShpZHM6IG51bWJlcltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5kZWxldGUoaWRzKTtcbiAgfVxuXG4gIGFzeW5jIGRldGFpbChpZCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoaWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5AQ29udHJvbGxlcignY29udGVudCcpXG5leHBvcnQgY2xhc3MgQ29udGVudENvbnRyb2xsZXIge31cbiIsImltcG9ydCB7IGxhenlMb2FkREIgfSBmcm9tICdAYXBwL2xpYnMvdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29udGVudENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRlbnQuY29udHJvbGxlcic7XG5pbXBvcnQgeyBDb250ZW50U2VydmljZSB9IGZyb20gJy4vY29udGVudC5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGNvbnRyb2xsZXJzOiBbQ29udGVudENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtsYXp5TG9hZERCKCdibG9nJywgJ0NvbnRlbnQnKSwgQ29udGVudFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50TW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGVudFNlcnZpY2Uge31cbiIsImltcG9ydCB7IFJlc3VsdCB9IGZyb20gJ0BhcHAvbGlicy9jb21tb24vaW50ZXJmYWNlL3Jlc3VsdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE1lc3NhZ2VQYXR0ZXJuIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IFRhZ1NlcnZpY2UgfSBmcm9tICcuL3RhZy5zZXJ2aWNlJztcbmNvbnN0IERFRkFVTFRfU0VSVklDRSA9ICd0YWdTZXJ2aWNlJztcbkBDb250cm9sbGVyKCd0YWcnKVxuZXhwb3J0IGNsYXNzIFRhZ0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRhZ1NlcnZpY2U6IFRhZ1NlcnZpY2UpIHt9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKHsgdGFnOiAnbGlzdCcgfSlcbiAgYXN5bmMgbGlzdChxdWVyeSk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmxpc3QocXVlcnkuYXR0cnMpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAn5qCH562+5p+l6K+i5oiQ5YqfJyxcbiAgICAgIHJlc3VsdCxcbiAgICB9O1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKHsgdGFnOiAnY3JlYXRlJyB9KVxuICBhc3luYyBjcmVhdGUoYm9keSk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLmNyZWF0ZShib2R5KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+agh+etvuWIm+W7uuaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybih7IHRhZzogJ3VwZGF0ZScgfSlcbiAgYXN5bmMgdXBkYXRlKGJvZHkpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHsgaWQsIC4uLnJlc3QgfSA9IGJvZHk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpc1tERUZBVUxUX1NFUlZJQ0VdLnVwZGF0ZShpZCwgcmVzdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfmoIfnrb7mm7TmlrDmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oeyB0YWc6ICdkZWxldGUnIH0pXG4gIGFzeW5jIGRlbGV0ZShib2R5KTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzW0RFRkFVTFRfU0VSVklDRV0uZGVsZXRlKGJvZHkuaWRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ+agh+etvuWIoOmZpOaIkOWKnycsXG4gICAgICByZXN1bHQsXG4gICAgfTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybih7IHRhZzogJ2RldGFpbCcgfSlcbiAgYXN5bmMgZGV0YWlsKGJvZHkpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXNbREVGQVVMVF9TRVJWSUNFXS5kZXRhaWwoYm9keS5pZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICfmoIfnrb7mn6Xor6LmiJDlip8nLFxuICAgICAgcmVzdWx0LFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IGxhenlMb2FkREIgfSBmcm9tICdAYXBwL2xpYnMvdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVGFnQ29udHJvbGxlciB9IGZyb20gJy4vdGFnLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVGFnU2VydmljZSB9IGZyb20gJy4vdGFnLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgY29udHJvbGxlcnM6IFtUYWdDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbbGF6eUxvYWREQignYmxvZycsICdUYWcnKSwgVGFnU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgVGFnIH0gZnJvbSAnQGFwcC9saWJzL2RiL2Ntcy90YWcuZW50aXR5JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RSZXBvc2l0b3J5IH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcbmNvbnN0IERFRkFVTFRfTU9ERUwgPSAndGFnTW9kZWwnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0UmVwb3NpdG9yeShUYWcpIHByaXZhdGUgcmVhZG9ubHkgdGFnTW9kZWw6IFJlcG9zaXRvcnk8VGFnPixcbiAgKSB7fVxuXG4gIGFzeW5jIGxpc3QoYXR0cnMpOiBQcm9taXNlPEFycmF5PFRhZz4+IHtcbiAgICBpZiAoYXR0cnNbMF0gPT09ICdhbGwnKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS5maW5kKCk7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmQoeyBzZWxlY3Q6IGF0dHJzIH0pO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGJvZHkpOiBQcm9taXNlPFRhZz4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLnNhdmUoYm9keSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQ6IG51bWJlciwgYm9keSk6IFByb21pc2U8VGFnPiB7XG4gICAgYXdhaXQgdGhpc1tERUZBVUxUX01PREVMXS51cGRhdGUoaWQsIGJvZHkpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmZpbmRPbmUoaWQpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzW0RFRkFVTFRfTU9ERUxdLmRlbGV0ZShpZHMpO1xuICB9XG5cbiAgYXN5bmMgZGV0YWlsKGlkKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXNbREVGQVVMVF9NT0RFTF0uZmluZE9uZShpZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbHVtbixcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbiAgRW50aXR5LFxuICBNYW55VG9NYW55LFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxufSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnQuZW50aXR5JztcblxuQEVudGl0eSh7IG5hbWU6ICdjYXRlZ29yeScsIGRhdGFiYXNlOiAndGVzdF9ibG9nJyB9KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMyLCBjb21tZW50OiAn5ZCN56ewJyB9KVxuICBuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogMzIsIGNvbW1lbnQ6ICfliIbnu4QnIH0pXG4gIGdyb3VwOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmjpLluo8nIH0pXG4gIHNvcnQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+WIhuexu+WbvicgfSlcbiAgc2ltZzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5o+P6L+wJyB9KVxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn54i2SUQnIH0pXG4gIHBpZDogbnVtYmVyO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgdHlwZTogJ2RhdGV0aW1lJywgY29tbWVudDogJ+WIm+W7uuaXtumXtCcgfSlcbiAgY3RpbWU6IHN0cmluZztcblxuICBATWFueVRvTWFueSgoKSA9PiBDb250ZW50LCAoY29udGVudCkgPT4gY29udGVudC5jYXRlZ29yeXMpXG4gIGNvbnRlbnQ6IENvbnRlbnRbXTtcbn1cbiIsImltcG9ydCB7XG4gIENvbHVtbixcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbiAgRW50aXR5LFxuICBKb2luVGFibGUsXG4gIE1hbnlUb01hbnksXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIFVwZGF0ZURhdGVDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5LmVudGl0eSc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuL3RhZy5lbnRpdHknO1xuXG5ARW50aXR5KCdjb250ZW50JylcbmV4cG9ydCBjbGFzcyBDb250ZW50IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5qCH6aKYJyB9KVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5YaF5a65JyB9KVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmtY/op4jmlbDph48nIH0pXG4gIHNjYW46IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+aOqOiNkOaMh+aVsCcgfSlcbiAgcmVjb206IG51bWJlcjtcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+e9rumhticgfSlcbiAgdG9wOiBib29sZWFuO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn54q25oCBJyB9KVxuICBzdGF0dXM6IHN0cmluZztcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbih7IHR5cGU6ICdkYXRldGltZScsIGNvbW1lbnQ6ICfliJvlu7rml7bpl7QnIH0pXG4gIGN0aW1lOiBzdHJpbmc7XG5cbiAgQFVwZGF0ZURhdGVDb2x1bW4oeyB0eXBlOiAnZGF0ZXRpbWUnLCBjb21tZW50OiAn5pu05paw5pe26Ze0JyB9KVxuICB1dGltZTogc3RyaW5nO1xuXG4gIEBNYW55VG9NYW55KCgpID0+IFRhZywgKHRhZykgPT4gdGFnLmNvbnRlbnQpXG4gIEBKb2luVGFibGUoeyBuYW1lOiAnY29udGVudF90YWcnIH0pXG4gIHRhZ3M6IFRhZ1tdO1xuXG4gIEBNYW55VG9NYW55KCgpID0+IENhdGVnb3J5LCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LmNvbnRlbnQpXG4gIEBKb2luVGFibGUoeyBuYW1lOiAnY29udGVudF9jYXRlZ29yeScgfSlcbiAgY2F0ZWdvcnlzOiBDYXRlZ29yeVtdO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIE1hbnlUb01hbnksXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJy4vY29udGVudC5lbnRpdHknO1xuXG5ARW50aXR5KHsgbmFtZTogJ3RhZycsIGRhdGFiYXNlOiAndGVzdF9ibG9nJyB9KVxuZXhwb3J0IGNsYXNzIFRhZyB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiAzMiwgY29tbWVudDogJ+WQjeensCcgfSlcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5o6S5bqPJywgZGVmYXVsdDogOTkgfSlcbiAgc29ydDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5YiG57G75Zu+JywgZGVmYXVsdDogJycgfSlcbiAgc2ltZzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5o+P6L+wJywgZGVmYXVsdDogJycgfSlcbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbih7IHR5cGU6ICdkYXRldGltZScsIGNvbW1lbnQ6ICfliJvlu7rml7bpl7QnIH0pXG4gIGN0aW1lOiBzdHJpbmc7XG5cbiAgQE1hbnlUb01hbnkoKCkgPT4gQ29udGVudCwgKGNvbnRlbnQpID0+IGNvbnRlbnQudGFncylcbiAgY29udGVudDogQ29udGVudFtdO1xufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBMb2dpbkxvZyB9IGZyb20gJy4vZW50aXR5L2xvZ2luTG9nLmVudGl0eSc7XG5pbXBvcnQgeyBNYW5hZ2UgfSBmcm9tICcuL2VudGl0eS9tYW5hZ2UuZW50aXR5JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2VudGl0eS9tZW51LmVudGl0eSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi9lbnRpdHkvcm9sZS5lbnRpdHknO1xuaW1wb3J0IHsgUm9sZU1lbnUgfSBmcm9tICcuL2VudGl0eS9yb2xlTWVudS5lbnRpdHknO1xuaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJy4vZW50aXR5L3NldHRpbmcuZW50aXR5JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2VudGl0eS91c2VyLmVudGl0eSc7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4vY21zL2NhdGVnb3J5LmVudGl0eSc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuL2Ntcy90YWcuZW50aXR5JztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICcuL2Ntcy9jb250ZW50LmVudGl0eSc7XG5cbmNvbnN0IGJsb2dEQiA9IFR5cGVPcm1Nb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgbmFtZTogJ2Jsb2cnLFxuICB1c2VGYWN0b3J5OiAoKSA9PiAoe1xuICAgIG5hbWU6ICdibG9nJyxcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5EQl9QT1JUKSxcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuQkxPR19EQl9VU0VSTkFNRSxcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuQkxPR19EQl9QQVNTV09SRCxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuQkxPR19EQl9EQVRBQlNFLFxuICAgIHR5cGU6ICdteXNxbCcsXG4gICAgZW50aXRpZXM6IFtDYXRlZ29yeSwgVGFnLCBDb250ZW50XSxcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnZXI6ICdmaWxlJyxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIHRpbWV6b25lOiAnWicsXG4gIH0pLFxufSk7XG5cbmNvbnN0IGdhdGV3YXlEQiA9IFR5cGVPcm1Nb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgdXNlRmFjdG9yeTogYXN5bmMgKCkgPT4gKHtcbiAgICBuYW1lOiAnZ2F0ZXdheScsXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuREJfUE9SVCksXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkdBVEVXQVlfREJfVVNFUk5BTUUsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkdBVEVXQVlfREJfUEFTU1dPUkQsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkdBVEVXQVlfREJfREFUQUJTRSxcbiAgICB0eXBlOiAnbXlzcWwnLFxuICAgIGVudGl0aWVzOiBbUm9sZSwgTWFuYWdlLCBNZW51LCBTZXR0aW5nLCBSb2xlTWVudSwgTG9naW5Mb2ddLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGxvZ2dlcjogJ2ZpbGUnLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAgdGltZXpvbmU6ICdaJyxcbiAgfSksXG59KTtcbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbZ2F0ZXdheURCLCBibG9nREJdLFxufSlcbmV4cG9ydCBjbGFzcyBEYk1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgRW50aXR5LFxuICBDb2x1bW4sXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuXG5ARW50aXR5KCdsb2dpbl9sb2cnKVxuZXhwb3J0IGNsYXNzIExvZ2luTG9nIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDY0LCBjb21tZW50OiAn55So5oi35ZCNJyB9KVxuICB1c2VybmFtZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBjb21tZW50OiAn5YWz6IGUSUQnIH0pXG4gIG1hbmFnZUlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfnmbvlvZVJUCcgfSlcbiAgaXA6IHN0cmluZztcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+aJgOWxnuWcsOWdgCcsIGRlZmF1bHQ6ICcnIH0pXG4gIGFkZHJlc3M6IHN0cmluZztcblxuICBAQ29sdW1uKHsgY29tbWVudDogJ+eZu+W9leW5s+WPsCcgfSlcbiAgdWE6IHN0cmluZztcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbih7IHR5cGU6ICdkYXRldGltZScgfSlcbiAgbG9naW5fdGltZTogc3RyaW5nO1xuXG4gIC8vIEBNYW55VG9NYW55KCgpID0+IE1lbnUsIChtZW51KSA9PiBtZW51LnJvbGUpXG4gIC8vIEBKb2luVGFibGUoe1xuICAvLyAgIG5hbWU6ICdyb2xlX21lbnUnLFxuICAvLyAgIC8vIGpvaW5Db2x1bW5zOiBbeyBuYW1lOiAndXNlcl9pZCcgfV0sXG4gIC8vICAgLy8gaW52ZXJzZUpvaW5Db2x1bW5zOiBbeyBuYW1lOiAncm9sZV9pZCcgfV0sXG4gIC8vIH0pXG4gIC8vIG1lbnU6IE1lbnVbXTtcbn1cbiIsImltcG9ydCB7XG4gIEVudGl0eSxcbiAgQ29sdW1uLFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBJbmRleCxcbn0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ21hbmFnZScpXG5leHBvcnQgY2xhc3MgTWFuYWdlIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDY0IH0pXG4gIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHNlbGVjdDogZmFsc2UsIGxlbmd0aDogMTI4IH0pXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNjQsIGRlZmF1bHQ6ICfnrqHnkIblkZgnIH0pXG4gIG5pY2tuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7XG4gICAgZGVmYXVsdDpcbiAgICAgICdodHRwczovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0RZQUlPZ3E4M2VyV2lhZlhkRTdBbUFtNEY5MFVKZDZ5dW5nSlJSWlBpYmliVE9nSUZzRjR2cTdMU0hMaWFHV1ptbHRJTzJjTGliaWEzTDNVeldsU1hJNFk2b2ZnLzEzMicsXG4gIH0pXG4gIGF2YXRhcjogc3RyaW5nO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgdHlwZTogJ2RhdGV0aW1lJyB9KVxuICBjdGltZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBASW5kZXgoKVxuICByb2xlSWQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ21lbnUnKVxuZXhwb3J0IGNsYXNzIE1lbnUge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7XG4gICAgbnVsbGFibGU6IGZhbHNlLFxuICAgIGRlZmF1bHQ6IDEsXG4gICAgY29tbWVudDogJzA655uu5b2VIDE66I+c5Y2VIDI65aSW6ZO+IDM66KeE5YiZJyxcbiAgfSlcbiAgdHlwZTogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMwLCBudWxsYWJsZTogZmFsc2UsIGRlZmF1bHQ6ICcnLCBjb21tZW50OiAn5Zu+5qCHJyB9KVxuICBpY29uOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGRlZmF1bHQ6IDAsIG51bGxhYmxlOiBmYWxzZSwgY29tbWVudDogJ+iPnOWNleaYr+WQpue8k+WtmCcgfSlcbiAgY2FjaGU6IGJvb2xlYW47XG5cbiAgQENvbHVtbih7IGRlZmF1bHQ6IDAsIG51bGxhYmxlOiBmYWxzZSwgY29tbWVudDogJ+aYr+WQpuWcqOiPnOWNleaYvuekuicgfSlcbiAgaGlkZTogYm9vbGVhbjtcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiAzMCwgbnVsbGFibGU6IGZhbHNlLCBkZWZhdWx0OiAnJywgY29tbWVudDogJ+iPnOWNleWQjeensCcgfSlcbiAgdGl0bGU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiAxMDAsIG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogJycsIGNvbW1lbnQ6ICfot6/nlLHlnLDlnYAnIH0pXG4gIHVybDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDIwLCBudWxsYWJsZTogZmFsc2UsIGRlZmF1bHQ6ICcnLCBjb21tZW50OiAn57uE5Lu25ZCN56ewJyB9KVxuICBuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNTAsIG51bGxhYmxlOiB0cnVlLCBkZWZhdWx0OiAnJywgY29tbWVudDogJ+aTjeS9nOinhOWImScgfSlcbiAgYWN0aW9uOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IG51bGxhYmxlOiBmYWxzZSwgZGVmYXVsdDogOTksIGNvbW1lbnQ6ICfmjpLluo8nIH0pXG4gIHNvcnQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IGZhbHNlLCBkZWZhdWx0OiAnJywgY29tbWVudDogJ+e7hOS7tui3r+W+hCcgfSlcbiAgcGF0aDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogZmFsc2UsIGRlZmF1bHQ6IDAsIGNvbW1lbnQ6ICfniLboj5zljZVJRCAwOuaXoCcgfSlcbiAgcGlkOiBudW1iZXI7XG5cbiAgLy8gQE1hbnlUb01hbnkoKCkgPT4gUm9sZSwgKHJvbGUpID0+IHJvbGUubWVudSlcbiAgLy8gcm9sZTogUm9sZVtdO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgncm9sZScpXG5leHBvcnQgY2xhc3MgUm9sZSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiAxMCB9KVxuICBuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLy8gQE1hbnlUb01hbnkoKCkgPT4gTWVudSwgKG1lbnUpID0+IG1lbnUucm9sZSlcbiAgLy8gQEpvaW5UYWJsZSh7XG4gIC8vICAgbmFtZTogJ3JvbGVfbWVudScsXG4gIC8vICAgLy8gam9pbkNvbHVtbnM6IFt7IG5hbWU6ICd1c2VyX2lkJyB9XSxcbiAgLy8gICAvLyBpbnZlcnNlSm9pbkNvbHVtbnM6IFt7IG5hbWU6ICdyb2xlX2lkJyB9XSxcbiAgLy8gfSlcbiAgLy8gbWVudTogTWVudVtdO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIEluZGV4LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ3JvbGVfbWVudScpXG5leHBvcnQgY2xhc3MgUm9sZU1lbnUge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfop5LoibJJRCcgfSlcbiAgQEluZGV4KClcbiAgcm9sZUlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfoj5zljZVJRCcgfSlcbiAgQEluZGV4KClcbiAgbWVudUlkOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIENvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xuXG5ARW50aXR5KCdzZXR0aW5nJylcbmV4cG9ydCBjbGFzcyBTZXR0aW5nIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBsZW5ndGg6IDMwLCBjb21tZW50OiAn5ZCN56ewJywgbnVsbGFibGU6IGZhbHNlIH0pXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiAzMCwgY29tbWVudDogJ+mUruWQjScsIHVuaXF1ZTogdHJ1ZSwgbnVsbGFibGU6IGZhbHNlIH0pXG4gIGtleTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyB0eXBlOiAndGV4dCcsIGNvbW1lbnQ6ICfplK7lgLwnLCBudWxsYWJsZTogZmFsc2UgfSlcbiAgdmFsdWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiAzMCwgY29tbWVudDogJ+WIhue7hCcsIGRlZmF1bHQ6ICcnLCBudWxsYWJsZTogZmFsc2UgfSlcbiAgZ3JvdXA6IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICBsZW5ndGg6IDEwLFxuICAgIGNvbW1lbnQ6ICfmlbDmja7nsbvlnosnLFxuICAgIG51bGxhYmxlOiBmYWxzZSxcbiAgfSlcbiAgdmFsdWV0eXBlOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGNvbW1lbnQ6ICfmjpLluo8nLCBudWxsYWJsZTogZmFsc2UsIGRlZmF1bHQ6IDEwIH0pXG4gIHNvcnQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgdHlwZTogJ3RleHQnLCBjb21tZW50OiAn5aSH5rOoJyB9KVxuICBjb21tb246IHN0cmluZztcbn1cbiIsImltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcblxuLyoqXG4gKiDnrYnlvoXmn5DmrrXml7bpl7TlkI7lkJHlkI7miafooYxcbiAqIEBwYXJhbSB3YWl0IHtudW1iZXJ9IOetieW+heaXtumVv1xuICovXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAod2FpdCA9IDMwMCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgfSwgd2FpdCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiDlu7bov5/liqDovb3mlbDmja7lupNcbiAqIEBwYXJhbSBkYXRhYmFzZSB7c3RyaW5nfSDmlbDmja7lupPlkI3np7BcbiAqIEBwYXJhbSB0YWJsZU5hbWUge3N0cmluZ30g5pWw5o2u6KGo5ZCN56ewXG4gKiBAcGFyYW0gd2FpdCB7bnVtYmVyfSDlu7bov5/ml7bpl7RcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBsYXp5TG9hZERCID0gKGRhdGFiYXNlID0gJ2RlZmF1bHQnLCB0YWJsZU5hbWUsIHdhaXQgPSAxMDAwKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogdGFibGVOYW1lICsgJ1JlcG9zaXRvcnknLFxuICAgIHVzZUZhY3Rvcnk6IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNsZWVwKHdhaXQpO1xuICAgICAgICAvLyDojrflj5bmn5DkuKrmlbDmja7lupPkuIvmn5DlvKDooajnmoTov57mjqVcbiAgICAgICAgcmV0dXJuIGF3YWl0IGdldFJlcG9zaXRvcnkodGFibGVOYW1lLCBkYXRhYmFzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvdHlwZW9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBNaWNyb3NlcnZpY2VPcHRpb25zLCBUcmFuc3BvcnQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgQmxvZ01vZHVsZSB9IGZyb20gJy4vYmxvZy5tb2R1bGUnO1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZU1pY3Jvc2VydmljZTxNaWNyb3NlcnZpY2VPcHRpb25zPihcbiAgICBCbG9nTW9kdWxlLFxuICAgIHtcbiAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlRDUCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaG9zdDogJzEyNy4wLjAuMScsXG4gICAgICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5CTE9HX1BPUlQpLFxuICAgICAgICByZXRyeUF0dGVtcHRzOiA1LFxuICAgICAgICByZXRyeURlbGF5OiA1MDAwLFxuICAgICAgfSxcbiAgICAgIGxvZ2dlcjogWydlcnJvcicsICd3YXJuJ10sXG4gICAgfSxcbiAgKTtcbiAgYXBwLmxpc3RlbigpO1xuICBjb25zb2xlLmxvZyhcbiAgICBgQmxvZyBNaWNyb3NlcnZpY2UgaXMgbGlzdGVuaW5nICR7cHJvY2Vzcy5lbnYuQkxPR19QT1JUfSBwb3J0Li4uYCxcbiAgKTtcbn1cblxuYm9vdHN0cmFwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=