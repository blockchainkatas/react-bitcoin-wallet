import React, {PropTypes} from 'react'
import styles from './login.css'

const propTypes = {
  onAuth: PropTypes.func.isRequired
}

function Login({onAuth}) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        You need a BlobkCypher token to use the wallet.<br/>
        If you dont have one, you can get it here:<br/>
        <a target="_blank" href="https://accounts.blockcypher.com">https://accounts.blockcypher.com</a>
      </p>
      <form className={styles.form} method='post' onSubmit={onAuth}>
        <input type="text" className={styles.text} name='token'/>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <span className='fa fa-github '></span>
            Login with BlockCypher token
          </button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = propTypes

export default Login
