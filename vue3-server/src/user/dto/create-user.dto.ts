import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户名字' })
  name: string;
  @ApiProperty({ description: 'password' })
  password: string;
}
