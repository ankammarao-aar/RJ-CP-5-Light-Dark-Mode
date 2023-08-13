// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: true}

  mode = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  changeText = () => {
    const {isLight} = this.state
    return isLight ? 'Light Mode' : 'Dark Mode'
  }

  changeBg = () => {
    const {isLight} = this.state
    return isLight ? 'dark-container' : 'light-container'
  }

  changeHeading = () => {
    const {isLight} = this.state
    return isLight ? 'light-heading' : 'dark-heading'
  }

  render() {
    const text = this.changeText()
    const container = this.changeBg()
    const heading = this.changeHeading()
    return (
      <div className={container}>
        <h1 className={heading}>Click To Change Mode</h1>
        <button className="button" onClick={this.mode}>
          {text}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
