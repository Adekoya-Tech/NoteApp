import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const NotesSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		subtitle: {
			type: String,
			trim: true,
		},
		content: {
			type: String,
			required: true,
			trim: true,
		},
		postedBy: {
			type: ObjectId,
			ref: 'User',
		}
	},
	{ timestamps: true },
);

const Notes = mongoose.model('Notes', NotesSchema);
export default Notes;
