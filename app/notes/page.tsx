// import { fetchNotes } from '@/lib/api';
// import NoteList from '@/components/NoteList/NoteList';

// const Notes = async () => {
//   const response = await fetchNotes();
//   return;
//   <section>
//     <h1>Notes List</h1>
//     {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
//   </section>;
// };
// export default Notes;

import App from './Notes.client';

export default function NotesPage() {
  return <App />;
}

// import { fetchNotes } from '@/lib/api';
// import Notes from './Notes.client';

// export default async function NotesPage() {
//   const { notes, total } = await fetchNotes();

//   return <Notes initialNotes={notes} total={total} />;
// }
