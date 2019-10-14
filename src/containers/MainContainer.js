import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const url = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    purchased: []
  }

  handlePurchase = (stock) => {
    this.setState({
      purchased: [...this.state.purchased, stock]
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={ this.state.stocks }
                handlePurchase={ this.handlePurchase }
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={ this.state.purchased }
              />

            </div>
          </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(stockArr => {
      this.setState({
        stocks: stockArr
      })
    })
  }




}

export default MainContainer;
