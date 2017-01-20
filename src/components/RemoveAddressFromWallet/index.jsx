import React, {PropTypes} from 'react'
import styles from './remove-address-from-wallet.css'

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onRemoveAddressFromWallet: PropTypes.func.isRequired
}

function RemoveAddressFromWallet({coin, chain, wallet, address, onRemoveAddressFromWallet}) {
  return (
    <div className={styles.root}>
      <form method='post' onSubmit={onRemoveAddressFromWallet}>
        <input type="hidden" name='coin' value={coin}/>
        <input type="hidden" name='chain' value={chain}/>
        <input type="hidden" name='wallet' value={wallet}/>
        <input type="hidden" name='address' value={address}/>
        <div className={styles.buttons}>
          <button className={styles.remove} type='submit'>Remove</button>
        </div>
      </form>
    </div>
  )
}

RemoveAddressFromWallet.propTypes = propTypes

export default RemoveAddressFromWallet