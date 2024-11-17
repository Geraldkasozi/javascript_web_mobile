/*Write a function CalculateProfit that accepts the selling price , cost price, and number of units sold,
and returns the profit for the small business selling products like maize flour*/

function calculateProfit(sellingPrice, CostPrice, unitsSold){
    let profit = 0
    profit = (sellingPrice * unitsSold) - (CostPrice * unitsSold)
    return profit
   }
   console.log(calculateProfit(300, 200, 3))
