import React, { useState } from "react";
import logoImage from "../asserts/images/logoImage.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  // function to display menu
  const handleMenu = () => {
    setMenu(!menu);
  };

   // function to make the navLinks disappear when clicked on the small screen
   const handleNavLinkDisappear = () => {
    setMenu(false);
  };

  return (
    <React.Fragment>
      <section className="bg-black">
        <nav className="w-full h-12 px-5 flex items-center justify-between md:w-4/5 md:mx-auto">
          <div>
            <img src={logoImage} alt="logo" className="w-12 h-12" />
          </div>

          <div className="text-2xl text-white md:hidden">
            {menu === false ? (
              <AiOutlineMenu onClick={handleMenu} />
            ) : (
              <AiOutlineClose onClick={handleMenu} />
            )}
          </div>

          {/* large screen */}
          <nav className="hidden md:block md:container pl-10">
          <div className="flex justify-between text-xl">
              <div className="flex text-white space-x-4">
              <Link to="/">
                  <p className=''  >Politics</p>
                </Link>
                <Link to="business">
                  <p className=''>Business</p>
                </Link>
                <Link to="health">
                  <p className=''>Health</p>
                </Link>
                <Link to="entertainment">
                  <p className='' >Entertainment</p>
                </Link>
               
              </div>
              <div>
              <Link to="joinUs">
                  <p className=" capitalize bg-green-400 w-32 text-center rounded-md">
                    join us
                  </p>
                </Link>
              </div>
            </div>
          </nav>
        </nav>




        {/* mobile screen */}
        <nav className='md:hidden'>
          {menu && (
            <div className="text-xl border-t text-white mx-5">
              <div className="space-y-6 py-4 ">
              <Link to="/">
                  <p className='' onClick={handleNavLinkDisappear} >Politics</p>
                </Link>
                <Link to="business">
                  <p className='mt-2' onClick={handleNavLinkDisappear}>Business</p>
                </Link>
                <Link to="health">
                  <p className='mt-2' onClick={handleNavLinkDisappear}>Health</p>
                </Link>
                <Link to="entertainment">
                  <p className='mt-2'onClick={handleNavLinkDisappear} >Entertainment</p>
                </Link>
                <Link to="joinUs">
                  <p className="mt-4 capitalize bg-green-400 w-32 text-center rounded-md" onClick={handleNavLinkDisappear}>
                    join us
                  </p>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
