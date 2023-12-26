import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Province {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
