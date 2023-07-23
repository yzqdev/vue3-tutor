import { Test, TestingModule } from '@nestjs/testing';
import { MockAdminController } from './mock-admin.controller';
import { MockAdminService } from './mock-admin.service';

describe('MockAdminController', () => {
  let controller: MockAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockAdminController],
      providers: [MockAdminService],
    }).compile();

    controller = module.get<MockAdminController>(MockAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
