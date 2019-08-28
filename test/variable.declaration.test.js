describe("When declaring variables in JavaScript", function() {
	
	// Object Literal in JavaScript is basic objects
	it("you can use var - which has function scope", function(){
		
		function declareUsingVar() {
			var vegetable = "carrot";
			// what is the value of vegetable
			assert.equal("carrot", vegetable);
		}

		declareUsingVar();

		// vegetable is not visible outside of the function
		try {
			console.log(vegetable)
		} catch(e) {
			// assert.ok just need true or ""
			console.log(e.stack)
			assert.ok(true, "vegetable doesn't exist")
		}

		var age = 23;
		if (age > 21) {
			var username = "mawandi";
			assert.equal("mawandi", username)
		}
		
		// username is visible here - as it has function scope
		assert.equal("mawandi", username)
	});

	it("you can use var - which has function scope even when defined in a block", function(){
		
		function checkVegetable(count) {
			if (count > 10) { // this is a block
				var vegetable = "carrot";
			} // block ends here 
			else {
				var vegetable = "potato";
			}
			
			// if count is bigger than 10 vegetable will be defined 
			if (count > 10) {
				assert.equal("carrot", vegetable);
			}

			if (count < 10) {
				assert.equal("potato", vegetable);
			}
		}

		checkVegetable(9);
		checkVegetable(10);

		// vegetable is not visible outside of the function
		try {
			console.log(vegetable)
		} catch {
			// assert.ok just need true or ""
			assert.ok(true, "vegetable doesn't exist")
		}

		var age = 23;
		if (age > 21) {
			var username = "mawandi";
			assert.equal("mawandi", username)
		}
		
		// username is visible here - as it has function scope
		assert.equal("mawandi", username)
	});

	it("you can use let - which has block scope", function(){
		
		function checkVegetable(count) {
			if (count > 10) { // this is a block
				let vegetable = "carrot";
				assert.equal("carrot", vegetable);
			} // block ends here 
			else { // this is a block
				let vegetable = "potato";
				assert.equal("potato", vegetable);
			} // this is a block
			
			// change code below this line

			// vegetable is not in scope it only 
			try {
				assert.equal(undefined, vegetable);
			} catch(err) {
				assert.ok(true, "vegetable is not visible in the function scope")
			}

			// change code above this line
		}

		checkVegetable(9);
		checkVegetable(10);

		// vegetable is not visible outside of the function
		try {
			console.log(vegetable)
		} catch {
			// assert.ok just need true or ""
			assert.ok(true, "vegetable doesn't exist outside of the function either")
		}

		var age = 23;
		if (age > 21) { // block scope start
			let username = "mawandi";
			assert.equal("mawandi", username)
		} //block scope end
		
		// username is not visible here - as it has block scope
		try {
			assert.equal(undefined, username)
		} catch {
			assert.ok(true, "username doesn't exist in the function as it's only visible in the block")
		}
	});

	it("you can use const - which can't change once set.", function(){
		
		function declareUsingConst() {
			const vegetable = "carrot";
			// const variables can be used as normal
			assert.equal("carrot", vegetable);
			try {
				vegetable = "beetroot";
			} catch (err) {
				// assert.ok just need true or ""
				assert.ok(true, "vegetable is a const and can't be changed")
			}
		}

		function constScope() {
			// const variables can be used as normal
			
			try {
				const vegetable = "carrot";
				assert.equal("carrot", vegetable);
				vegetable = "beetroot";
			} catch (err) {
				// assert.ok just need true or ""
				assert.ok(true, "vegetable is a const and can't be changed")
			}

			// vegetable is defined as const which also has block scope
			// surround this with a try catch block to catch the
			try {
			console.log(vegetable);	
		} catch (err) {
			assert.ok(true, "vegetable is only visible within block scope")
		}
		}

		declareUsingConst();
		constScope();

		// vegetable is not visible outside of the function
		try {
			console.log(vegetable)
		} catch {
			// assert.ok just need true or ""
			assert.ok(true, "vegetable doesn't exist")
		}

		const age = 23;
		// username is not visible here - as it has block scope
		try {
			age = 24;
		} catch {
			// assert.ok just need true or ""
			assert.ok(true, "age is a const and can't be changed")
		}
		// age can't be changed so it's value is still the same
		assert.equal(23, age);
	});
});