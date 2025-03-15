import React from 'react'
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
    <div className="bg-[#0B3B3C]"
    style={{
      borderRadius: "0 30% 0 30%",
    }} >
    <div className="pt-[50px] pr-[50px] pb-0 pl-[50px]">
        <div >
            <img
                src=""
                alt="TWC Logo"
                className="mx-auto mb-4 h-12 "
            />
            <h2 className="text-2xl font-bold text-white">
            contacts
            <br />
            portal
          </h2>
        </div>
        
        <div className="flex flex-col justify-center h-[75vh] text-white">
            <div>
                <h2 className="text-4xl">Welcome,</h2>
                <p className="text-xl pb-[50px]">This is where your contacts will live .Click the button below<br/>
                to add a new contact</p>
            </div>
            <div>
                <button className="rounded-3xl border-2 p-[10px] hover-black">add your first contact</button>
            </div>
                        <Link to="/Login" className=" text-white pt-[60px] underline text-right"> &lt; Back to Login </Link>
        </div>
    </div>
    </div>
    </div>
  )
}

export default WelcomePage
