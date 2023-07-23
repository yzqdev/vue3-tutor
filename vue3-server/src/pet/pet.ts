import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('pet')
export class Pet {
    // @PrimaryGeneratedColumn('uuid')
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column()
    name: string;

    @Column({nullable:true})
    url: string
    @Column({nullable:true})
    sex: string
    @Column({nullable:true})
    age: number
    @Column({nullable:true})
    owner: string
    @Column({nullable:true})
    createTime:string
    @Column({nullable:true})
    updateTime:string
    @Column({default:0})
    deleted:boolean
}
