describe("When looping in JavaScript", function(){
	
	

	it("you can use a traditional for loop", function(){
		const numbers = [12,13,56,87,12,54,76];
		let totalAmount = 0;
		// use a traditional for loop to calculate the total;
for (var i=0;i<numbers.length;i++){
	totalAmount += numbers[i];
}
		// remove this assert after you create the loop
		assert.ok(true, "Use a traditional loop to calculate the total");
		assert.equal(310, totalAmount)

	});

	it("you can use a forEach loop", function(){
		const numbers = [23,13,6,37,2,45,98];
		let totalAmount = 0;
		// use a traditional for loop to calculate a total;
//numbers.forEach(e => {totalAmount += e

numbers.forEach(function(val){return totalAmount+=val
	
});
		// remove this after your loop is working
		// assert.ok(null, "Use a forEach loop to calculate the total");
		assert.equal(224, totalAmount)
	});


	it("you can use a 'for of' loop", function(){
		const numbers = [65,90,51,67,82,34,54,39];
		let totalAmount = 0;
		// use a for of loop to calculate a total;


		for (const i of numbers) {
			totalAmount += i
		}
		// remove the assert if the loop is working
		assert.ok(true, "Use a for of loop to calculate the total");

		assert.equal(482, totalAmount)
	});

});