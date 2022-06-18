import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getApi(): string {
    return 'this.appService.getApi()';
  }
}
