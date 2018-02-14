var OverviewView = function (container, model){
  model.addObserver(this);
  //Dish View selected in Full Recipe
  this.btnBack = container.find("#overviewButtonBack");
  this.btnNext = container.find("#printFullRecipe");
  var dishItemSelected = container.find("#dishItemSelected");
  var tempDishSelected;


  var showChosenDishes = function(){
    var chosenDishes = model.getChosenDishes();
    for (j=0;j<chosenDishes.length;j++){
      tempDishSelected = chosenDishes[j];
      var dishList= dishItemSelected.append($("<div>").attr("id","dishSelected"+j).attr("class","col"));
      container.find("#dishSelected"+j).append($("<div>").attr("id",j)
      .append($("<a>").attr("href","#")
      .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDishSelected.image))));
      container.find("#dishSelected"+j).append($("<div>")
      .append($("<p>").html(tempDishSelected.name)));
    }
}
  //Dish Price in Full Recipe
  var priceItemSelected = container.find("#dishesPrice");
  var tempPriceDishSelected;
  var totalPrice=0;

  var showTotalDishesPrice = function (){
    var chosenDishes = model.getChosenDishes();
    for (k=0;k<chosenDishes.length;k++){
      tempPriceDishSelected = model.getTotalMenuPrice(chosenDishes[k].id);
      priceItemSelected.append($("<div style='border:1px solid;'>").attr("id","dishPrice"+k).attr("class","col").html(tempPriceDishSelected + " SEK"));
      totalPrice = (totalPrice + tempPriceDishSelected);
      //alert("wow wow " + priceItemSelected.children.length);
  }

  //Total Price in Full Recipe
  var totalPriceSelected = container.find("#totalPriceSelected");
  totalPriceSelected.html("Total "+"<br>"+totalPrice + " SEK");
}

var showNumberOfGuests =function(){
  //Show Number of Guest in Full Recipe
  var myDinnerNumberofGuest = container.find("#myDinner");
  myDinnerNumberofGuest.html("My Dinner: "+model.getNumberOfGuests()+" people");
}

var removeDishes = function(){
  var chosenDishes = model.getChosenDishes();
  for (j=0;j<chosenDishes.length;j++){
    container.find("#dishSelected"+j).remove();
  }
}

var removePrice = function(){
  var chosenDishes = model.getChosenDishes();

  for (j=0;j<chosenDishes.length;j++){
    var dishPrice = container.find("#dishPrice"+j);
    //  alert(dishPrice.html());
    dishPrice.remove();

  }

  totalPrice = 0;
}

//initial step
showChosenDishes();
showTotalDishesPrice();
showNumberOfGuests();

  //update from event
  this.update = function(obj) {
    switch (obj) {
      case "menuChanged":
        removeDishes();
        removePrice();
        showChosenDishes();
        showTotalDishesPrice();
        break;
      case "totalPrice":

        break;
      case "nrGuests":
        showNumberOfGuests();
        removePrice();
        showTotalDishesPrice();
        break;
      default:
    }
  }
}
