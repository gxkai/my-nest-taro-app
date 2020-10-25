import http from './http.network';
import { AuthCredentialsDto } from '@nestjs/auth/dto/auth-credentials.dto';

const BASE_URL = process.env.BASE_URL;

const api = {
  auth: {
    test(args = {}) {
      return http('get', BASE_URL + '/auth/test', args);
    },
    signup(args: AuthCredentialsDto) {
      return http('post', BASE_URL + '/auth/signup', args)
    }
  }
}
export default api
