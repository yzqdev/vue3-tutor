import {Body, Controller, Get, Param, Post, Req, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {PetJsonDto} from "./dto/pet.dto";
import {Express} from "express";
import {FileInterceptor} from '@nestjs/platform-express';
import * as fs from 'fs';
import {PetService} from "./pet.service";
import {Pet} from "./pet";

@ApiTags('pet')

@Controller('pet')
export class PetController {
    constructor(private petService: PetService) {
    }

    @Post("form")
    async form(@Body() body: PetJsonDto) {
        return body
    }

    @Post("json")
    async jsonData(@Body() body: PetJsonDto) {
        return body
    }

    @Post("formdata")
    @UseInterceptors(FileInterceptor('file'))
    async formdata(@Body() body: object,
                   @UploadedFile() file: Express.Multer.File) {
        let res = {
            success: false
        }
        fs.writeFileSync('a.db', file.buffer)
        res.success = true
        return res;
    }

    @Post('addPet')
    async addPet(@Body() pet: PetJsonDto) {
       return  await this.petService.addPet(pet)
    }

    @Post("delPet")
    async delPet(@Param() id: string) {
       return  await this.petService.delPet(id)
    }

    @Get("getAll")
    async getAllPet() {
       let pets= await this.petService.getAllPet()
        console.log(pets)
        return pets

    }
}
