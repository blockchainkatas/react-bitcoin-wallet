import React, {PropTypes} from 'react'
import styles from './delete-wallet.css'

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDeleteWallet: PropTypes.func.isRequired
}

function DeleteWallet({coin, chain, name, onDeleteWallet}) {
  return (
    <div className={styles.root}>
      <form className={styles.form} method='post' onSubmit={onDeleteWallet}>
        <input type="hidden" name='coin' value={coin}/>
        <input type="hidden" name='chain' value={chain}/>
        <input type="hidden" name='name' value={name}/>
        <div className={styles.buttons}>
          <button className={styles.delete} type='submit'>Delete</button>
        </div>
      </form>
    </div>
  )
}

DeleteWallet.propTypes = propTypes

export default DeleteWallet