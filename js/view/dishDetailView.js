var DishDetailView = function (container, model){

  this.btnBack = container.find("#dishDetailButtonBack");
  this.btnAdd = container.find("#dishDetailButtonAdd");

  model.setNumberOfGuests(3);
  var numberOfGuests = model.getNumberOfGuests();

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
        dishName.html(dish.name);
        dishImage.src = "images/" + dish.image;
        dishDescription.html(dish.description);

        dishIngredientCount = dish.ingredients.length;

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

        dishTotalPrice.html(model.getTotalMenuPrice(dishId));

        //alert("pertama " + dishId);
      }

  }



  //initial load
  loadDish();

  var removeSummaryRow = function(){
    //alert("jumlah nye " + dishIngredientCount);
    for (i in dish.ingredients){
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
      default:

    }
    //alert("lewat bos, id nya segene neh " + model.getDefaultDishId());
    //loadDish();
  }
}
