import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Res } from '@nestjs/common';
import { CatService } from './cat.service';
import axios from 'axios';
import { downloadImg } from '../util/fileUtil';
import { map } from 'rxjs';
import { setResponse } from '../util/dataUtil';

@ApiTags('cat')
@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get('all')
  async getAllCat() {
    let res = this.catService.findAll();

    return { success: true };
  }

  @Get('pet')
  async getPet() {
    return await this.catService.getPet();
  }

  @Get('mem')
  async memoryUsage() {
    return await this.catService.getMemoryServ();
  }

  @Get('cos')
  async getCosApi() {
    return await this.catService.getCos();
  }

  @Get('list')
  async getCatListApi() {
    let catList = [];
    for (let i = 0; i < 4000; i++) {
      catList.push({
        name: 'ddd',
        age: i,
        sex: 'man',
      });
    }
    return setResponse(200, 'success', catList);
  }

  @Get('single')
  async getCatSingle() {
    let maomao = {
      name: 'ddd',
      age: 1,
      sex: 'man',
    };
    return setResponse(200, 'success', maomao);
  }
}
