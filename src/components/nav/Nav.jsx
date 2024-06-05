import './nav.css'
import { IoHomeOutline  } from "react-icons/io5";
import { FaUser, FaBook, FaRegAddressBook  } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActive] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActive('#')} className={activeNav==='#' ? 'active':'' }><IoHomeOutline  /></a>

      <a href="#about" onClick={()=> setActive('#about')} className={activeNav==='#about' ? 'active':'' }><FaUser /></a>

      <a href="#experience"  onClick={()=> setActive('#experience')} className={activeNav==='#experience' ? 'active':'' }><FaBook /></a>

      <a href="#learning" onClick={()=> setActive('#learning')} className={activeNav==='#services' ? 'active':'' } ><RiServiceLine /></a>

      <a href="#contact" onClick={()=> setActive('#contact')} className={activeNav==='#contact' ? 'active':'' }><FaRegAddressBook /></a>

    </nav>
  )
}

export default Nav
