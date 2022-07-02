import {Injectable, Logger} from '@nestjs/common';
import {Cron, CronExpression} from '@nestjs/schedule';
import {CatService} from "../cat/cat.service";

@Injectable()
export class TaskService {
    private readonly logger = new Logger(TaskService.name);

    constructor(private catService: CatService) {
    }

    @Cron(CronExpression.EVERY_2_HOURS)
    handleCron() {
        this.catService.findAll()
        this.logger.debug('Called when the current second is 2');

    }
    @Cron("* */30 * * * *")
     getMemory(){
        this.catService.getMemoryServ()
    }
}
