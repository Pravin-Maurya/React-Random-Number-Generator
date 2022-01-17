// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  generateRandomNumber = () => {
    const generatedRandomNumber = this.getRandomNumber()
    this.setState({randomNumber: generatedRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="details">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateRandomNumber}
            type="button"
            className="click-button"
          >
            Generate
          </button>
          <p className="heading">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
