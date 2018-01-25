var SideBarView = function (container, model) {

  var numberOfGuests = container.find("#numberOfGuests");
  numberOfGuests.html(model.getNumberOfGuests);


  var dishAndCost = container.find("#dishAndCost");
  var dishAndCostj;
  var k=0;
  var totalPriceside = 0;

  for(j in model.chosenDishes){

    dishAndCost.append($("<div>").attr("id","dishAndCost"+j).attr("class","row"));
    tempDishSelected = model.getDish(model.chosenDishes[j]);
    tempPriceDishSelected = model.getTotalMenuPrice(model.chosenDishes[j]);
    dishAndCostj = container.find("#dishAndCost"+k);
    dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:left;").html(tempDishSelected.name));
    dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:right;").html(tempPriceDishSelected+" SEK"));
    k=k+1;
    totalPriceside=totalPriceside+tempPriceDishSelected;
  }

  var totalPriceSelected = $("#totalPriceSideBar");
  totalPriceSelected.attr("style","text-align:right;").html(totalPriceside + " SEK");

}
