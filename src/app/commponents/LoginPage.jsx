import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex min-h-screen ">
    <div className="flex justify-center relative  w-full flex-col justify-center bg-[#0B3B3C] px-12 lg:w-1/2">
    <div className=" justify-center min-h-screen ">
        <p className=" text-xl font-bold text-white">Hi there!</p>
        <p className="text-base text-white">Welcome to our<br/>Control Portol
        </p>
        <form className="mt-8 space-y-4">
            <input type="email" placeholder="e-mail" className="h-12 bg-white placeholder:text-slate-[#0B3B3C] rounded-3xl pl-7" />
            <br/>
            <input type="password" placeholder="Password" className="h-12 bg-white placeholder:text-slate-[#0B3B3C] rounded-3xl pl-7" /><br/>
            <button className="h-12 w-32 border-1 border-white text-white hover:bg-gray-100 hover:text-black cursor-pointer rounded-3xl">Login</button>
        </form>
    </div>
    
    </div>
    <div className="absalout right-0 top-0 h-full w-[100px] translate-x-[98px]">
        <div className="h-full w-full bg-[#0B3B3C]" style={{borderRadius:"0 50% 50% 0"}}> </div> 
    </div>
    </div>
  )
}

export default LoginPage;
