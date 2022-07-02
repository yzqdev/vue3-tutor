import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { CreatePhotoDto } from '../photo/dto/create-photo.dto';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: '添加一个用户' })
  @Post('add')
  async addUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.addUser(createUserDto);
  }
  @ApiOperation({ summary: '获得所有用户' })
  @Get('getAll')
  async getAllUsr() {
    return await this.userService.getAllUsers();
  }
  @Delete(':id')
  async deleteOneUser(@Param('id') id: string): Promise<any> {
    return await this.userService.deleteUser(id);
  }
  @Post(':name/photo')
  async addUserPhoto(
    @Param('name') name: string,
    @Body()
    createPhotoDto: CreatePhotoDto,
  ): Promise<any> {
    await this.userService.createPhoto(name, createPhotoDto);
    return { success: true };
  }
  @Get(':name')
  async getUserPhotos(@Param('name') name: string): Promise<any> {
    return await this.userService.getUserPhoto(name);
  }
}
