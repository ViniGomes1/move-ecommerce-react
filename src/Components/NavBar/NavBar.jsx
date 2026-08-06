import './NavBar.css'
import Logo from  '../../assets/Logos/gemini-svg.svg?react';
import person from '../../assets/Logos/person.svg'
import magnifier from '../../assets/Logos/magnifier.svg'
import bagfill from '../../assets/Logos/bag-fill.svg'
import { Link } from 'react-router-dom';

const navbarLinks = {
  shop: {to: "/shop"},
  home: {to: "/"},
  events: {to: "/events"},
  account: {to: "/account"}
}

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbarcontent'>
        <Link to={navbarLinks.home.to} className=" flex flex-row items-center " >
          <Logo className='size-[40px] text-[#15342d] pr-[10px]'/>
          <p className="text-[#15342d] text-[19px] font-[700] font-['Ibarra_Real_Nova']">MOVE Co.</p>
        </Link>
        <ul className="nav-links">
          <li><Link to={navbarLinks.shop.to}>LOJA</Link></li>
          <li><Link to={navbarLinks.events.to}>EVENTOS</Link></li>
        </ul>
        <ul className="nav-logos">
          <li><Link to={navbarLinks.account.to}><img src={person}/></Link></li>
          <li><a href=""><img src={magnifier}/></a></li>
          <li><a href=""><img src={bagfill}/></a></li>
        </ul>
      </div>
    </nav>
  )
}


export default NavBar