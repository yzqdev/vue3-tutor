import { ApiProperty } from '@nestjs/swagger';

export class PetJsonDto {
    @ApiProperty({ description: '名字' })
    name:string
    @ApiProperty({ description: 'url' })
    url:string
    @ApiProperty({ description: '头像' })
    avatar:string
    @ApiProperty({ description: 'data' })
    data: object;
}
