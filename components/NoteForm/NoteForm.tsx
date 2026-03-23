'use client';

import { useState } from 'react';
import css from './NoteForm.module.css';

interface NoteFormProps {
  onSubmit: (data: { title: string; content: string; tag: string }) => void;
  onCancel: () => void;
}

const NoteForm = ({ onSubmit, onCancel }: NoteFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content, tag });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formGroup}>
        Title
        <input
          className={css.input}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </label>
      <label className={css.formGroup}>
        Content
        <textarea
          className={css.textarea}
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={4}
          required
        />
      </label>
      <label className={css.formGroup}>
        Tag
        <input
          className={css.input}
          type="text"
          value={tag}
          onChange={e => setTag(e.target.value)}
          required
        />
      </label>
      <div className={css.actions}>
        <button type="button" className={css.cancelButton} onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={css.submitButton}>
          Create
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
