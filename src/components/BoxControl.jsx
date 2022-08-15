import { formatMoney } from "../helpers"

const BoxControl = ({ color, icon, state, text, percentage }) => {
  return (
    <div className={color}>
      <div 
        className='w-10/12 flex justify-between items-center h-36 mx-auto'>
        <span 
          className='flex justify-center items-center rounded-full h-12 w-12 bg-white_2 bg-opacity-10 text-lg'>
            {icon}
        </span>
        <p
          className='font-bold text-lg text-center'>
          {
            formatMoney(state)
          }
          <span className='block font-light text-sm mt-2'>
            Total {text}
          </span>
        </p>
        <p 
          className='flex items-center gap-2 text-secundary'>
          {percentage}%
        </p>
      </div>
    </div>
  )
}

export default BoxControl