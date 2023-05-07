import { IsEmail, IsNotEmpty } from "class-validator";

export class FonctionCreateDto {
   
    @IsNotEmpty()
    fonction: string;   

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date; 
}