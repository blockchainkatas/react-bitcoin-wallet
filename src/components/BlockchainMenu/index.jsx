import React from 'react'
import {Link} from 'react-router'
import styles from './blockchain-menu.css'

function BlockchainMenu() {
  return (
    <div className={styles.root}>
      <Link to='/btc/main/wallets'>
        <button className={styles.button}>
          <span className='fa fa-lg fa-bank'></span>
          Bitcoin Main
        </button>
      </Link>
      <Link to='/btc/test3/wallets'>
        <button className={styles.button}>
          <span className='fa fa-lg fa-bank'></span>
          Bitcoin Testnet3
        </button>
      </Link>
      <Link to='/bcy/test/wallets'>
        <button className={styles.button}>
          <span className='fa fa-lg fa-bank'></span>
          BlockCypher Test
        </button>
      </Link>
    </div>
  )
}

export default BlockchainMenu
