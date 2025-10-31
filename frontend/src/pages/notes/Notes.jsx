import NoteRead from './noteRead/NoteRead';
import NotesLists from './notesLists/NotesLists';
import * as Styles from './NotesStyles';

const Notes = () => {
	return (
		<Styles.NotesContainer>
			<Styles.NotesWrapper>
				<NotesLists />
				<NoteRead />
				
			</Styles.NotesWrapper>
		</Styles.NotesContainer>
	);
};

export default Notes;
