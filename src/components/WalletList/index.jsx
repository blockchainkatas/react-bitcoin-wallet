import React, {PropTypes} from 'react'
import styles from './wallet-list.css'
import WalletListItem from '../WalletListItem'

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  wallets: PropTypes.object.isRequired,
  onDeleteWallet: PropTypes.func.isRequired
}

function WalletList({coin, chain, wallets, onDeleteWallet}) {
  return (
    <div className={styles.root}>
      <table>
        <thead></thead>
        <tbody>
          {wallets
            .wallet_names
            .map(walletName => {
              return (<WalletListItem
                key={walletName}
                coin={coin}
                chain={chain}
                name={walletName}
                onDeleteWallet={onDeleteWallet}/>)
            })}
        </tbody>
      </table>
    </div>
  )
}

WalletList.propTypes = propTypes

export default WalletList
