import { IsEmail, IsNotEmpty } from "class-validator";

export class MonnaieCreateDto {
   
    @IsNotEmpty()
    monnaie: string;  

    @IsNotEmpty()
    monnaie_en_lettre: string;

    @IsNotEmpty()
    is_active: boolean;

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date;
  
}