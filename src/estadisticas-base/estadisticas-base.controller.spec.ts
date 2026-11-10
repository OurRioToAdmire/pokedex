import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticasBaseController } from './estadisticas-base.controller.js';
import { EstadisticasBaseService } from './estadisticas-base.service.js';

describe('EstadisticasBaseController', () => {
  let controller: EstadisticasBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadisticasBaseController],
      providers: [EstadisticasBaseService],
    }).compile();

    controller = module.get<EstadisticasBaseController>(EstadisticasBaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
