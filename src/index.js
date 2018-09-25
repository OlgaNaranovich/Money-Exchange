// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

	const coins = {};
	if (currency <= 0) {
		return coins;
	} else if (currency > 10000) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else {
		const num = {"H": 50,"Q": 25,"D": 10,"N": 5,"P": 1};
			
		 	for (let i in num) {
			let val = Math.floor(currency / num[i]);
			if (val > 0) {
				coins[i] = val;
				if (currency % num[i] != 0){
					currency = currency - val * num[i];
					continue;
				} break;
			} 
		} return coins;
	} 
}
