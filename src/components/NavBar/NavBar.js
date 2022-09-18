import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (
    <header className="header">
      <div className="logo">
        <Link to='/'> <h1>HAPPY TABLETS</h1></Link>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to='/' className='list-item'>Home</Link></li>
          <li><Link to='/productos/lenovo' className='list-item'>LENOVO</Link></li>
          <li><Link to='/productos/tcl' className='list-item'>TCL</Link></li>
          <li><Link to='/productos/exo' className='list-item'>EXO</Link></li>
          <li><Link to='/productos/samsung' className='list-item'>SAMSUNG</Link></li>
          <li><Link to='/productos/x-view' className='list-item'>X-VIEW</Link></li>
          <li><Link to='/productos/philco' className='list-item'>PHILCO</Link></li>
          <li><Link to='/login' className='list-item'>Login</Link></li>
          <li><CartWidget /></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar