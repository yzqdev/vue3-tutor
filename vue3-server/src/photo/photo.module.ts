import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo';
import { UserModule } from '../user/user.module';
import { User } from '../user/user';

@Module({
  imports: [TypeOrmModule.forFeature([Photo, User]), UserModule],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
