import React from 'react';
import Stock from '../components/Stock'

// export const slapStocks = (stocksArr) => {
//   return stocksArr.map(stock => {
//     return <Stock stock={ stock }/>
//   })
// }


const StockContainer = ({ stocks, handlePurchase }) => {

  const slapStocks = () => {
    return stocks.map(stock => {
      return <Stock
                stock={ stock }
                handlePurchase={ handlePurchase }
                key={ `stock-${stock.id}`}
            />
    })
  }

  return (
    <div>
      <h2>Stocks</h2>
      {
        // console.log(stocks)
        slapStocks()
      }
    </div>
  );

}

export default StockContainer
