import React, {Component, PropTypes} from 'react'
import Blockcy from 'blockcypher'
import styles from './wallet-addresses.css'
import AddressList from '../AddressList'
import GenerateAddress from '../GenerateAddress'

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired
}

class WalletAddresses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addresses: []
    }

    this.handleOnGenerateAddressInWallet = this
      .handleOnGenerateAddressInWallet
      .bind(this)
    this.handleOnRemoveAddressFromWallet = this
      .handleOnRemoveAddressFromWallet
      .bind(this)
  }

  componentWillMount() {
    this.loadAddressList()
  }

  loadAddressList() {
    let bcapi = new Blockcy(this.props.coin, this.props.chain, this.props.token);

    console.log(`list wallet addresses in wallet ${this.props.wallet} on blockchain ${this.props.coin} ${this.props.chain}`)

    this.state = {
      addresses: []
    }    

    bcapi.getAddrsWallet(this.props.wallet, (err, data) => {
      console.log('error: ', err)
      console.log('data: ', data)
      this.setState(data)
    })
  }

  handleOnGenerateAddressInWallet(event) {
    event.preventDefault()

    let bcapi = new Blockcy(this.props.coin, this.props.chain, this.props.token)

    console.log(`generate address in wallet ${this.props.wallet} for coin ${this.props.coin} on chain ${this.props.chain}`)

    bcapi.genAddrWallet(this.props.wallet, (err, body) => {
      console.log('error: ', err)
      console.log('data: ', body)
      this.loadAddressList()
    })
  }

  handleOnRemoveAddressFromWallet(event) {
    event.preventDefault()
    let address = event.target.address.value
    let bcapi = new Blockcy(this.props.coin, this.props.chain, this.props.token)

    console.log(`remove address ${address} from wallet ${this.props.wallet} for coin ${this.props.coin} on chain ${this.props.chain}`)

    bcapi.delAddrsWallet(this.props.wallet, [address], (err, body) => {
      console.log('error: ', err)
      console.log('data: ', body)
      this.loadAddressList()
    })
  }

  render() {
    return (
      <div className={styles.root}>
        <h1>
          <a
            target="_blank"
            href={"https://api.blockcypher.com/v1/" + this.props.coin + "/" + this.props.chain + "/wallets/" + this.props.wallet + "/addresses?token=" + this.props.token}>Wallet {this.props.wallet} addresses</a>
        </h1>
        <AddressList
          coin={this.props.coin}
          chain={this.props.chain}
          wallet={this.props.wallet}
          addresses={this.state.addresses}
          onRemoveAddressFromWallet={this.handleOnRemoveAddressFromWallet}/>
        <GenerateAddress
          onGenerateAddressInWallet={this.handleOnGenerateAddressInWallet}/>
      </div>
    )
  }
}

export default WalletAddresses