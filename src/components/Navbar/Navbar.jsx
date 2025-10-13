import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import Logo from '../../assets/images/Logo.png'
import LoginButton from './LoginButton'
import NavList from './NavList'
import Hamburger from './Hamburger'
import { useNavigate, useLocation } from 'react-router-dom'

// Check comment
const Navbar = () => {
  // Check if the user is authenticated or not assuming that the data or token is in the local storage to show the correct button
  const [authStatus, setAuthStatus] = useState('Login')
  const[userData, setUserData] = useState(null)

 


  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkStored = () => {
      const stored = localStorage.getItem('userData')

      if (!stored) {
        setAuthStatus('Login')
        setUserData(null)
        return
      }

      try {
        const parsed = JSON.parse(stored)
        if (parsed && typeof parsed === 'object') {
          setAuthStatus('Logout')
          setUserData(parsed)
        } else {
          setAuthStatus('Login')
          localStorage.removeItem('userData')
          setUserData(null)
        }
      } catch {
        setAuthStatus('Login')
        localStorage.removeItem('userData')
        setUserData(null)
      }
    }

    checkStored()

    const onStorage = (e) => {
      if (e.key === 'userData') checkStored()
    }
    window.addEventListener('storage', onStorage)

    return () => window.removeEventListener('storage', onStorage)
  }, [location])

  const handleLogOut = () =>{


    localStorage.removeItem('userData')
    localStorage.removeItem('token')

    setAuthStatus('Login')
    setUserData(null)

    console.log('user logged out')


    navigate('/')

  }
  



  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" className={styles.logoImage} />
        </div>
        <NavList />
        <LoginButton authStatus={authStatus} onClick = {()=>{
          if(userData){
            handleLogOut()
          }
          else{
            navigate('/login')
          }
        }} userData={userData} />
        <Hamburger authStatus={authStatus} />
      </div>
    </nav>
  )
}

export default Navbar


