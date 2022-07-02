import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiProperty({ description: 'url' })
  url: string;
}
