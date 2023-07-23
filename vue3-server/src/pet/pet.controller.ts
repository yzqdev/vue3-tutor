import {
  Body,
  Controller,
  Get,
  HttpStatus,
  HttpCode,
  Param,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PetJsonDto } from './dto/pet.dto';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { PetService } from './pet.service';
import { Pet } from './pet';
import { HttpStatusCode } from 'axios';
const Mock = require('mockjs');
import * as dayjs from 'dayjs';

const Random = Mock.Random;

@ApiTags('pet')
@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post('form')
  async form(@Body() body: PetJsonDto) {
    return body;
  }

  @Post('json')
  async jsonData(@Body() body: PetJsonDto) {
    return body;
  }

  @Post('uploadfile')
  @UseInterceptors(FileInterceptor('file'))
  async formdata(@UploadedFile() file: Express.Multer.File) {
    let res = {
      success: false,
    };
    // fs.writeFileSync('a.db', file.buffer)
    res.success = true;
    return res;
  }

  @HttpCode(200)
  @Post('addPet')
  async addPet(@Body() pet: PetJsonDto) {
    pet.createTime = new Date().toDateString();
    pet.updateTime = new Date().toDateString();

    return await this.petService.addPet(pet);
  }

  @HttpCode(200)
  @Get('genPet')
  async genPet() {
    for (let i = 0; i < 10; i++) {
      let pet: PetJsonDto = {
        age: Math.floor(Math.random() * 20),
        createTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),

        name: Random.name(),
        owner: Random.name(),
        sex: 'man',
        updateTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        url: Random.url(),
      };
      await this.petService.addPet(pet);
    }

    return 'success';
  }

  @HttpCode(200)
  @Post('updatePet')
  async updatePet(@Body() pet: PetJsonDto) {
    pet.updateTime = new Date().toDateString();

    return await this.petService.updatePet(pet);
  }

  @Delete('delPet/:id')
  async delPet(@Param() id: string) {
    return await this.petService.delPet(id);
  }

  @Get('getAll')
  async getAllPet() {
    let pets = await this.petService.getAllPet();
    console.log(pets);
    return pets;
  }
  @Delete('delAll')
  async deleteAllPet() {
    await this.petService.deleteAllPet();
    return this.petService.getAllPet();
  }
}
