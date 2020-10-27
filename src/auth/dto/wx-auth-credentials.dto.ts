import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class WxAuthCredentialsDto {
    @IsString()
    code: string;
    nickName: string;
    gender: number;
    language: string;
    city: string;
    province: string;
    country: string;
    avatarUrl: string;
}
