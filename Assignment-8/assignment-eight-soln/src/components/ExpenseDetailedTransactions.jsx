import React from 'react'

const ExpenseDetailedTransactions = ({ expenses, color, removeExpense }) => {
  return (
    <>
      {
        expenses.map( ex =>(
            <div key={ex.id} className={`card rounded-0 mb-1 bg-${color}-subtle`}>
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <p className='fw-semibold mb-0'>{ex.details} - {ex.amount}</p>
                        <p>{ex.date}</p>
                    </div>
                    <div>
                        <h4 role='button' onClick={()=>removeExpense(ex.id)}>X</h4>
                    </div>
                </div>
            </div>
        ))
      }
    </>
  )
}

export default ExpenseDetailedTransactions
