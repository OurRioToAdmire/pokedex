import { Test, TestingModule } from '@nestjs/testing';
import { FormaController } from './forma.controller.js';
import { FormaService } from './forma.service.js';

describe('FormaController', () => {
  let controller: FormaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormaController],
      providers: [FormaService],
    }).compile();

    controller = module.get<FormaController>(FormaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
