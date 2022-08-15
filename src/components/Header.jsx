const Header = () => {
  return (
    <header 
      className='w-11/12 mx-auto flex justify-center items-center relative py-10'>
        <nav
          className='text-white_2 text-sm font-bold flex md:gap-10 gap-5'>
          <a href="#">Home</a>
          <a href="#">Tech</a>
          <a href="#">How use?</a>
          <a href="#">Repository</a>
        </nav>
    </header>
  )
}

export default Header