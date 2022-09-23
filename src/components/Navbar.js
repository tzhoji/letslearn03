import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import homelogo from './Logo1.png';

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul className={styles.mainnav} >
        <li className={styles.title}>Letslearn</li>
        <img src={homelogo} alt="logo" />
        
        
          {!user && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}

          {user && (
            <>
              <li>hello, {user.displayName}</li>
              <li>
                <button className="btn" onClick={logout}>Logout</button>
              </li>
            </>
          )}
        
      </ul>
    </nav>
  )
}
