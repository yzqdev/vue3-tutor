import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePhotoDto } from './dto/create-photo.dto';

@ApiTags('photo')
@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}
  @Delete(':id')
  async deleteOnePhoto(@Param('id') id: string) {
    await this.photoService.deleteOnePhoto(id);
  }
  @ApiOperation({ summary: '添加一个用户' })
  @Post('add')
  async addOnePhoto(@Body() photo: CreatePhotoDto) {
    await this.photoService.addOnePhoto(photo);
  }
}
