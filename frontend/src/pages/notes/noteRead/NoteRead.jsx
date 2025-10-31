import { useSelector, useDispatch } from 'react-redux';
import { listNotes } from '../../../redux/actions/notesActions';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import NotesLists from '../notesLists/NotesLists';
import * as Styles from './NoteReadStyles';

const NoteRead = () => {
	const dispatch = useDispatch();
	const { noteId } = useParams();

	const note = useSelector(
		(state) => noteId && state.notes.notes.find((note) => note._id === noteId),
	);

	useEffect(() => {
		dispatch(listNotes());
	}, [dispatch, noteId]);

;

	return (
		<Styles.NotesContainer>
			<Styles.NotesWrapper>
				{noteId && <NotesLists />}
				{note ? (
					<Styles.NoteReadContainer>
						<div>
							<h1>{note.title}</h1>
							<p>{note.content}</p>
						</div>
					</Styles.NoteReadContainer>
				) : (
					<Styles.NoteReadContainer>
						<Styles.NotesWarningText>
							<h4>Pick a note to read</h4>
						</Styles.NotesWarningText>
					</Styles.NoteReadContainer>
				)}
			</Styles.NotesWrapper>
		</Styles.NotesContainer>
	);
};

export default NoteRead;
