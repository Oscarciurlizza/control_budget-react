import { useState } from "react";

import BudgetControl from "./BudgetControl"
import ListExpense from "./ListExpense";

const Dashboard = ({
    setUser,
    user, 
    setBudget,
    budget, 
    expenses, 
    setExpenses,
    handleSaveExpense,
    editExpense,
    setEditExpense,
    modal,
    setModal,
    filter,
    setFilter,
    filterExpense,
    handleDelete,
    setIsValidUser,
    setIsValidBudget
  }) => {

    const [loader, setLoader] = useState(true);

    const handleLoader = () => {
      setTimeout(() => {
        setLoader(false);
      }, 4000)
    }
    handleLoader();

  return (
    <> 
      {
        loader ? (
          <div className='container-loader'>
            <span className="loader"></span>
          </div>
        ) : (
          <div
            className={`bg-white_1 h-screen dashboard ${modal ? 'overflow-hidden' : ''}`}>
            <div 
              className='bg-blue_1 md:h-screen md:flex justify-between items-center flex-col py-8'>
              <BudgetControl
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
                user={user}
                setUser={setUser}
                setIsValidUser={setIsValidUser}
                expenses={expenses}
                setExpenses={setExpenses}
                handleSaveExpense={handleSaveExpense}
                editExpense={editExpense}
                setEditExpense={setEditExpense}
                modal={modal}
                setModal={setModal}
                filter={filter}
                setFilter={setFilter}
              />
            </div>
            <div className='bg-blue_2'>
              <ListExpense
                expenses={expenses}
                setEditExpense={setEditExpense}
                filter={filter}
                filterExpense={filterExpense}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        ) 
      }
    </> 
  )
}

export default Dashboard