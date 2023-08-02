import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { NotesService } from 'src/modules/notes/notes.service';

@Injectable()
export class IsNoteExistPipe implements PipeTransform<number, Promise<number>> {
  constructor(private notesService: NotesService) {}
  async transform(value: number) {
    const note = await this.notesService.findNote(value);
    if (!note) {
      throw new NotFoundException('note with this id doesn`t exist');
    }
    return value;
  }
}
