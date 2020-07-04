import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      lowRate: '',
      medRate: '',
      highRate: '',
      result: '',
      errorMessage: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  myInputHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(event) {
    
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {
        balance: this.state.balance,
        lowRate: this.state.lowRate,
        medRate: this.state.medRate,
        highRate: this.state.highRate})
    };
    fetch('http://localhost:8080/interest-results', requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setState({ result: data });
         })
        .catch((error) => {
          this.setState({ errorMessage: error});
        });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <label>
          Balance:
          <input type="text" name="balance" required onInput={this.myInputHandler}/>
        </label>
        <label>
          LowRate % (0-1000 of balance):
          <input type="text" name="lowRate" required onInput={this.myInputHandler}/>
         </label>
        <label>
          MedRate % (1000-5000 of balance):
          <input type="text" name="medRate" required onInput={this.myInputHandler}/>
        </label>
        <label>
          HighRate % (5000+ of balance):
          <input type="text" name="highRate" required onInput={this.myInputHandler}/>          
        </label>
        <input type="submit" value="Calculate Interest" />
      </form>
      <h1>Interest: {this.state.result}</h1>
      </div>      
    );
  }
}

export default App;
