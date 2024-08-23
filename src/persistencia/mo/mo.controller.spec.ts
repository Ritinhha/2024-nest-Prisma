import { Test, TestingModule } from '@nestjs/testing';
import { MoController } from './mo.controller';
import { MoService } from './mo.service';

describe('MoController', () => {
  let controller: MoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoController],
      providers: [MoService],
    }).compile();

    controller = module.get<MoController>(MoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
