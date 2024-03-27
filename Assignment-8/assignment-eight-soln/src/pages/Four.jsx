import { useState } from 'react'
import ExpenseOverview from '../components/ExpenseOverview'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseDetails from '../components/ExpenseDetails'

const Four = () => {
    const [ expenses, setExpenses ] = useState([])

    function addExpense(newExpense){
        setExpenses([newExpense, ...expenses])
    }

    function removeExpense(eid){
        let updatedExpenses = expenses.filter( expense => expense.id !== eid)
        setExpenses(updatedExpenses)
    }

  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <h1 className='text-center text-primary display-5'>Expense Tracker</h1>
            <ExpenseOverview expenses={expenses} />
            <ExpenseForm addExpense={addExpense} />
            <ExpenseDetails expenses={expenses} removeExpense={removeExpense} />
        </div>
    </div>
  )
}

export default Four
