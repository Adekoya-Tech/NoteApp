import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
		minLength: 3,
		maxLength: 12,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		minLength: 3,
		maxLength: 12,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minLength: 3,
		maxLength: 50,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 500,
  },

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;