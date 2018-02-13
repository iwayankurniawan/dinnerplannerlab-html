var OverviewView = function (container, model){
  //Dish View selected in Full Recipe
  this.btnBack = container.find("#overviewButtonBack");
  var dishItemSelected = container.find("#dishItemSelected");
  var tempDishSelected;
  var chosenDishes = model.getChosenDishes();

  for (j=0;j<chosenDishes.length;j++){
    tempDishSelected = chosenDishes[j];
    var dishList= dishItemSelected.append($("<div>").attr("id","dishSelected"+j).attr("class","col"));
    $("#dishSelected"+j).append($("<div>").attr("id",j)
    .append($("<a>").attr("href","#")
    .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDishSelected.image))));
    $("#dishSelected"+j).append($("<div>")
    .append($("<p>").html(tempDishSelected.name)));
  }

  //Dish Price in Full Recipe
  var priceItemSelected = $("#dishesPrice");
  var tempPriceDishSelected;
  var totalPrice=0;

  for (k=0;k<chosenDishes.length;k++){
    tempPriceDishSelected = model.getTotalMenuPrice(chosenDishes[k].id);
    priceItemSelected.append($("<div>").attr("id","dishPrice"+j).attr("class","col").html(tempPriceDishSelected + " SEK"));
    totalPrice = totalPrice + tempPriceDishSelected;
  }

  //Total Price in Full Recipe
  var totalPriceSelected = $("#totalPriceSelected");
  totalPriceSelected.html("Total "+"<br>"+totalPrice + " SEK");

  //Show Number of Guest in Full Recipe
  var myDinnerNumberofGuest = $("#myDinner");
  myDinnerNumberofGuest.html("My Dinner: "+model.getNumberOfGuests()+" people");
}
