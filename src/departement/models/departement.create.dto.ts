import { IsNotEmpty } from "class-validator";

export class DepartementCreateDto { 
    @IsNotEmpty()
    departement: string; 

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date; 
}