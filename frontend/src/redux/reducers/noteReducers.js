import { v4 as uuid } from "uuid";
import { NOTES_TYPES } from "../types";
const initialState = {
  notes: [],
};

export const noteReducers = (state = initialState, action) => {
  switch (action.type) {
    case NOTES_TYPES.NOTES_LISTS:
      return {
        ...state,
        notes: action.payload,
      };
    case NOTES_TYPES.NOTES_CREATE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case NOTES_TYPES.NOTES_DELETE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    default:
      return state;
  }
};
