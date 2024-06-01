import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";



export class UpdateCarDto{

    // @IsString({message: `The brand most be a cool string`})
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    @IsString()
    @IsOptional()
    readonly brand?: string;
    
    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly model?: string;


}