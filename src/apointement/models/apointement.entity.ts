import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('apointements')
export class Apointement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    matricule: string;

    @Column()
    apointement: string;

    @Column()
    date_entree: Date;

    @Column()
    date_sortie: Date;

    @Column()    
    signature: string;

    @Column()
    created: Date;

    @Column()
    update_created : Date;
}