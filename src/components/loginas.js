import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function Loginas() {
    const signupplayerfun=()=>{

    }
    const signuporgfun=()=>{
        toast("Can't sign up as organisation now")
       
    }
  return (
    <section class="bg-gray-50 dark:bg-gray-900 h-[100vh] flex items-center"><ToastContainer/>
  <div class="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-[85%]">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form class="space-y-4 md:space-y-6 " action="#">
                  <Link to="/signup" className='mt-[5rem]'>
                  <button type="submit"  class="w-full  text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] ">Sign up as Player</button>
                  </Link>
                  <div>
                  <button type="submit" onClick={signuporgfun} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] ">Sign up as Organisation</button>
                  </div>
                  <div class="flex items-center justify-between">
                     
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                  </div>

                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
