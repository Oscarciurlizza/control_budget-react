import { Outlet } from "react-router-dom"

import Header from "./Header"
import NewBudget from "./NewBudget"

const Hero = ({ 
    title, 
    description, 
    budget, 
    setBudget, 
    setIsValidBudget,
  }) => {

  return (
    <>
      <Header />
      <main
        className='h-screen w-11/12 mx-auto flex justify-center flex-col absolute top-0 left-0 right-0 bottom-0'>
        <h1
          className='max-w-4xl mx-auto text-white_2 text-center xl:text-7xl md:text-5xl text-3xl font-bold leading-tight mb-10'>
          {title}
        </h1>
        <p 
          className='max-w-xl mx-auto text-gray_1 text-center  text-sm  font-bold leading-7 mb-10'>
          {description}
        </p>
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      </main>
      <Outlet />
    </>
  )
}

export default Hero