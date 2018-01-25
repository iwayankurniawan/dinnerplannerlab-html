var SideBarView = function (container, model) {

  var numberOfGuests = container.find("#numberOfGuests");
  numberOfGuests.html(model.getNumberOfGuests);


  var dishAndCost = container.find("#dishAndCost");
  var dishAndCostj;
  var k=0;
  var totalPriceside = 0;
  var chosenDishes = model.getChosenDishes();

  for(j in chosenDishes){

    dishAndCost.append($("<div>").attr("id","dishAndCost"+j).attr("class","row"));
    tempDishSelected = chosenDishes[j];
    tempPriceDishSelected = model.getTotalMenuPrice(tempDishSelected.id);
    dishAndCostj = container.find("#dishAndCost"+k);
    dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:left;").html(tempDishSelected.name));
    dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:right;").html(tempPriceDishSelected+" SEK"));
    k=k+1;
    totalPriceside=totalPriceside+tempPriceDishSelected;
  }

  var totalPriceSelected = $("#totalPriceSideBar");
  totalPriceSelected.attr("style","text-align:right;").html(totalPriceside + " SEK");

}
