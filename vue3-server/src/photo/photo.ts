import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user';
@Entity('photo')
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  url: string;
  @ManyToOne((type) => User, (user) => user.photos)
  user: User;
}
