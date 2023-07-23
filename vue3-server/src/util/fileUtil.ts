import * as fs from 'fs';
import axios from 'axios';
import { join, basename } from 'path';

export async function downloadImg(url, filePath) {
  // let rootPath=join(__dirname, '..','..', 'client',basename(url))
  let rootPath = join('D:\\images\\test', basename(url));
  let writer = fs.createWriteStream(rootPath); //创建一个写入流

  console.log(url);
  console.log(`downloading file ${basename(url)}`);
  const response = await axios({
    url: url, //要下载的文件的url
    method: 'GET',
    responseType: 'stream',
  });
  response.data.pipe(writer);
}
