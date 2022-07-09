import {ApiTags} from "@nestjs/swagger";
import {Controller, Get, Res} from "@nestjs/common";
import {CatService} from "./cat.service";
import axios from "axios";
import {downloadImg} from "../util/fileUtil";
import {map} from "rxjs";

@ApiTags("cat")
@Controller('cat')
export class CatController {
    constructor(private catService: CatService) {

    }


    @Get('all')
    async getAllCat() {
        let res = this.catService.findAll()

        return  {success:true};
    }

    @Get("pet")
    async getPet() {

        return await this.catService.getPet()


    }
    @Get('mem')
   async   memoryUsage( ) {
    return await this.catService.getMemoryServ()
   }

    @Get('cos')
    async getCosApi() {
        return await this.catService.getCos()
    }
}
