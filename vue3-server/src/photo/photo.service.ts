import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private readonly photoRepo: Repository<Photo>,
  ) {}
  async deleteOnePhoto(id: string): Promise<any> {
    await this.photoRepo.delete({ id });

    return { success: true };
  }
  async addOnePhoto(photo: CreatePhotoDto) {
    await this.photoRepo.save(photo);
  }
}
