import { NOTES_TYPES } from "../types";
import * as api from "../api";
import { toast } from "react-toastify";
export const listNotes = () => async (dispatch) => {
  try {
    const { data } = await api.listAllNotes();
    dispatch({
      type: NOTES_TYPES.NOTES_LISTS,
      payload: data.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
export const createNote = (noteData) => async (dispatch) => {
  try {
    const { data } = await api.createNote(noteData);
    dispatch({
      type: NOTES_TYPES.NOTES_CREATE,
      payload: data.data,
    });
    toast.success(data.msg);
    window.location.href = "/notes";
  } catch (err) {
    console.log(err.message);
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteNote(id);
    dispatch({
      type: NOTES_TYPES.NOTES_DELETE,
      payload: id,
    });
    toast.success(data.msg)
    
  } catch (err) {
    console.log(err);
     if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
    
  }
};
