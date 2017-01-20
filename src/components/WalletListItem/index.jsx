import React, {PropTypes, Component} from 'react'
import {Link} from 'react-router'
import moment from 'moment'
import styles from './wallet-list-item.css'
import DeleteWallet from '../DeleteWallet'

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDeleteWallet: PropTypes.func.isRequired
}

class WalletListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td>
          <Link
            className={styles.link}
            to={`/${this.props.coin}/${this.props.chain}/wallets/${this.props.name}/addrs`}>
            {this.props.name}
          </Link>
        </td>
        <td>
          <Link
            className={styles.link}
            to={`/${this.props.coin}/${this.props.chain}/wallets/${this.props.name}/addrs`}>
            [Addresses]
          </Link>
        </td>
        <td>
          <DeleteWallet
            coin={this.props.coin}
            chain={this.props.chain}
            name={this.props.name}
            onDeleteWallet={this.props.onDeleteWallet}/>
        </td>
      </tr>
    )
  }
}

WalletListItem.propTypes = propTypes

export default WalletListItem
