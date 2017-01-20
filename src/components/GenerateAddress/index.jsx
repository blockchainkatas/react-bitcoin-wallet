import React, {PropTypes, Component} from 'react'
import styles from './generate-address.css'

const propTypes = {
  onGenerateAddressInWallet: PropTypes.func.isRequired
}

class GenerateAddress extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.root}>
        <form
          className={styles.form}
          method='post'
          onSubmit={this.props.onGenerateAddressInWallet}>
          <div className={styles.buttons}>
            <button className={styles.generate} type='submit'>Generate New Address</button>
          </div>
        </form>
      </div>
    )
  }
}

GenerateAddress.propTypes = propTypes

export default GenerateAddress
