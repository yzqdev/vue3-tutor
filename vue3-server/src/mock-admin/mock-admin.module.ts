import { Module } from '@nestjs/common';
import { MockAdminService } from './mock-admin.service';
import { MockAdminController } from './mock-admin.controller';

@Module({
  controllers: [MockAdminController],
  providers: [MockAdminService]
})
export class MockAdminModule {}
