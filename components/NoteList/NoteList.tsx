import type { Note } from '@/types/note';
import NoteItem from '../NoteItem/NoteItem';
import css from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <ul className={css.list}>
      {notes.map(note => (
        <NoteItem key={note.id} item={note} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default NoteList;
