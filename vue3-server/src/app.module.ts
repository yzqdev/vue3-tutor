import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { PetController } from './pet/pet.controller';
import { PetModule } from './pet/pet.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path'
import {cyan} from 'picocolors'
import {HttpModule} from "@nestjs/axios";
import {CatModule} from "./cat/cat.module";
import {ScheduleModule} from "@nestjs/schedule";
import {ConfigModule} from "@nestjs/config";
import {TasksModule} from "./tsk/task.module";
import { MockAdminModule } from './mock-admin/mock-admin.module';
let pass = '123456';
let rootPath=join(__dirname, '..', 'client')
console.log( cyan('静态文件地址' ))
console.log(cyan(rootPath))
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.prod']
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'vue3.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: rootPath,
      exclude: ['/api*'],
    }),
    UserModule,
      TasksModule,
    PhotoModule,CatModule,
    PetModule,
    MockAdminModule,
  ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
