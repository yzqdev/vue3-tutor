import { Test, TestingModule } from '@nestjs/testing';
import { MockAdminService } from './mock-admin.service';

describe('MockAdminService', () => {
  let service: MockAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockAdminService],
    }).compile();

    service = module.get<MockAdminService>(MockAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
