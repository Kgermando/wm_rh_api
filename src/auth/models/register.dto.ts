import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto {
   
    photo: string;

   @IsNotEmpty()
    nom: string;

    @IsNotEmpty()
    postnom: string;

   @IsNotEmpty()
    prenom: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    telephone: string;

    @IsNotEmpty()
    adresse: string;

    @IsNotEmpty()
    sexe: string;

    @IsNotEmpty()
    date_naissance: Date;
   
    @IsNotEmpty()
    lieu_naissance: string;

    @IsNotEmpty()
    nationalite: string;

    @IsNotEmpty()
    etat_civile: string;

    @IsNotEmpty()
    nbr_enfant: string;

    @IsNotEmpty()
    nbr_dependants: string;

    @IsNotEmpty()
    nbr_dependants_max: string;
      
    @IsNotEmpty()
    matricule: string;

    @IsNotEmpty()
    numero_cnss: string;

    @IsNotEmpty()
    role: string;  
   
    @IsNotEmpty()
    departement: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    fonction: string;

    @IsNotEmpty()
    services: string; 

    @IsNotEmpty()
    site_location: string;  
  
    @IsNotEmpty()
    type_contrat: string;

    @IsNotEmpty()
    date_debut_contrat: Date;

    @IsNotEmpty()
    date_fin_contrat: Date;
   
    @IsNotEmpty()
    salaire: string;

    @IsNotEmpty()
    compte_bancaire: string;

    @IsNotEmpty()
    nom_banque: string;

    @IsNotEmpty()
    frais_bancaire: string; 

    @IsNotEmpty()
    statut_personnel: boolean;

     @IsNotEmpty()
    cv_url: string; 

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    password_confirm: string;

    @IsNotEmpty()
    statut_presence: boolean;
}