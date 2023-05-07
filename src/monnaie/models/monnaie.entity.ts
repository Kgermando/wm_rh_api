import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('monnaies')
export class Monnaie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    monnaie: string;

    @Column()
    monnaie_en_lettre: string;

    @Column()
    is_active: boolean;

    @Column()    
    signature: string;

    @Column()
    created: Date;

    @Column()
    update_created : Date;
}