
import { Link } from 'react-router-dom'
import Logo  from "../../assests/logo192.png";
import { useState,useEffect } from 'react';
import { Search } from '../Sections/Search';
import { useCart } from '../../context';
// import { DropdownLoggedIn } from '../Elements/DropdownLoggedIn';
import { DropdownLoggedOut } from '../Elements/DropdownLoggedOut';
 export const Header = () => {
    let [Dark,setDark]=useState(false);
   let [show,setShow]=useState(false);
   let [dropdown,setDropdown]=useState(false);
   let {cartList}=useCart();
    useEffect(()=>{
        if(Dark){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[Dark])
  return (
          <header>      
      <nav className="bg-white dark:bg-gray-900">
          <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
              <Link to="/" className="flex items-center">
                  <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
              </Link>
              <div className="flex items-center relative">
               
              <button onClick={() => setDark(!Dark)}> <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected" ></span></button>
                  <span onClick={()=>setShow(!show)}className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                  <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  {dropdown && <DropdownLoggedOut/>}
              </div>
          </div>
      </nav>
     {show && <Search setShow={setShow} show={show} />}
    </header>
  )
}