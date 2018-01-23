var DishDetailView = function (container, model){

  model.setNumberOfGuests(3);
  var numberOfGuests = model.getNumberOfGuests();

  var dishName = container.find("#dishDetailName");
  var dishImage = document.getElementById("dishDetailImage");
  var dishDescription = container.find("#dishDetailDescription");
  var dishGuestNumber = container.find("#dishDetailGuestNumber");
  var dishIngredients = container.find("#dishDetailIngredients");
  var dishTotalPrice = container.find("#dishDetailTotalPrice");

  var dishId = 100;
  var dish = model.getDish(dishId);
  var listIngredients;
  var ingredient;

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
      listIngredients += "<li>" + ingredient.name + " SEK" + ingredient.price + "</li>";
    }
    dishIngredients.html(listIngredients);

    dishTotalPrice.html("TOTAL SEK"+ model.getTotalMenuPrice());
  }


  // var dishName = container.find("#dishName");
  // dishName.html("menu name from model");
  //
  // var dishCost = container.find("#dishCost");
  // dishCost.html("menu price from model");
}
