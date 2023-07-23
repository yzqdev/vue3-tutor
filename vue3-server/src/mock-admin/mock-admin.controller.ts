import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { MockAdminService } from './mock-admin.service';
import { ApiTags } from '@nestjs/swagger';
import { tokens, users } from './mock/user';
const Mock = require('mockjs');
@ApiTags('mock admin')
@Controller('mock-admin')
export class MockAdminController {
  constructor(private readonly mockAdminService: MockAdminService) {}
  @HttpCode(200)
  @Post('/user/login')
  userLogin(@Req() config) {
    const { username } = config.body;
    const token = tokens[username];

    // mock error
    if (!token) {
      return {
        code: 60204,
        message: 'Account and password are incorrect.',
      };
    }

    return {
      code: 20000,
      data: token,
    };
  }
  @Get('/user/info')
  userInfo(@Req() config) {
    const { token } = config.query;
    const info = users[token];

    // mock error
    if (!info) {
      return {
        code: 50008,
        message: 'Login failed, unable to get user details.',
      };
    }

    return {
      code: 20000,
      data: info,
    };
  }
  //----------------------search -------------
  @Get('/transaction/list')
  transactionList() {
    return {
      code: 20000,
      data: {
        total: 20,
        'items|20': [
          {
            order_no: '@guid()',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: '@float(1000, 15000, 0, 2)',
            'status|1': ['success', 'pending'],
          },
        ],
      },
    };
  }
}
