import { useRef } from 'react'

const ExpenseForm = ({ addExpense }) => {
    const detailsRef = useRef(null)
    const amountRef = useRef(null)
    const dateRef = useRef(null)
    const categoryRef = useRef(null)

    function handleSubmit(e){
        e.preventDefault()
        const expense_to_add = {
            id: new Date().getTime(),
            details: detailsRef.current.value,
            amount: amountRef.current.value,
            date: dateRef.current.value,
            category: categoryRef.current.value,
        }
        // console.log(expense_to_add);
        addExpense(expense_to_add)
        detailsRef.current.value = ""
        amountRef.current.value = ""
        dateRef.current.value = ""
    }

  return (
    <div className='row my-2'>
      <div className="col">
        <form action="" method="post" onSubmit={handleSubmit}>
            <div className="row g-2">
                <div className="col-md-6">
                    <input ref={detailsRef} type='text' className='form-control' placeholder='Details' required/>
                </div>
                <div className="col-md-6">
                    <input ref={amountRef} type='text' className='form-control' placeholder='Amount' required/>
                </div>
                <div className="col-md-4">
                    <input ref={dateRef} type='date' className='form-control' required />
                </div>
                <div className="col-md-4">
                    <select ref={categoryRef} className='form-control' required>
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input type='submit' className='btn btn-primary w-100'value="Submit" />
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default ExpenseForm
