import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet';
import { PetController } from './pet.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetService],
  controllers: [PetController],
  exports: [PetService],
})
export class PetModule {}
