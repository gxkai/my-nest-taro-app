import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
import {WxAuthCredentialsDto} from "./dto/wx-auth-credentials.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }

    @Post('signup')
    signUp(@Body(ValidationPipe) authCredentialDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredentialDto);
    }

    @Post('signin')
    signIn(@Body(ValidationPipe) authCredentialDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCredentialDto);
    }

    @Post('wxSignin')
    wxSignin(@Body() wxAuthCredentialsDto: WxAuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.wxSignin(wxAuthCredentialsDto);
    }

    @Post('test')
    @UseGuards(AuthGuard())
    test(@GetUser() user : User) {
        console.log(user);
    }
}
