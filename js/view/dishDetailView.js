var DishDetailView = function (container, model){

  this.btnBack = container.find("#dishDetailButtonBack");
  this.btnAdd = container.find("#dishDetailButtonAdd");

  var dishName = container.find("#dishDetailName");
  var dishImage = document.getElementById("dishDetailImage");
  var dishDescription = container.find("#dishDetailDescription");
  var dishGuestNumber = container.find("#dishDetailGuestNumber");
  var dishIngredients = container.find("#dishDetailIngredients");
  var dishTotalPrice = container.find("#dishDetailTotalPrice");

  model.addObserver(this);
  //var dishId = 1;

  var dishId = model.getDefaultDishId();
  var dish = model.getDish(dishId);
  //var listIngredients;
  var ingredient;
  var row;
  var dishIngredientCount = 0;

  var loadDish = function(){
      //alert("dish has been loaded with " + dishId );
      dishId = model.getDefaultDishId();
      dish = model.getDish(dishId);

      //if found, then display it
      if (dish != -1) {
        //dish info
        dishName.html(dish.title);
        dishImage.src = dish.image;
        dishDescription.html(dish.instructions);


        //ingredients info
        dishGuestNumber.html("Ingredients for " + model.getNumberOfGuests() + " people");

        //loop for dish Ingredients
        for (i in dish.extendedIngredients){
          ingredient = dish.extendedIngredients[i];

          dishIngredients.append($("<div>").attr("class", "row").attr("id", "summaryRow" + i));
          row = container.find("#summaryRow"+i);

          row.append($("<div>").attr("class", "col").append(ingredient.amount + " " + ingredient.unit));
          row.append($("<div>").attr("class", "col").append(ingredient.name));
          row.append($("<div>").attr("class", "col").append("SEK " + ingredient.amount ));
        }
        dishTotalPrice.html(model.getTotalMenuPrice(dishId));

      }

  }


  //initial load
  loadDish();

  var removeSummaryRow = function(){
    for (i in dish.extendedIngredients){
      row = container.find("#summaryRow"+i);
      row.remove();
    }
  }

  //update from event
  this.update = function(obj) {
    switch (obj) {
      case "detailDish":
        //remove ingredients (because it use append)
        removeSummaryRow();
        loadDish();
        break;
      case "nrGuests":
        dishTotalPrice.html(model.getTotalMenuPrice(dishId));
        dishGuestNumber.html("Ingredients for " + model.getNumberOfGuests() + " people");
        break;
      default:

    }
  }
}
