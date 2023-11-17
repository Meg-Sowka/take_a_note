import { NoteForm } from "../components/NoteForm";
import { NoteData } from "../types/Note";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

export const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <section>
      <h1 className="mb-4">New note</h1>
      <NoteForm onSubmit={onSubmit} />
    </section>
  );
}
