import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () =>{

  return (
    <header className="header">
      <div className="logo">
      <h1>HAPPY TABLETS</h1>
      </div>
      <nav className="navbar">
      <ul>
        <li><Link to= '/' className='list-item'>Home</Link></li>
        <li><Link to= '/' className='list-item'>Productos</Link></li>
        <li><Link to= '/' className='list-item'>Login</Link></li>
        <li><Link to= '/' className='icon'><CartWidget/></Link></li>
      </ul>
      </nav>      
    </header>
  )
}

export default NavBar