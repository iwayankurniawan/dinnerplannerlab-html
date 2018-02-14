var DishDetailView = function (container, model){
<<<<<<< HEAD
  model.addObserver(this);
=======

  this.btnBack = container.find("#dishDetailButtonBack");
>>>>>>> c9be321f7cae2fa01de3843ea4ab131ee84e13f3
  model.setNumberOfGuests(3);
  var numberOfGuests = model.getNumberOfGuests();

  var dishName = container.find("#dishDetailName");
  var dishImage = document.getElementById("dishDetailImage");
  var dishDescription = container.find("#dishDetailDescription");
  var dishGuestNumber = container.find("#dishDetailGuestNumber");
  var dishIngredients = container.find("#dishDetailIngredients");
  var dishTotalPrice = container.find("#dishDetailTotalPrice");

  //var dishId = 1;

  var dish = model.getDish(model.getDefaultDishId());
  var listIngredients;
  var ingredient;
  var row;
  //if found, then display it
  if (dish != -1) {
    //dish info
    dishName.html(dish.name);
    dishImage.src = "images/" + dish.image;
    dishDescription.html(dish.description);


    //ingredients info
    dishGuestNumber.html("Ingredients for " + numberOfGuests + " people");

    //loop for dish Ingredients
    for (i in dish.ingredients){
      ingredient = dish.ingredients[i];
      //listIngredients += "<li>" + ingredient.name + " SEK" + ingredient.price + "</li>";

      dishIngredients.append($("<div>").attr("class", "row").attr("id", "summaryRow" + i));
      row = container.find("#summaryRow"+i);

      row.append($("<div>").attr("class", "col-2").append(ingredient.quantity + " " + ingredient.unit));
      row.append($("<div>").attr("class", "col-5").append(ingredient.name));
      row.append($("<div>").attr("class", "col-1").append("SEK"));
      row.append($("<div>").attr("class", "col-2").append(ingredient.price));
    }
    //dishIngredients.html(listIngredients);

    dishTotalPrice.html(model.getTotalMenuPrice(model.getDefaultDishId()));
  }


  //update from event
  this.update = function(obj) {


  }
}
