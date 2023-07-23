import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { Photo } from '../photo/photo';

@Module({
  imports: [TypeOrmModule.forFeature([User, Photo])],
  providers: [UserService],
  controllers: [UserController],

  exports: [UserService],
})
export class UserModule {}
