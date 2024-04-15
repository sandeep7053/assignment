import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div>
      <div className='p-3 md-4'>
        <div className='w-full max-w-md bg-white m-auto flex  flex-col p-4'>

          <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md flex item-center m-auto relative '>



          </div>

          <from className="w-full py-3 flex flex-col"  >
            <label htmlFor="firstName" >first Name</label>
            <input type={"text"} id="firstName" name="firstName" className='w-full bg-slate-200 p-1 px-2 py-1 rounded mt-1 focus-within:outline-blue-300' />

            <label htmlFor="lastName">Last Name</label>
            <input type={"text"} id="lastName" name="lastName" className='w-full bg-slate-200 p-1 px-2 py-1 rounded mt-1 focus-within:outline-blue-300' />

            <label htmlFor="email">Email</label>
            <input type={"email"} id="email" name='email' className='w-full bg-slate-200 p-1 px-2 py-1 rounded mt-1 focus-within:outline-blue-300' />

            <label htmlFor="password">Password</label>

            <div className='flex px-2 py-1 bg-slate-200 rounded mb-2 mt-1  focus-within:outline-blue-300 focus-within:outline '>
              <input type={"password"} id="password" name="password" className='w-full  bg-slate-200  border-none outline-none' />


            </div>

            <label htmlFor="confirmPassword">Confirm Password</label>

            <div className='flex px-2 py-1 bg-slate-200 rounded mb-2  mt-1  focus-within:outline-blue-300  focus-within:outline'>
              <input type={"password"} id="confirmPassword" name="confirmPassword" className='w-full  bg-slate-200  border-none outline-none' />



            </div>

            <button className='max-w-[120px] w-full bg-red-500 hover:bg-red-600 cursor-pointer m-auto text-white text-xl fontmedium text-center py-1 rounded-full mt-4' >Signup</button>

          </from>

          <p className='text-left text-sm  mt-3'>Already have account ? <Link to={"/"} className='text-red-500 underline cousor-pointer' >Login</Link></p>





        </div>

      </div>
    </div>
  )
}

export default Signup
