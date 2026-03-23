import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote } from '@/lib/api';
import type { Note } from '@/types/note';
import NoteItem from '../NoteItem/NoteItem';
import css from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });

  return (
    <ul className={css.list}>
      {notes.map(note => (
        <NoteItem key={note.id} item={note} onDelete={id => mutation.mutate(id)} />
      ))}
    </ul>
  );
};

export default NoteList;
