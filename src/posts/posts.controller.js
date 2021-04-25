"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PostsController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var CreatePostDTO = /** @class */ (function () {
    function CreatePostDTO() {
    }
    __decorate([
        swagger_1.ApiProperty({
            description: '标题'
        })
    ], CreatePostDTO.prototype, "title");
    __decorate([
        swagger_1.ApiProperty({
            description: '正文'
        })
    ], CreatePostDTO.prototype, "content");
    return CreatePostDTO;
}());
var PostsController = /** @class */ (function () {
    function PostsController() {
    }
    PostsController.prototype.index = function () {
        return [{
                id: 1,
                title: "aa1"
            }];
    };
    PostsController.prototype.create = function (data) {
        return {
            success: true
        };
    };
    PostsController.prototype.detail = function () {
        return {
            id: 1,
            titles: "aaaC"
        };
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({
            summary: "帖子列表",
            description: "获取帖子列表"
        })
    ], PostsController.prototype, "index");
    __decorate([
        common_1.Post(),
        swagger_1.ApiOperation({
            summary: "创建帖子",
            description: "创建帖子"
        }),
        __param(0, common_1.Body())
    ], PostsController.prototype, "create");
    __decorate([
        common_1.Get(':id')
    ], PostsController.prototype, "detail");
    PostsController = __decorate([
        common_1.Controller('posts'),
        swagger_1.ApiTags("帖子")
    ], PostsController);
    return PostsController;
}());
exports.PostsController = PostsController;
