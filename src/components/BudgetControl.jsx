import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { MdAttachMoney, MdAccountBalanceWallet, MdMoneyOff, MdAddCircle, MdSearch } from "react-icons/md";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import BoxControl from "./BoxControl";
import Modal from "./Modal";

const BudgetControl = ({ 
    budget, 
    setBudget,
    setIsValidBudget,
    user, 
    setUser,
    setIsValidUser,
    expenses, 
    setExpenses, 
    handleSaveExpense,
    editExpense,
    setEditExpense,
    modal,
    setModal,
    filter,
    setFilter,
    animateModal,
    setAnimateModal,
  }) => {

  const navigate = useNavigate()

  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(0); 

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0);
    setSpent(totalSpent);

    const totalAvailable = budget - totalSpent; 
    setAvailable(totalAvailable);

    const calculatePercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2); 
    setTimeout(() => {
      setPercentage(calculatePercentage);
    }, 1500)
  }, [expenses]);

  const handleNewExpense = () => {
    setModal(true);
    setEditExpense({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 2000)
  }

  const handleResetApp = () => {
    setBudget(0);
    setUser([]);
    setExpenses([]);
    setIsValidBudget(false);
    setIsValidUser(false);
    navigate('/')
  }

  return (
    <>
      <div 
        className='w-10/12 mx-auto mb-8 '>
        {
          user.map(u => (
            <h4
              key={u.id} 
              className='text-white_2 text-2xl font-bold'>
              Welcome {u.name}
            </h4>
          ))
        }
      </div>
      <div 
        className='flex justify-center items-center bg-blue_2 w-10/12 mx-auto p-3 mb-6'>
        <input 
          className='bg-blue_2 w-full text-gray_2'
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)} 
        />
        <span 
          className='text-gray_1 text-xl'>
          <MdSearch />
        </span>
      </div>
      <div
        className='w-10/12 mx-auto mb-6'>
        <button
          className='bg-blue_5 p-3 w-full text-white_2 font-bold'
          onClick={handleResetApp}>
          Reset App
        </button>
    </div>
      <div
        className='text-white_2 w-10/12 md:w-full mx-auto'>
        <BoxControl
          color='bg-blue_4'
          icon= {<MdAttachMoney />}
          text='Income'
          state={budget}
          percentage={42}
        />
        <BoxControl
          color='bg-blue_3' 
          text='Available'
          state={available}
          icon= {<MdAccountBalanceWallet />}
          percentage={20}
        />
        <BoxControl
          color='bg-blue_1' 
          text='Spent'
          state={spent}
          icon= {<MdMoneyOff />}
          percentage={35}
        />
      
      </div>
      <div 
        className='w-4/6 mx-auto my-6 md:mt-8'>
        <CircularProgressbar
          value={percentage}
          text={`${percentage} %`}
          strokeWidth={25}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: percentage > 100 ? '#b43f59' : '#255bad',
            trailColor: '#172a46',
            textColor: percentage > 100 ? '#b43f59' : '#255bad',
            textSize: '8px',
          })}
        />
      </div>
      <div 
        className='bg-blue_5 text-white_2 text-2xl cursor-pointer fixed right-5 md:right-10 md:bottom-10 bottom-5 rounded-full p-3'>
        <MdAddCircle
          onClick={handleNewExpense}  
        />
      </div>
      {
        modal && (
          <Modal
            setExpenses={setExpenses}
            handleSaveExpense={handleSaveExpense}
            setModal={setModal}
            editExpense={editExpense}
            setEditExpense={setEditExpense}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
          />
        )
      }
    </>
  )
}

export default BudgetControl
