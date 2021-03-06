var DinnerModel = function() {


	var numberOfGuests = 1;
	var dishType;
	var dishFilter;
	var chosenDishes = [];
	var defaultDish = 100;
	var observers = [];

	var defaultUrl ='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=10&tags='

	var notifyObservers = function(obj) {
		$.each(observers, function(index, observer){
			observer.update(obj);
		});
	}

	this.addObserver = function(observer) {
		observers.push(observer);
	}


	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

	this.setFilterType = function(type,filter){
		dishType=type;
		dishFilter=filter;
		notifyObservers("search");
	}

	this.getFilterType = function() {
		return dishType;
	}

	this.getFilter = function() {
		return dishFilter;
	}


	this.setNumberOfGuests = function(num) {
		//TODO Lab 1
		numberOfGuests = num;
		notifyObservers("nrGuests");
	}

	this.getNumberOfGuests = function() {
		//TODO Lab 1
		return numberOfGuests;
	}

	this.setCurrentDish = function(dishId) {
		//TODO Lab 1
		defaultDish = dishId;
		notifyObservers("detailDish");
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		return this.getAllDishes(type);
		//pasti ini buat filter out kaaan
	}

	this.getChosenDishes = function() {
		var allSelectedDishes = new Array();
		var currentDish;

		for (i in chosenDishes) {
			currentDish = this.getDish(chosenDishes[i]);
			if (currentDish != -1) {
				allSelectedDishes.push(currentDish);
			}
		}
		return allSelectedDishes;
		notifyObservers("chosenDishes");
	}

	this.getDefaultDishId = function() {

		return defaultDish;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return this.getAllDishes();
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function(dishId) {
		//TODO Lab 1

		//get all dishes
		var allDishes;
		var arrDishes = new Array();

		if (dishId) {
			allDishes = this.getDish(dishId);
			arrDishes.push(allDishes);
		}
		else {
			arrDishes = this.getAllDishes1();
		}

		var allIngridients = new Array();
		var tempDish;
		var tempIngredient;
		var alertShown = false;

		//loop all dishes
		for (i in arrDishes) {
			tempDish = arrDishes[i];

			for (j in tempDish.extendedIngredients) {
				tempIngredient = tempDish.extendedIngredients[j];

				//for debugging only
				// if (!alertShown){
				// alert(tempIngredient.price);
				// alertShown = true;
				// }

				allIngridients.push(tempIngredient);
			}
		}

		return allIngridients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function(dishId) {
		//TODO Lab 1
		var totalPrice = 0;
		//var totalGuests = numberOfGuests;
		var tempIngredient;
		var alertShown = false;

		//loop all ingridients
		var arrIngredients;


		if (dishId) {
			arrIngredients = this.getAllIngredients(dishId);

		}
		else {
			arrIngredients = this.getAllIngredients();
		}

		for (i in arrIngredients){
			tempIngredient = arrIngredients[i];

			//for debugging only
			// if (!alertShown){
			// alert(numberOfGuests);
			// alertShown = true;
			// }

			totalPrice += (tempIngredient.amount * numberOfGuests);
		}

		return totalPrice;
		notifyObservers("totalPrice");
	}



	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 1

		chosenDishes.push(id);
		notifyObservers("tester");
		notifyObservers("menuChanged");
		//alert(chosenDishes.length);
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 1

		var tempDish;

		for (i in dishes) {
			tempDish = dishes[i];
			if (tempDish.id === id) {
				dishes.splice(i, 1);
			}
		}

	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned


	//function that returns a dish of specific ID
	this.getDish = function (id) {
		for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
		return -1;

	}

	this.getAllDishes = function (type,filter) {
		return dishes.filter(function(dish) {
			var found = true;
			if(filter){
				found = false;
				dish.ingredients.forEach(function(ingredient) {
					if(ingredient.name.indexOf(filter)!=-1) {
						found = true;
					}
				});
				if(dish.name.indexOf(filter) != -1)
				{
					found = true;
				}
			}

			if (type) {
				return dish.type == type && found;
			}
			else {
				return found;
			}


		});
	}

	this.getAllDishes1 = function (type, filter, callback, errorCallback) {
		var typeUrl;
		if(filter != undefined){
        typeUrl = defaultUrl + type + "," +filter ;
        console.log(typeUrl);
      }else if(type != undefined){
        typeUrl = defaultUrl + "," + type;
      }else {
      	typeUrl=defaultUrl;
      }
	 $.ajax( {
	 url: typeUrl,
   headers: {
     'X-Mashape-key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
   },

   success: function(data) {
		 dishes.push.apply(dishes, data.recipes);
		 console.log(dishes);
     callback(data.recipes)
   },
   error: function(error) {
     errorCallback(error)
   }
 });
}
	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.

	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
		},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
		},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
		},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
		},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
		}]
	},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
		},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
		},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
		}]
	},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
		},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
		},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
		}]
	},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
		},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
		},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
		},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
		},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
		},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
		},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
		},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
		},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
		},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
		},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
		}]
	},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
		},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
		},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
		}]
	},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
		},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
		},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
		}]
	},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
		},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
		},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
		}]
	},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
		}]
	},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
		}]
	},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
		}]
	}
];


}
