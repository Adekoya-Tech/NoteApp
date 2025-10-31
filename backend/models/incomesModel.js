import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const IncomesSchema = new mongoose.Schema(
	{
		incomeDesc: {
			type: String,
			required: true,
			trim: true,
		},
		incomeAmount: {
			type: Number,
			required: true,
			trim: true,
		},
		postedBy: {
			type: ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true },
);

const Incomes = mongoose.model('Incomes', IncomesSchema);

export default Incomes;
