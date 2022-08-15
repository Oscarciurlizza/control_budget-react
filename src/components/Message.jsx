const Message = ({ children }) => {
  return (
    <div
      className={`text-center text-sm font-bold bg-white_1 text-red_1 mt-5 mb-5`}>
      <div className='border-l-2 p-2'>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Message