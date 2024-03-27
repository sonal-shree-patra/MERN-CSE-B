import React from 'react'
import ExpenseDetailedTransactions from './ExpenseDetailedTransactions'

const ExpenseDetails = ({ expenses, removeExpense }) => {
    const credits = expenses.filter( ex => ex.category==='credit')
    const debits = expenses.filter( ex => ex.category==='debit')

  return (
    <div className='row g-2'>
      <div className="col-md-6 expense-details-col">
        <ExpenseDetailedTransactions expenses={credits} color="success" removeExpense={removeExpense} />
      </div>
      <div className="col-md-6 expense-details-col">
      <ExpenseDetailedTransactions expenses={debits} color="danger" removeExpense={removeExpense} />
      </div>
    </div>
  )
}

export default ExpenseDetails
