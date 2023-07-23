import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import {CatService} from "../cat/cat.service";
import {HttpModule} from "@nestjs/axios";

@Module({
    imports:[HttpModule],
    providers: [TaskService,CatService],
})
export class TasksModule {}
