import {HttpService} from "@nestjs/axios";
import {AxiosResponse} from 'axios'
import {Injectable} from "@nestjs/common";
import {map, Observable} from "rxjs";
import {CatInterface} from "./cat.interface";
import axios from 'axios'
import {downloadImg} from "../util/fileUtil";

@Injectable()
export class CatService {
    constructor(private readonly httpService: HttpService) {
    }

    findAll(): Observable<any> {
        let res = this.httpService.get('https://bbs-api.mihoyo.com/post/wapi/getForumPostList?forum_id=49&gids=2&is_good=false&is_hot=false&page_size=20&sort_type=1').pipe(map(item => item.data.data.list));
        res.subscribe((value) => {
            value.forEach((item) => {

                item.post.images.forEach(async (imgurl, index) => {
                    await downloadImg(imgurl, '')
                })
            })
        })
        return res
    }

    async getPcBanner() {
        return this.httpService.get('https://bbs-api.mihoyo.com/misc/wapi/getPCBanner?gids=2').pipe(map(item => item.data))
    }

      getMemoryServ() {
        const used = process.memoryUsage();
        let mem = {}
        for (let key in used) {
            mem[key] = `Memory: ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`
            console.log(`Memory: ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        }
        return mem
    }

    async getPet() {
        return this.httpService.get('http://localhost:5400/api/pet/getAll').pipe(map(res => res.data));
    }

    async getCos() {
        let res = await this.httpService.get('https://bbs-api.mihoyo.com/post/wapi/getForumPostList?forum_id=49&gids=2&is_good=false&is_hot=false&last_id=1656716926.287322&page_size=20&sort_type=1').pipe(map(res => res.data))
        return res
    }
}
