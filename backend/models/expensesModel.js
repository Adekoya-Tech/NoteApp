import mongoose from 'mongoose'

const ExpensesSchema = new mongoose.Schema({
	expenseDesc: {
		type: String,
		required: true,
		trim: true,
	},
	expenseAmount: {
		type: Number,
		required: true,
		trim: true,
	},
}, {timestamps: true});

const Expenses = mongoose.model('Expenses', ExpensesSchema);

export default Expenses;
