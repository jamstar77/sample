import { Link } from "react-router"

const Navbar = () => {
  return (
    <div>
      Kaipoma
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/where'>Recovered Land</Link></li>
        <li><Link to='/donate'>Donate</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
