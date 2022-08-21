import './NavBar.scss'

const NavBar = () =>{

  return (
    <header className="header">
      <div className="logo">
      <h1>HAPPY TABLETS</h1>
      </div>
      <nav className="navbar">
      <ul>
        <li><a>Home</a></li>
        <li><a>Productos</a></li>
        <li><a>Login</a></li>
      </ul>
      </nav>
    </header>
  )
}

export default NavBar