import { IsEmail, IsNotEmpty } from "class-validator";

export class SiteLocationCreateDto {
   
    @IsNotEmpty()
    name: string;  

    @IsNotEmpty()
    responsable: string;

    @IsNotEmpty()
    adresse: string; 
    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date; 
}