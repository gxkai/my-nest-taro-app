import http from './http.network';
import { AuthCredentialsDto } from '@nestjs/auth/dto/auth-credentials.dto';

const api = {
  auth: {
    test(data = {}) {
      return http({method:'get', url:'/auth/test', data});
    },
    signup(data: AuthCredentialsDto) {
      return http({method: 'post',url: '/auth/signup', data})
    },
    signin(data: AuthCredentialsDto) {
      return http({method: 'post',url: '/auth/signin', data})
    },
  }
}
export default api
