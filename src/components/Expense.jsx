import { formatMoney, generateDate } from "../helpers";

import { MdDelete, MdModeEdit } from "react-icons/md";

import IconJavaScript from '../images/javascript.svg';
import IconYoutube from '../images/youtube.svg';
import IconRockStar from '../images/rockstargames.svg';
import IconSpotify from '../images/spotify.svg';
import IconMcDonals from '../images/mcdonalds.svg';
import IconGoogle from '../images/google.svg';
import IconTheNorthFace from '../images/thenorthface.svg';

//Diccionario de iconos
const dictionaryIcons = {
  Food: IconMcDonals,
  Hobbie: IconYoutube,
  VideoGames: IconRockStar,
  Study: IconGoogle,
  Work: IconJavaScript,
  Clothes: IconTheNorthFace,
  Subscriptions: IconSpotify,
}

const Expense = ({ expense, setEditExpense, handleDelete }) => {

  const { name, amount, category, date, id } = expense;

  return (
    <tr
      className='text-white_1'>
      <td 
        className='py-4 px-5'>
        <div className='flex items-center gap-3'>
          <img 
            src={dictionaryIcons[category]} 
            alt={category} 
            className='w-5' 
          />
          <p>
            {category}
          </p>
        </div>
      </td>
      <td 
        className='text-white_2 py-4 px-5'>
        {name}
      </td>
      <td 
        className='text-white_2 py-4 px-5'>
        {generateDate(date)}
      </td>
      <td 
        className='py-4 px-5'>
        {formatMoney(amount)}
      </td>
      <td 
        className='py-4 px-5'>
        <div className='flex gap-4'>
          <span
            className='bg-blue_5 p-2'
            onClick={() => setEditExpense(expense)}>
            <MdModeEdit />
          </span>
          <span 
            className='bg-red_1 p-2'
            onClick={() => handleDelete(id)}>
            <MdDelete />
          </span>
        </div>
      </td>
    </tr>
  )
}

export default Expense