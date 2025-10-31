import React from 'react';
import { FaTrash } from 'react-icons/fa';

const OldIncomes = ({ incomes, totalIncome }) => {
	return (
		<div>
			<h4>OldIncomes</h4>
			<h2>Total Income: {totalIncome}</h2>
			<ul>
				{incomes.map((income) => (
					<li>
						<div>
							<span>{income.incomeDesc}</span>
							<span>N{income.incomeAmount}</span>
						</div>
						<FaTrash />
					</li>
				))}
			</ul>
		</div>
	);
};

export default OldIncomes;
