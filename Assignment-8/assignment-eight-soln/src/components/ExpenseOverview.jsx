import React from 'react'

const ExpenseOverview = ({ expenses }) => {
    const credits = expenses.filter( ex => ex.category==='credit')
    const debits = expenses.filter( ex => ex.category==='debit')

    const totalCredit = credits.reduce( (tc,ex) => tc+Number(ex.amount), 0)
    const totalDebit = debits.reduce( (tb,ex) => tb+Number(ex.amount), 0)
  return (
    <div className='row'>
        <div className="col-md-6 bg-success text-white text-center py-3">
            <h1>+ {totalCredit}</h1>
        </div>
        <div className="col-md-6 bg-danger text-white text-center py-3">
            <h1>- {totalDebit}</h1>
        </div>
    </div>
  )
}

export default ExpenseOverview
