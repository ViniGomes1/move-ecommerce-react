import './NavBar.css'
import logo from '../../assets/Logos/logo - move .svg';
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
        <Link to={navbarLinks.home.to} className="logo">
          <img src={logo} />
          <p>MOVE Co.</p>
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