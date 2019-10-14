import React, { Component } from 'react';
import Stock from '../components/Stock'
// import slapStock from '../components/Stock'


const PortfolioContainer = ({ stocks }) => {

  const slapStocks = () => {
    console.log(stocks)
    return stocks.map(stock => {
      return <Stock stock={ stock }/>
    })
  }


  return (
    <div>
      <h2>My Portfolio</h2>
        {
          slapStocks()
        }
    </div>
  );


}

export default PortfolioContainer;
