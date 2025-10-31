import Notes from "../models/notesModel.js";

export const notesControllers = {
  createNote: async (req, res) => {
    try {
      const { title, subtitle, content } = req.body;

      if (!title || !subtitle || !content) {
        return res.status(400).json({ msg: "Please Fill in all fields." });
      }
      const newNote = await Notes({
        title,
        subtitle,
        content,
        postedBy: req.user,
      });
      await (await newNote.save()).populate("postedBy", "-password");

      return res
        .status(201)
        .json({ msg: "New note added successfully", data: newNote });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  getNotes: async (req, res) => {
    try {
      const notes = await Notes.find().populate('postedBy', '-password');
      return res.status(200).json({ msg: "All notes", data: notes });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getNotesById: async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const note = await Notes.findById(noteId);
      return res.status(200).json({ msg: "Single note by Id", data: note });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteNote: async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const note = await Notes.findByIdAndDelete(noteId);
      return res
        .status(200)
        .json({ msg: "Note deleted successfully", data: note });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // editNote: async (req, res) => {
  //   try {
  //     const {noteId} = req.params;
  //     const noteData = req.body;
  //     const { title, subtitle, content } = noteData;
  //     const updateNote = await Notes.findOne({_id: noteId})
  //     if(!noteId) {
  //       return res.status(400).json({msg:"This note deos not exits."})
  //     }
  //     const editMyNote = await Notes.findByIdAndUpdate({noteId},
  //       {
  //         title,
  //         subtitle,
  //         content,
  //         postedBy: req.user
  //       },
  //       {new:true}
  //     );
  //     res.status(200).json({msg: "Updated successfully", data:editMyNote})

  //   } catch (err) {
  //     return res.status(500).json({ msg: err.message });
  //   }
  // }

  editNote: async (req, res) => {
    try {
      const { noteId } = req.params;
      const { title, subtitle, content } = req.body;
      const note = await Notes.findById({noteId})
      if(!note)
        return res.status(400).json({ msg: "Not Authorized to edit this note" });
      const updateNote = await Notes.findByIdAndUpdate(
        { noteId },
        {
          title,
          subtitle,
          content,
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
