var SideBarView = function (container, model) {
//Mobile Version
  var mobileVersion = function (){
  var numberOfGuestsButton =  container.find("#numberOfGuestsButton");
  numberOfGuestsButton.append($("<p>").attr("class","mx-2").html("people"));
  numberOfGuestsButton.append($("<button>").attr("id","minusGuest").attr("class","btn btn-secondary mx-1").html("+"));
  numberOfGuestsButton.append($("<div>").attr("id","numberOfGuests"));
  numberOfGuestsButton.append($("<button>").attr("id","plusGuest").attr("class","btn btn-secondary mx-1").html("-"));

  var numberOfGuests = container.find("#numberOfGuests");
  numberOfGuests.html(model.getNumberOfGuests);

  var dishAndCostLabel =container.find("#dishAndCostLabel");
  dishAndCostLabel.append($("<p>").attr("class","col").attr("style","text-align:left;").html("Dish Name"));
  dishAndCostLabel.append($("<p>").attr("class","col").attr("style","text-align:right;").html("Cost"));

  var dishAndCost = container.find("#dishAndCost");
  var dishAndCostj;
  var k=0;
  var totalPriceside = 0;
  var chosenDishes = model.getChosenDishes();

  for(j in chosenDishes){
    dishAndCost.append($("<div>").attr("id","dishAndCost"+j).attr("class","row").attr("style","width:100%"));
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

//Desktop Version
var desktopVersion = function (){
var numberOfGuestsButton =  container.find("#numberOfGuestsButton1");
numberOfGuestsButton.append($("<p>").attr("class","mx-2").html("people"));
numberOfGuestsButton.append($("<button>").attr("id","minusGuest").attr("class","btn btn-secondary mx-1").html("+"));
numberOfGuestsButton.append($("<div>").attr("id","numberOfGuests1"));
numberOfGuestsButton.append($("<button>").attr("id","plusGuest").attr("class","btn btn-secondary mx-1").html("-"));

var numberOfGuests = container.find("#numberOfGuests1");
numberOfGuests.html(model.getNumberOfGuests);

var dishAndCostLabel =container.find("#dishAndCostLabel1");
dishAndCostLabel.append($("<p>").attr("class","col").attr("style","text-align:left;").html("Dish Name"));
dishAndCostLabel.append($("<p>").attr("class","col").attr("style","text-align:right;").html("Cost"));

var dishAndCost = container.find("#dishAndCostj");
var dishAndCostj;
var k=0;
var totalPriceside = 0;
var chosenDishes = model.getChosenDishes();

for(j in chosenDishes){

  dishAndCost.append($("<div>").attr("id","dishAndCostj"+j).attr("class","row").attr("style","width:100%;"));
  tempDishSelected = chosenDishes[j];
  tempPriceDishSelected = model.getTotalMenuPrice(tempDishSelected.id);
  dishAndCostj = container.find("#dishAndCostj"+k);
  dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:left;").html(tempDishSelected.name));
  dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:right;").html(tempPriceDishSelected+" SEK"));
  k=k+1;
  totalPriceside=totalPriceside+tempPriceDishSelected;
}

var totalPriceSelected = $("#totalPriceSideBar1");
totalPriceSelected.attr("style","text-align:right;").html(totalPriceside + " SEK");
}

mobileVersion();
desktopVersion();
}
