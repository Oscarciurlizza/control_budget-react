import { useState } from "react"

import FormUser from "./FormUser"

const User = ({ 
    handleSaveUser, 
    setIsValidUser,
    setUser,
  }) => {

    const [loader, setLoader] = useState(true); 

    const handleLoader = () => {
      setTimeout(() => {
        setLoader(false);
      }, 4000)
    }
    handleLoader();

  return (
    <div
      className='bg-blue_1 h-screen w-11/12 md:w-full flex justify-center items-center mx-auto'>
      {
        loader ? (
          <div className='container-loader'>
            <span className="loader"></span>
          </div>
        ) : (
          <FormUser
            setUser={setUser}
            handleSaveUser={handleSaveUser}
            setIsValidUser={setIsValidUser}
          />  
        )
      }
    </div>
  )
}

export default User