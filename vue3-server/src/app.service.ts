import { Injectable } from '@nestjs/common';
const consola = require('consola');
@Injectable()
export class AppService {
  getHello(): string {
    consola.withTag('hell').info('world');
    return 'Hello World!';
  }
}
