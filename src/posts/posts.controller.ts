import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import {Post as PostSchema} from './post.model';

class CreatePostDTO {

    @ApiProperty({
        description:'标题'
    })
    @IsNotEmpty({
        message:'title 不能为空'
    })
    title: string
    @ApiProperty({
        description:'正文',
    })
    content: string

}



@Controller('posts')
@ApiTags("帖子")
export class PostsController {

    constructor(
        @InjectModel(PostSchema) private readonly postModel:ModelType<PostSchema>
    ){}

    @Get()
    @ApiOperation({
        summary:"帖子列表",
        description:"获取帖子列表"
    })
    async index(){
        return await this.postModel.find()
    }

    @Post()
    @ApiOperation({
        summary:"创建帖子",
        description:"创建帖子"
    })
    async create(@Body() createPostDTO: CreatePostDTO){
        await this.postModel.create(createPostDTO)
        return {
            success:true
        }
    }

    @Get(':id')
    @ApiOperation({
        summary:"帖子详情",
        description:"帖子详情"
    })
    async detail(@Param('id') id: string){
        
       return await this.postModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({
        summary:"编辑帖子",
        description:"编辑帖子"
    })
    async update(@Param('id') id: string , @Body() updatePostDTO: CreatePostDTO){
        await this.postModel.findByIdAndUpdate(id,updatePostDTO)
        return {
            success:true
        }
    }

    @Delete(':id')
    @ApiOperation({
        summary:"删除帖子",
        description:"删除帖子"
    })
    async remove(@Param('id') id: string){

        await this.postModel.findByIdAndDelete(id)
        return {
            success:true
        }
    } 

}
