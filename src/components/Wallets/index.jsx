import React, {Component, PropTypes} from 'react'
import Blockcy from 'blockcypher'
import styles from './wallets.css'
import WalletList from '../WalletList'
import CreateWallet from '../CreateWallet'

const propTypes = {
  coin: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired
}

class Wallets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wallets: {
        "wallet_names": []
      }
    }

    this.handleOnCreateWallet = this
      .handleOnCreateWallet
      .bind(this)
    this.handleOnDeleteWallet = this
      .handleOnDeleteWallet
      .bind(this)
  }

  componentWillMount() {
    this.loadWalletList()
  }

  loadWalletList() {
    let bcapi = new Blockcy(this.props.coin, this.props.chain, this.props.token);

    console.log(`list wallets on blockchain ${this.props.coin} ${this.props.chain}`)

    this.state = {
      wallets: {
        "wallet_names": []
      }
    }

    bcapi.listWallets((err, data) => {
      this.setState({wallets: data})
      console.log('error: ', err)
      console.log('data: ', data)
    })
  }

  handleOnCreateWallet(event) {
    event.preventDefault()
    let blockchain = event.target.blockchain.value
    let name = event.target.name.value
    let coin = blockchain.split('-')[0]
    let chain = blockchain.split('-')[1]
    let bcapi = new Blockcy(coin, chain, this.props.token)

    let data = {
      name: name
    }

    console.log(`create wallet ${name} for coin ${coin} on chain ${chain}`)

    bcapi.createWallet(data, (err, body) => {
      console.log('error: ', err)
      console.log('data: ', body)
      this.loadWalletList()
    })
  }

  handleOnDeleteWallet(event) {
    event.preventDefault()
    let coin = event.target.coin.value
    let chain = event.target.chain.value
    let name = event.target.name.value
    let bcapi = new Blockcy(coin, chain, this.props.token)

    console.log(`delete wallet ${name} for coin ${coin} on chain ${chain}`)

    bcapi.delWallet(name, (err, body) => {
      console.log('error: ', err)
      console.log('data: ', body)
      this.loadWalletList()
    })
  }

  render() {
    if (this.state.wallets.wallet_names.length == 0) {
      return (
        <div>Loading ...</div>
      )
    } else {
      return (
        <div className={styles.root}>
          <h1>
            <a
              target="_blank"
              href={"https://api.blockcypher.com/v1/" + this.props.coin + "/" + this.props.chain + "/wallets?token=" + this.props.token}>Wallets</a>
          </h1>
          <WalletList
            coin={this.props.coin}
            chain={this.props.chain}
            wallets={this.state.wallets}
            onDeleteWallet={this.handleOnDeleteWallet}/>
          <CreateWallet onCreateWallet={this.handleOnCreateWallet}/>
        </div>
      )
    }
  }
}

export default Wallets