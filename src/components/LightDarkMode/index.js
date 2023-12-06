// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkmode: true}

  render() {
    const {isDarkmode} = this.state
    const buttonText = isDarkmode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="theout">
        {isDarkmode ? (
          <div className="inner">
            <p>Click To Change Mode</p>
            <div className="thebuttons">Light Mode</div>
          </div>
        ) : (
          <div className="innerwhite">
            <p>Click To Change Mode</p>
            <div className="thebuttons">Light Mode</div>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
