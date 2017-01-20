import React, {Component} from 'react'
import {HashRouter, Match, Link} from 'react-router'
import firebase from 'firebase'
import Blockcy from 'blockcypher'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Login from '../Login'
import Menu from '../Menu'
import Wallets from '../Wallets'
import BlockchainMenu from '../BlockchainMenu'
import WalletAddresses from '../WalletAddresses'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      token: null
    }

    this.handleOnAuth = this
      .handleOnAuth
      .bind(this)
    this.handleOnLogout = this
      .handleOnLogout
      .bind(this)
  }

  handleOnAuth(event) {
    event.preventDefault()
    var token = event.target.token.value
    this.setState({token})
    console.log(`Logged in with token ${token}`)
  }

  handleOnLogout(event) {
    event.preventDefault()
    this.setState({user: null, token: null})
    console.log(`Logged out`)
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Header token={this.state.token} onLogout={this.handleOnLogout}/>

          <Match
            exactly
            pattern='/'
            render={() => {
            if (this.state.token) {
              return (<BlockchainMenu/>)
            } else {
              return (<Login onAuth={this.handleOnAuth}/>)
            }
          }}/>

          <Match
            exactly
            pattern='/:coin/:chain/wallets'
            render={({params}) => {
            if (this.state.token) {
              return (
                <div>
                  <Menu coin={params.coin} chain={params.chain}/>
                  <Wallets coin={params.coin} chain={params.chain} token={this.state.token}/>
                </div>
              )
            } else {
              return (<Login onAuth={this.handleOnAuth}/>)
            }
          }}/>

          <Match
            exactly
            pattern='/:coin/:chain/wallets/:wallet/addrs'
            render={({params}) => {
            if (this.state.token) {
              return (
                <div>
                  <Menu coin={params.coin} chain={params.chain}/>
                  <WalletAddresses
                    coin={params.coin}
                    chain={params.chain}
                    wallet={params.wallet}
                    token={this.state.token}/>
                </div>
              )
            } else {
              return (<Login onAuth={this.handleOnAuth}/>)
            }
          }}/>

        </div>
      </HashRouter>
    )
  }
}

export default App
