/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    if (costs.length === 0 || coins <= 0) return 0;

    let maxCost = 0;
    for (const cost of costs) {
        if (cost > maxCost) maxCost = cost;
    }

    const count = new Array(maxCost + 1).fill(0);
    for (const cost of costs) {
        count[cost]++;
    }

    let ans = 0;

    for (let price = 1; price <= maxCost; price++) {
        if (count[price] === 0) continue;
        if (coins < price) break;

        const canBuy = Math.min(count[price], Math.floor(coins / price));
        ans += canBuy;
        coins -= canBuy * price;
    }

    return ans;
};