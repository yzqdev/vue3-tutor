import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Pet} from "../pet/pet";
import {PetService} from "../pet/pet.service";
import {PetController} from "../pet/pet.controller";
import {CatService} from "./cat.service";
import {CatController} from "./cat.controller";
import {HttpModule, HttpService} from "@nestjs/axios";

@Module({
imports:[HttpModule],
    providers: [CatService ],
    controllers:[CatController],
    exports:[CatService, ]
})
export class CatModule {}
