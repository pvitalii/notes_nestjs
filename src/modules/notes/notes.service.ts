import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { PatchNoteDto } from './dto/patch-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { NOTE_CATEGORY } from '../categories/note-category.enum';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  private dateParse(content: string) {
    const dates = content.match(
      /((0[0-9]|[0-9])|[12][0-9]|3[01])(\/|.|-)((0[1-9]|[1-9])|1[1,2])(\/|.|-)(19|20)\d{2}/g,
    );
    return dates?.join(', ') ?? ' ';
  }

  getNotes() {
    return this.notesRepository.find();
  }

  findNote(id: number) {
    return this.notesRepository.findOneBy({ id });
  }

  addNote(dto: CreateNoteDto) {
    const noteToCreate = {
      dates: this.dateParse(dto.content),
      archived: false,
      ...dto,
    };
    const note = this.notesRepository.create(noteToCreate);
    return this.notesRepository.save(note);
  }

  editNote(id: number, dto: PatchNoteDto) {
    const editData = dto.content
      ? { ...dto, dates: this.dateParse(dto.content) }
      : dto;
    return this.notesRepository.update(id, editData);
  }

  deleteNote(id: number) {
    return this.notesRepository.delete(id);
  }

  async getStats() {
    const notes = await this.notesRepository.find();
    const stats = {};
    Object.values(NOTE_CATEGORY).forEach((category) => {
      stats[category] = {
        active: notes.filter(
          (note) => note.archived === false && note.category.name === category,
        ).length,
        archived: notes.filter(
          (note) => note.archived === true && note.category.name === category,
        ).length,
      };
    });
    return stats;
  }
}
