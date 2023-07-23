import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './pet';
import { Repository } from 'typeorm';
import { PetJsonDto } from './dto/pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
  ) {}

  async addPet(pet: PetJsonDto) {
    return await this.petRepository.save(pet);
  }

  async delPet(id: string) {
    return await this.petRepository.delete(id);
  }

  async getAllPet(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async updatePet(pet: PetJsonDto) {
    return await this.petRepository.update(pet.id, pet);
  }
  async deleteAllPet() {
    return await this.petRepository.delete({});
  }
}
