import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Photo } from '../photo/photo';
import { CreatePhotoDto } from '../photo/dto/create-photo.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Photo) private readonly photoRepo: Repository<Photo>,
  ) {}

  async addUser(createUserDto: CreateUserDto): Promise<any> {
    try {
      await this.userRepo.save(createUserDto);
    } catch (e) {
      console.log('adduser Error');
      console.log(e);
    }
    return { success: true };
  }
  async getAllUsers(): Promise<any> {
    const allUsers = await this.userRepo.find();

    return { user: allUsers };
  }
  async deleteUser(id: string): Promise<any> {
    try {
      await this.userRepo.delete({ id: id });
    } catch (e) {
      console.log('delete user error');
      console.log(e);
    }
    return { success: true };
  }
  async getUserPhoto(name: string): Promise<any> {
    try {
      const user = await this.userRepo.findOne({ where: { name: name } });
      console.log(user, '这个user');
      const photos = await this.photoRepo.find({
        relations: ['user'],
        where: { user: user },
      });
      return { photos: photos };
    } catch (e) {
      console.log(e);
      console.log('getupdatePhoto错误');
    }
  }
  async createPhoto(
    name: string,
    createPhotoDto: CreatePhotoDto,
  ): Promise<any> {
    try {
      const photo = new Photo();
      console.log(name, 'id是');
      const user = await this.userRepo.findOne({ where: { name: name } });
      photo.url = createPhotoDto.url;
      photo.user = user;
      await this.photoRepo.save(photo);
    } catch (e) {
      console.log('createPhotoError');
    }
    return { success: true };
  }
}
