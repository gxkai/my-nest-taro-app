import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const wxConfig = (): {
  wx: {
    appId: string;
    appSecret: string;
  }
} => ({
  wx: {
    appId: process.env.WX_APPID,
    appSecret: process.env.WX_APPSECRET,
  }
});
export default wxConfig;
