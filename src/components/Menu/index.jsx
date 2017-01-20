import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from './menu.css'

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired
}

function Menu({coin, chain}) {
  return (
    <div className={styles.root}>
      <Link to='/'>
        <button className={styles.button}>
          <span className='fa fa-lg fa-home'></span>
          Home
        </button>
      </Link>
      <Link to={`/${coin}/${chain}/wallets`}>
        <button className={styles.button}>
          <span className='fa fa-lg fa-home'></span>
          Wallets
        </button>
      </Link>
    </div>
  )
}

Menu.propTypes = propTypes

export default Menu
