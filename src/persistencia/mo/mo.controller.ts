import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoService } from './mo.service';
import { CreateMoDto } from './dto/create-mo.dto';
import { UpdateMoDto } from './dto/update-mo.dto';

@Controller('mo')
export class MoController {
  constructor(private readonly moService: MoService) {}

  @Post()
  create(@Body() createMoDto: CreateMoDto) {
    return this.moService.create(createMoDto);
  }

  @Get()
  findAll() {
    return this.moService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoDto: UpdateMoDto) {
    return this.moService.update(+id, updateMoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moService.remove(+id);
  }
}
