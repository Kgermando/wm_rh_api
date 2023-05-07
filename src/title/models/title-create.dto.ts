import { IsEmail, IsNotEmpty } from "class-validator";

export class TitleCreateDto {
   
    @IsNotEmpty()
    title: string;   

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date; 
}