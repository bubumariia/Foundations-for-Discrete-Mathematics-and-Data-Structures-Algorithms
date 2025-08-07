var maxProfit = function(prices) {
    let priceToBuy = prices[0]
    let profit = 0
    
    for(let i=1; i<prices.length; i++){
        if(prices[i] < priceToBuy){
            priceToBuy = prices[i]
        }else if(prices[i] - priceToBuy > profit){
          profit = prices[i] - priceToBuy
        }
    }
  return profit
};