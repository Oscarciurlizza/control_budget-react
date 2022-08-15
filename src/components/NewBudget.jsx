import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {

  const navigate = useNavigate()

  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!Number(budget) || Number(budget) < 0) {
      setMessage('Invalid budget');
      return
    }
    setMessage('');
    setIsValidBudget(true);
    navigate('/user');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='xl:w-1/2 max-w-xl w-10/12 mx-auto'>
      <div 
        className='bg-white_1 flex p-2'>
        <input
          className='bg-white w-full text-primary md:text-md text-sm  font-medium outline-hidden px-4'
          placeholder="Add your budget ..."
          type="number"
          onChange={e => setBudget(Number(e.target.value))}
        />
        <input
          className='bg-blue_5 text-white_1 text-sm font-bold md:py-4 md:px-10 py-2 px-4'
          type='submit' 
          value="Go!"
        />
      </div>
      { message && <Message type='error'>Dude is not an integer</Message> }
    </form>
  )
}

export default NewBudget