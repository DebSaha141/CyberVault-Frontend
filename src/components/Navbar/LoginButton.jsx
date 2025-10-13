import React from 'react'
import styles from './navbar.module.scss'

const LoginButton = ({ authStatus, onClick}) => {
  return (
    <div className={styles.login}>
      <button className={styles.loginButton} onClick={onClick}>
        {authStatus}
        </button>
    </div>
  )
}

export default LoginButton
