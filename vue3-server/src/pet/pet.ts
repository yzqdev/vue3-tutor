import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('pet')
export class Pet {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;

    @Column()
    url: string
    @Column()
    avatar: string
}
