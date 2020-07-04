import React, { Component } from "react";
 
class Transactions extends Component {
    
    constructor(props) {
        super(props);
        this.state = {transactions: [] };
    }

    componentDidMount() {
        fetch('http://localhost:8080/interest-results/all')
            .then(response => response.json())
            .then(data => this.setState({ transactions: data }));
      }
    
      render() {
        return (
          <div className="App">
            <h1>Recent Transactions</h1>
            <table id="results">
                <tr><th>Balance</th><th>LowRate</th><th>MedRate</th><th>HighRate</th><th>Interest</th></tr>
              {this.state.transactions.map(tran => (
                <tr>
                    <td>{tran.balance}</td>
                    <td>{tran.lowRate}</td>
                    <td>{tran.medRate}</td>
                    <td>{tran.highRate}</td>
                    <td>{tran.interest}</td>
                </tr>
              ))}
            </table>
            </div>
        );
      }
    }

export default Transactions;