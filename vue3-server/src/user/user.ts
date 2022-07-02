import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from '../photo/photo';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @OneToMany((type) => Photo, (photo) => photo.user)
  photos: Photo[];
}
