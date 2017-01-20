import React, {PropTypes} from 'react'
import styles from './address-list.css'
import AddressListItem from '../AddressListItem'

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired,
  addresses: PropTypes.array.isRequired,
  onRemoveAddressFromWallet: PropTypes.func.isRequired
}

function AddressList({coin, chain, wallet, addresses, onRemoveAddressFromWallet}) {
  if (addresses.length == 0) {
    return (
      <div className={styles.root}>No addresses. You can generate one!</div>
    )
  } else {
    return (
      <div className={styles.root}>
        <table>
          <thead></thead>
          <tbody>
            {addresses.map(address => {
              return (<AddressListItem
                key={address}
                coin={coin}
                chain={chain}
                wallet={wallet}
                address={address}
                onRemoveAddressFromWallet={onRemoveAddressFromWallet}/>)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

AddressList.propTypes = propTypes

export default AddressList
