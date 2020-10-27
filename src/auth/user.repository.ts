import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
import {WxAuthCredentialsDto} from "./dto/wx-auth-credentials.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async signUp(authCredential: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredential;
        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        try {

            await user.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Username already exists')
            } else {
                throw new InternalServerErrorException()
            }
        }
    }

    async validateUserPassword(authCredentialDto: AuthCredentialsDto) : Promise<string> {
        const { username, password} = authCredentialDto;
        const user= await this.findOne({username});
        if(user && await user.validatePassword(password)) {
            return user.username;
        }else{
          return null;
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

    async validateOpenid(openid: string, wxAuthCredentialsDto: WxAuthCredentialsDto) {
        const user= await this.findOne({openid});
        const {code, ...others } = wxAuthCredentialsDto;
        if (user) {
            await  this.update({openid}, {username: wxAuthCredentialsDto.nickName, openid: openid, ...others});
            return wxAuthCredentialsDto.nickName;
        } else {
            const salt = await bcrypt.genSalt();
            const password = await this.hashPassword('123456', salt);
            await this.insert({username: wxAuthCredentialsDto.nickName, password, salt , openid: openid, ...others});
            return wxAuthCredentialsDto.nickName;
        }
    }
}
