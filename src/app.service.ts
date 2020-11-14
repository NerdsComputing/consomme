import {Injectable, Request} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(request: Request): string {
    console.log(`Request made: ${request.url}`);

    return 'Hello World!';
  }
}
