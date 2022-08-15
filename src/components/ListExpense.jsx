import Expense from './Expense'

const ListExpense = ({ expenses, setEditExpense, filter, filterExpense, handleDelete }) => {

  return (
    <div className='h-screen w-11/12 mx-auto py-8'>
      <h2
        className='text-white_2 text-lg font-bold mb-5'>
        Recent Expenses
      </h2>
      <div
        className='overflow-scroll md:overflow-hidden'>
        <table 
          className='w-full'>
          <thead
            className='bg-blue_1 text-gray_1 text-left font-bold'>
            <tr>
              <th
                className='py-4 px-5'>
                Category
              </th>
              <th
                className='py-4 px-5'>
                Name
              </th>
              <td
                className='py-4 px-5'>
                Date
              </td>
              <th
                className='py-4 px-5'>
                Amount
              </th>
              <th
                className='py-4 px-5'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              filter ? (
                filterExpense.map(expense => (
                  <Expense
                    key={expense.id}
                    expense={expense}
                    setEditExpense={setEditExpense} 
                    handleDelete={handleDelete} 
                  />
                ))
              ) : (
                expenses.map(expense => (
                  <Expense
                    key={expense.id}
                    expense={expense}
                    setEditExpense={setEditExpense}
                    handleDelete={handleDelete} 
                  />
                ))
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListExpense