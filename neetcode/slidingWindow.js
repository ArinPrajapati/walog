// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = (price) => {
  let l = 0; // left = buy
  let r = 1; // right = sell
  maxP = 0;

  while (r < price.length) {
    if (price[l] < price[r]) {
      let profit = price[r] - price[l];
      maxP = Math.max(maxP, profit);
    } else {
        1 += r;
    }
    r += 1
  }
};
