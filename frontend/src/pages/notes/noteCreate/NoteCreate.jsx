import { useState } from "react";
import { Modal } from "../../../components/modal/Modal";
import Overlay from "../../../components/Overlay";
import Notes from "../Notes";
import * as Styles from "./NoteCreateStyles";
import { useDispatch } from "react-redux";
import { createNote } from "../../../redux/actions/notesActions";
const NoteCreate = () => {
  const dispatch = useDispatch();
  const [noteData, setNoteData] = useState({
    title: "",
    subtitle: "",
    content: "",
  });
  const handleInput = (e) => {
    setNoteData({ ...noteData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(noteData);
    dispatch(createNote(noteData));
  };
  return (
    <>
      <Overlay />
      <Notes />
      <div>
        <Modal>
          <Styles.NoteCreateTitle>Create New Note</Styles.NoteCreateTitle>
          <Styles.NoteCreateForm onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Write your Note Title</label>
              <input type="text" name="title" onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="">Write your Note Subtitle</label>
              <input type="text" name="subtitle" onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="">Write your Note Content</label>
              <textarea name="content" onChange={handleInput} />
            </div>
            <button>Create</button>
          </Styles.NoteCreateForm>
        </Modal>
      </div>
    </>
  );
};

export default NoteCreate;
