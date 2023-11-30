import { createContext, useContext, ReactNode } from "react";
import { RawNote, Tag } from "../types/Note";
import { useLocalStorage } from "../hooks/useLocalStorage";

type NotesProviderProps = {
  children: ReactNode;
}

type NotesContextProps = {
  tags: Tag[];
  notes: RawNote[];
}

const NotesContext = createContext({} as NotesContextProps);

export function useNotes() {
  return useContext(NotesContext);
}

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);

  return (
    <NotesContext.Provider value={{ 
      tags,
      notes,
    }} >
      { children }
    </NotesContext.Provider>
  );
}
