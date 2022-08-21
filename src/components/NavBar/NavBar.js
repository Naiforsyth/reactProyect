import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'

const NavBar = () =>{

  return (
    <header className="header">
      <div className="logo">
      <h1>HAPPY TABLETS</h1>
      </div>
      <nav className="navbar">
      <ul>
        <li><p className='list-item'>Home</p></li>
        <li><p className='list-item'>Productos</p></li>
        <li><p className='list-item'>Login</p></li>
        <li><p className='icon'><CartWidget/></p></li>
      </ul>
      </nav>      
    </header>
  )
}

export default NavBar