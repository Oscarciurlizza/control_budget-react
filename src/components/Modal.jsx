import { useState, useEffect } from "react"
import { MdClear } from "react-icons/md";

import Message from "./Message";



const Modal = ({ 
    handleSaveExpense, 
    setModal, 
    editExpense, 
    animateModal,
    setAnimateModal
  }) => {
  
  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
      setId(editExpense.id);
      setDate(editExpense.date);
    }
  }, []);

  const handleCloseModal = () => {
    setModal(false);
    
    setTimeout(() => {
      setAnimateModal(false)
    }, 2000);
  }

  const handleNewExpense = e => {
    e.preventDefault();
    
    if([name, amount, category].includes('')) {
      setMessage('Invalid');

      setTimeout(() => {
        setMessage('');
      }, 3000);
      return
    }
    setModal(false);
    handleSaveExpense({ name, amount, category, id, date });
  }

  return (
    <div
      className='w-full bg-black_modal flex justify-center items-center absolute top-0 left-0 right-0 bottom-0'>
      <div
        className='text-white_1 text-xl absolute top-5 md:top-10 right-5 md:right-10 bottom-5 md:bottom-10'>
        <MdClear 
          onClick={handleCloseModal} 
        />
      </div>
      <form
        onSubmit={handleNewExpense}
        className='bg-white_1 text-blue_1 p-8 w-11/12 sm:w-auto'>
        <span
          className='text-center text-4xl block mb-4'>
          
        </span>
        <h2
          className='text-center text-2xl font-bold mb-10'>
          {editExpense.name ? 'Edit expense 💵 !' : 'New expense 💳 !'}
        </h2>
        <div
          className='mb-6'>
          <label
            className='text-sm font-bold' 
            htmlFor='name'>
            Name
          </label>
          <input
            className='w-full bg-gray_2 text-sm p-3 mt-3'
            id='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div
          className='mb-6'>
          <label
            className='text-sm font-bold' 
            htmlFor='amount'>
            Amount
          </label>
          <input
            className='w-full bg-gray_2 text-sm p-3 mt-3'
            id='amount'
            type='number'
            placeholder='Amount'
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>
        <div
          className='mb-6'>
          <label
            className='text-sm font-bold block' 
            htmlFor='amount'>
            Select a category
          </label>
          <select 
            className='w-80 bg-gray_2 text-sm p-3 mt-3 border-0 outline-none'
            value={category}
            onChange={e => setCategory(e.target.value)} >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Hobbie">Hobbies</option>
            <option value="VideoGames">VideoGames</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Clothes">Clothes</option>
            <option value="Subscriptions">Subscriptions</option>
          </select>
        </div>
        {
          message && <Message>All fields are required</Message>
        }
        <input
          className='w-full bg-blue_5 text-white_1 text-sm font-bold py-3'  
          type='submit'
          value={editExpense.name ? 'Edit expense' : "Let's start !"}
        />
      </form>
    </div>
  )
}

export default Modal