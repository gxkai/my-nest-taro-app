import {HttpService, Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user.repository';
import {WxAuthCredentialsDto} from "./dto/wx-auth-credentials.dto";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private httpService: HttpService
    ) { }

    signUp(authCretentialDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.signUp(authCretentialDto);
    }

    async signIn(authCretentialDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        const username = await this.userRepository.validateUserPassword(authCretentialDto);
        if (!username) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload: JwtPayload = { username };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }


    async wxSignin(wxAuthCredentialsDto: WxAuthCredentialsDto):  Promise<{ accessToken: string }> {
        let reqUrl = 'https://api.weixin.qq.com/sns/jscode2session';
        let params = {
            appid: this.configService.get('wx.appId'),
            secret: this.configService.get('wx.appSecret'),
            js_code: wxAuthCredentialsDto.code,
            grant_type: 'authorization_code'
        };
        const {data: {openid}}: {data: {openid: string}} = await this.httpService.get(reqUrl, {
            params
        }).toPromise();
        const username = await this.userRepository.validateOpenid(openid, wxAuthCredentialsDto);

        const payload: JwtPayload = { username };
        const accessToken = await this.jwtService.sign(payload);
        return {accessToken};
    }
}
