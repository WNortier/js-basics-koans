describe("When using object literals in JavaScipt", function() {
	
	// Object Literal in JavaScript is basic objects

	it("know that objects can contain more that one field", function(){
		
		const apple = {
			color : "red",
			price : 4.25,
			flavour : "sweet"
		};

		assert.equal("red", apple.color);
		assert.equal("4.25", apple.price);
		assert.equal("sweet", apple.flavour);

	});

	it("know that object properties are accessible via bracket & dot notation", function(){
		
		const apple = {
			color : "red",
			price : 4.25,
			flavour : "sweet"
		};

		assert.equal("red", apple.color);
		assert.equal(4.25, apple.price);
		assert.equal("sweet", apple.flavour);

		assert.equal("red", apple["color"]);
		assert.equal(4.25, apple["price"]);
		assert.equal("sweet", apple["flavour"]);
	});

	it("know that object properties can be used together", function(){
		
		const applePurchase = {
			color : "red",
			price : 4.25,
			flavour : "sweet",
			quantity : 4
		};

		assert.equal(17, applePurchase.price * applePurchase.quantity);
	});

	it("know that object properties can be used in function inside the object", function(){
		
		const applePurchase = {
			color : "red",
			price : 4.25,
			flavour : "sweet",
			quantity : 4,
			totalPrice : function(){
				return this.price * this.quantity;
			}
		};
		assert.equal(17, applePurchase.totalPrice());
	});

	it("know that objects can added to a list", function(){
		const apples = [
			{
				color : "yellow",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "red",
				price : 4.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 4.25,
				flavour : "sweet"
			}
		];
		assert.equal(3, apples.length);
		assert.deepEqual([{
			color : "yellow",
			price : 3.65,
			flavour : "sour"
		}, {
			color : "red",
			price : 4.25,
			flavour : "sweet"
		},{
			color : "red",
			price : 4.25,
			flavour : "sweet"
		}], apples);
	});

	it("know that objects in a list can be access via indexes", function(){
		const apples = [
			{
				color : "yellow",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "red",
				price : 4.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 4.25,
				flavour : "sweet"
			}
		];
		
		assert.deepEqual({color : "red",
		price : 4.25,
		flavour : "sweet"}, apples[2]);
		assert.deepEqual({color : "yellow",
		price : 3.65,
		flavour : "sour"}, apples[0]);
		assert.deepEqual({color : "red",
		price : 4.25,
		flavour : "sweet"}, apples[1]);
	});

	it("know that objects properties in a list can be access via indexes", function(){
		const apples = [
			{
				color : "yellow",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "red",
				price : 4.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 2.15,
				flavour : "sweet"
			}
		];
		
		assert.deepEqual("red", apples[2].color);
		assert.deepEqual(3.65, apples[0].price);
		assert.deepEqual("sweet", apples[1].flavour);
		
	});

	it("know that you can loop over a list of objects and calculate something using properties of each object", function(){
		const apples = [
			{
				color : "yellow",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "red",
				price : 4.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 2.55,
				flavour : "sweet"
			},
			{
				color : "yellow",
				price : 3.95,
				flavour : "sour"
			}, {
				color : "red",
				price : 2.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 2.15,
				flavour : "sweet"
			}
		];
		
		let totalPrice = 0;
		// loop over the list here
		for (var i=0;i<apples.length;i++) {
			const currentApple = apples[i];
			// don't change anything above this line
			
			// calculate the total price of all apples in the list
			totalPrice += currentApple.price;
			// don't change anything below this line
		}
		assert.equal(18.80, totalPrice.toFixed(2))
		
	});

	it("know that you can loop over a list of objects and a property for an object that matches a certain condition", function(){
		const apples = [
			{
				color : "yellow",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "red",
				price : 4.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 2.55,
				flavour : "sweet"
			},
			{
				color : "yellow",
				price : 3.95,
				flavour : "sour"
			}, {
				color : "red",
				price : 2.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 2.15,
				flavour : "sweet"
			}
		];
		
		// find the color of the mostExpensive apple

		let totalPriceForRedApples = 0;
		// loop over the list here
		for (var i=0;i<apples.length;i++) {
			const currentApple = apples[i];
			// don't change anything above this line

			if (currentApple.color === "red"){
				totalPriceForRedApples += currentApple.price
			}
			// calculate the total price of all the red apples in the list
			
			// don't change anything below this line
		}
		assert.equal(11.20, totalPriceForRedApples.toFixed(2))
		
	});

	it("know that you can loop over a list of objects and find a unique list of values for a given object property", function(){
		const apples = [
			{
				color : "yellow",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "green",
				price : 4.25,
				flavour : "sweet"
			},{
				color : "yellow",
				price : 2.55,
				flavour : "sweet"
			},
			{
				color : "red",
				price : 3.95,
				flavour : "sour"
			}, {
				color : "green",
				price : 2.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 2.15,
				flavour : "sweet"
			}
		];
		
		let colors = [];
		// loop over the list here
		for (var i=0;i<apples.length;i++) {
			const currentApple = apples[i];
			// don't change anything above this line
			if (!colors.includes(currentApple.color)){
				colors.push(currentApple.color);
			}
			console.log(colors)

			// create a unique list of all the apple colors
			
			// don't change anything below this line
		}
		assert.deepEqual(["yellow", "green", "red"], colors)
		
	});

	it("know that you can loop over a list of objects and find out how many time a certain value property occurs in a propery of an object", function(){
		const apples = [
			{
				color : "red",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "green",
				price : 4.25,
				flavour : "sweet"
			},{
				color : "yellow",
				price : 2.55,
				flavour : "sweet"
			},
			{
				color : "red",
				price : 2.55,
				flavour : "sweet"
			},
			{
				color : "yellow",
				price : 2.55,
				flavour : "sweet"
			},
			{
				color : "red",
				price : 3.95,
				flavour : "sour"
			}, {
				color : "green",
				price : 2.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 2.15,
				flavour : "sweet"
			},{
				color : "yellow",
				price : 6.15,
				flavour : "sweet"
			}
		];
		
		let colorCount = {};
		// loop over the list here
		// colorCount.red = 0;
		// 	colorCount.green = 0;
		// 	colorCount.yellow = 0;
		
		for (var i=0;i<apples.length;i++) {
			const currentApple = apples[i];
			// don't change anything above this line

			// calculate how many of each color of apple there are

			
if (currentApple.color === "red"){
	if (colorCount.red === undefined){
		colorCount.red = 0
	}
	colorCount.red ++
}
else if (currentApple.color === "green"){
	if (colorCount.green === undefined){
		colorCount.green = 0
	}
	colorCount.green ++
}
else if (currentApple.color === "yellow"){
	if (colorCount.yellow === undefined){
		colorCount.yellow = 0
	}
	colorCount.yellow ++
}
			// don't change anything below this line
		}
		assert.deepEqual({ red: 4, green: 2, yellow: 3 }, colorCount);
		
	});

	it("know that you can loop over a list of objects and find all objects that match a condition", function(){
		const apples = [
			{
				color : "yellow",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "green",
				price : 4.25,
				flavour : "sweet"
			},{
				color : "yellow",
				price : 4.55,
				flavour : "sweet"
			},{
				color : "yellow",
				price : 7.55,
				flavour : "sweet"
			},
			{
				color : "red",
				price : 3.95,
				flavour : "sour"
			}, {
				color : "green",
				price : 2.25,
				flavour : "sweet"
			},{
				color : "red",
				price : 3.15,
				flavour : "sweet"
			}
		];
		
		const colorCount = [];
		// loop over the list here
		for (var i=0;i<apples.length;i++) {
			const currentApple = apples[i];
			// don't change anything above this line

			// find all the yellow apples cheaper than 5.00

if (currentApple.color === "yellow" && currentApple.price < 5.00){
	colorCount.push(apples[i]);
}


			// don't change anything below this line
		}

		const expectedResult = [
			{
				color : "yellow",
				price : 3.65,
				flavour : "sour"
			}, {
				color : "yellow",
				price : 4.55,
				flavour : "sweet"
			}
		];

		assert.deepEqual(expectedResult, colorCount);
		
	});

	
});