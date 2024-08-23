import { Injectable } from '@nestjs/common';
import { CreateMoDto } from './dto/create-mo.dto';
import { UpdateMoDto } from './dto/update-mo.dto';

@Injectable()
export class MoService {
  create(createMoDto: CreateMoDto) {
    return 'This action adds a new mo';
  }

  findAll() {
    return `This action returns all mo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mo`;
  }

  update(id: number, updateMoDto: UpdateMoDto) {
    return `This action updates a #${id} mo`;
  }

  remove(id: number) {
    return `This action removes a #${id} mo`;
  }
}
