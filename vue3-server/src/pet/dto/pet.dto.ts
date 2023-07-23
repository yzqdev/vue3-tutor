import { ApiProperty } from '@nestjs/swagger';

export class PetJsonDto {
  @ApiProperty({ description: 'id' })
  id?: number;
  @ApiProperty({ description: '名字' })
  name: string;
  @ApiProperty({ description: 'url' })
  url: string;
  @ApiProperty({ description: '年龄' })
  age: number;
  @ApiProperty({ description: '性别' })
  sex: string;
  @ApiProperty({ description: 'createTime' })
  createTime: string;
  @ApiProperty({ description: '更新时间' })
  updateTime: string;
  @ApiProperty({ description: '主人' })
  owner: string;
}
