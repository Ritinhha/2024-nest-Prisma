import { PartialType } from '@nestjs/mapped-types';
import { CreateMoDto } from './create-mo.dto';

export class UpdateMoDto extends PartialType(CreateMoDto) {}
