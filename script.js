function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost = 0;

    while (arr.length > 1) {
        // Sort the array to get the two smallest ropes
        arr.sort((a, b) => a - b);

        // Pick the two smallest
        let first = arr.shift();
        let second = arr.shift();

        // Calculate cost and add to total
        let cost = first + second;
        totalCost += cost;

        // Push the combined rope back to the array
        arr.push(cost);
	}
    return totalCost;
}

module.exports=mincost;
