import Incomes from '../models/incomesModel.js';

const incomesControllers = {
	createIncome: async (req, res) => {
		try {
			const { incomeDesc, incomeAmount } = req.body;
			if (!incomeDesc || !incomeAmount)
				return res
					.status(400)
					.json({ msg: 'Please enter your income description or amount' });

			const newIncome = new Incomes({
				incomeDesc,
				incomeAmount,
				postedBy: req.user,
			});

			await (await newIncome.save()).populate('postedBy', '-password');

			return res
				.status(201)
				.json({ msg: 'New Income added succesfully', data: newIncome });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	listIncomes: async (req, res) => {
		try {
			const incomes = await Incomes.find()
				.sort({createdAt: -1})
				.populate('postedBy', '-password');
			return res.status(201).json({ msg: 'All incomes', data: incomes });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	deleteIncome: async (req, res) => {
		try {
			const { incomeId } = req.params;

			// if (!incomeId) return res.status(400).json({ msg: 'Id not found' });

			const income = await Incomes.findOne({ incomeId });
			if (!income) return res.status(400).json({ msg: 'Income not found' });

			const deletedIncome = await Incomes.findByIdAndDelete(incomeId);
			return res
				.status(200)
				.json({ msg: 'Income deleted successfully', data: deletedIncome });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},
};

export default incomesControllers;
