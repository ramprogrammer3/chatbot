import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {user} = useSelector((state)=>state.user);
  console.log(user);
  return (
    <div className='py-2 border-b-2'>
      <div className='w-11/12 max-w-[1080px] mx-auto flex justify-between items-center'>

        <Link to={"/"} className='text-2xl tracking-wider'>chatbot</Link>

        <div className='flex gap-x-4'>

          {
            !user && <Link to={"/login"}>Login</Link>
          }

          {
            !user && <Link to={"/signup"}>Signup</Link>
          }

          {
            user && <Link to={"/chat"}> Go to chat </Link>
          }

          {
            user && <button>Logout</button>
          }

        </div>

      </div>
    </div>
  )
}

export default Navbar
