import { listNotes, deleteNote } from "../../../redux/actions/notesActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { images } from "../../../components/images";
import * as Styles from "./NotesListsStyles";
import NoteMenu from "../../../components/noteMenu/NoteMenu";
import { useState, useEffect } from "react";

const NotesLists = () => {
  const { notes } = useSelector((state) => state.notes);
  const user = JSON.parse(localStorage.getItem("user"));
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch]);

  const handleNoteDelete =(id) => {
	dispatch(deleteNote(id))
  setOpenMenu()
  };
  console.log(notes);

  return (
    <Styles.NotesListsContainer>
      <Styles.NotesListsWrapper>
        {notes.map((note) => (
          <Styles.NotesListsItem>
            <Link to={`/notes/read/${note._id}`}>
              <h4>{note.title}</h4>
            </Link>
            <p>{note.content}</p>
            <Styles.NotesListsTimeLineBox>
              <small>{moment(note.createdAt).fromNow()}</small>
              {/* <small>{moment(note.createdAt).format('llll')}</small> */}
              <p>
                Posted By:{" "}
                <span>{note.postedBy && note.postedBy.firstName}</span>
              </p>
              {user?._id === note.postedBy?._id && (
                <button onClick={() => setOpenMenu(!openMenu)}>
                  <img src={images.dotsIcon} alt="" />
                </button>
              )}
              {openMenu && <NoteMenu onDelete={()=>{handleNoteDelete(note._id)}}/>}
            </Styles.NotesListsTimeLineBox>
          </Styles.NotesListsItem>
        ))}
      </Styles.NotesListsWrapper>
    </Styles.NotesListsContainer>
  );
};

export default NotesLists;
