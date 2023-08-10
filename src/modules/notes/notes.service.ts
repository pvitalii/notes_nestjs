import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { PatchNoteDto } from './dto/patch-note.dto';
import { NOTE_CATEGORY } from '../categories/note-category.enum';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Note } from './note.model';

@Injectable()
export class NotesService {
  constructor(private sequelize: Sequelize) {
    this.notesRepository = this.sequelize.getRepository(Note);
  }

  private notesRepository: Repository<Note>;

  private dateParse(content: string) {
    const dates = content.match(
      /((0[0-9]|[0-9])|[12][0-9]|3[01])(\/|.|-)((0[1-9]|[1-9])|1[1,2])(\/|.|-)(19|20)\d{2}/g,
    );
    return dates?.join(', ') ?? ' ';
  }

  getNotes() {
    return this.notesRepository.findAll({
      include: [this.sequelize.models.Category],
    });
  }

  findNote(id: number) {
    return this.notesRepository.findByPk(id);
  }

  addNote(dto: CreateNoteDto) {
    const noteToCreate = {
      dates: this.dateParse(dto.content),
      archived: false,
      ...dto,
    };
    return this.notesRepository.create(noteToCreate);
  }

  editNote(id: number, dto: PatchNoteDto) {
    const editData = dto.content
      ? { ...dto, dates: this.dateParse(dto.content) }
      : dto;
    return this.notesRepository.update(editData, { where: { id } });
  }

  deleteNote(id: number) {
    return this.notesRepository.destroy({ where: { id } });
  }

  async getStats() {
    const notes = await this.getNotes();
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
