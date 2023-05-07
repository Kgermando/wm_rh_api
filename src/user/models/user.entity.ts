import { Exclude } from "class-transformer"; 
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    photo: string;

    @Column()
    nom: string;

    @Column()
    postnom: string;

    @Column()
    prenom: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    adresse: string;

    @Column()
    sexe: string;

    @Column()
    date_naissance: Date;
    @Column()
    lieu_naissance: string;

    @Column()
    nationalite: string;

    @Column()
    etat_civile: string;

    @Column()
    nbr_enfant: string;

    @Column()
    nbr_dependants: string;

    @Column()
    nbr_dependants_max: string;
     
    // Accès
    @Column({unique : true})
    matricule: string;

    @Column()
    numero_cnss: string;

    @Column()
    role: string; // droit d'acces au logiciel de 0 à 5
  
    // Travail
    @Column()
    departement: string;

    @Column()
    title: string;

    @Column()  // Ex: Directeur 
    fonction: string;

    @Column() // Ex: 
    services: string; // RH

    @Column()
    site_location: string; // Site de travail
  
    // Contrat
    @Column()
    type_contrat: string;

    @Column()
    date_debut_contrat: Date;

    @Column()
    date_fin_contrat: Date;
   
    // Salaire
    @Column()
    salaire: string;

    @Column() //   Salaire de Base
    compte_bancaire: string;

    @Column()
    nom_banque: string;

    @Column()
    frais_bancaire: string;  // Frais de compte
 
    // Profil
    @Column()
    statut_personnel: boolean;

    @Column()
    cv_url: string; // CV scan 

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created : Date;

    @Column()
    @Exclude()
    password: string;

    @Column()
    statut_presence: boolean;

}