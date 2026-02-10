import React from 'react';
import { tr } from 'zod/locales';

interface Expense{
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props{
    expenses: Expense[];
}

const ExpenseList = ({expenses}: Props) => {
  return (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {expenses.map(expense => <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td></td>
            </tr>)}
        </tbody>
    </table>
  )
}

export default ExpenseList;