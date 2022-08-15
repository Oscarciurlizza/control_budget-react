import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Message from './Message';

const FormUser = ({ handleSaveUser, setIsValidUser }) => {

  const navigate = useNavigate();
  
  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    if([name, email, description].includes('')) {
      setMessage('All fields are required');
      setTimeout(() => {
        setMessage('');
      }, 3000)
      return
    }
    setIsValidUser(true);
    handleSaveUser({ name, email, description });
    navigate('/dashboard')
  }

  return (
    <form
      onSubmit={handleSubmit} 
      className='bg-white_1 text-blue_1 p-8'>
      <h2
        className='text-center text-2xl font-bold mb-5'>
        Welcome 💸!
      </h2>
      <div
        className='mb-6'>
        <label
          className='text-sm font-bold' 
          htmlFor='name'>
          Name
        </label>
        <input
          className='w-full bg-gray_2 text-sm  p-3 mt-3'
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
          htmlFor='email'>
          Email
        </label>
        <input
          className='w-full bg-gray_2 text-sm  p-3 mt-3'
          id='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div
        className='mb-6'>
        <label
          className='text-sm font-bold' 
          htmlFor='description'>
          Do you like to save?
        </label>
        <textarea
          className='w-full bg-gray_2 text-sm p-3 mt-3'
          id='description'
          rows='4'
          type='text'
          placeholder='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      {
        message && <Message>All fields are required</Message>
      }
      <input
        className='w-full text-white_1 text-sm font-bold  py-3 bg-blue_5' 
        type='submit'
        value='Lets do it !'  
      />
    </form>
  )
}

export default FormUser