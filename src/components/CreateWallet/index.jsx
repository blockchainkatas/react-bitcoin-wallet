import React, {PropTypes, Component} from 'react'
import styles from './create-wallet.css'

const propTypes = {
  onCreateWallet: PropTypes.func.isRequired
}

class CreateWallet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blockchain: "bcy-test"
    }

    this.handleOnSelectBlockchain = this
      .handleOnSelectBlockchain
      .bind(this)
  }

  handleOnSelectBlockchain(event) {
    this.setState({blockchain: event.target.value})
  }

  render() {
    return (
      <div>
        <form
          className={styles.form}
          method='post'
          onSubmit={this.props.onCreateWallet}>

          <label htmlFor="blockchain">Create</label>
          <select
            className={styles.name}
            name="blockchain"
            value={this.state.blockchain}
            onChange={this.handleOnSelectBlockchain}>
            <option value="btc-main">BTC Main</option>
            <option value="btc-test3">BTC Testnet</option>
            <option value="bcy-test">BCY Test</option>
          </select>

          <label htmlFor="name">wallet with name</label>
          <input className={styles.name} name='name'/>

          <div className={styles.buttons}>
            <button className={styles.create} type='submit'>Create Wallet</button>
          </div>

        </form>
      </div>
    )
  }
}

CreateWallet.propTypes = propTypes

export default CreateWallet
