import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { PatchNoteDto } from './dto/patch-note.dto';
import { ValidationPipe } from 'src/common/pipes/validation.pipe';
import { IsNoteExistPipe } from 'src/common/pipes/is-note-exist.pipe';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('stats')
  getStats() {
    return this.notesService.getStats();
  }

  @Get()
  getNotes() {
    return this.notesService.getNotes();
  }

  @Get(':id')
  findNote(@Param('id', ParseIntPipe, IsNoteExistPipe) id: number) {
    return this.notesService.findNote(id);
  }

  @Post()
  addNote(@Body(ValidationPipe) dto: CreateNoteDto) {
    return this.notesService.addNote(dto);
  }

  @Patch(':id')
  editNote(
    @Param('id', ParseIntPipe, IsNoteExistPipe) id: number,
    @Body(ValidationPipe) dto: PatchNoteDto,
  ) {
    return this.notesService.editNote(id, dto);
  }

  @Delete(':id')
  deleteNote(@Param('id', ParseIntPipe, IsNoteExistPipe) id: number) {
    return this.notesService.deleteNote(id);
  }
}
