var SideBarView = function (container, model) {

  model.addObserver(this);

//Mobile Version
  var mobileVersion = function (){
  var numberOfGuestsButton =  container.find("#numberOfGuestsButton");
  numberOfGuestsButton.append($("<p>").attr("class","mx-2").html("people"));
  numberOfGuestsButton.append($("<button>").attr("id","minusGuest").attr("class","btn btn-secondary mx-1").html("+"));
  numberOfGuestsButton.append($("<div>").attr("id","numberOfGuests"));
  numberOfGuestsButton.append($("<button>").attr("id","plusGuest").attr("class","btn btn-secondary mx-1").html("-"));

  this.minusGuest = container.find("#minusGuest");
  this.plusGuest = container.find("#plusGuest");

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
    dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:left;").html(tempDishSelected.title));
    dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:right;").html(tempPriceDishSelected+" SEK"));
    k=k+1;
    totalPriceside=totalPriceside+tempPriceDishSelected;
  }

  var totalPriceSelected = container.find("#totalPriceSideBar");
  totalPriceSelected.attr("style","text-align:right;").html(totalPriceside + " SEK");
}

//Desktop Version
var desktopVersion = function (){
var numberOfGuestsButton =  container.find("#numberOfGuestsButton1");
numberOfGuestsButton.append($("<p>").attr("class","mx-2").html("people"));
numberOfGuestsButton.append($("<button>").attr("id","plusGuest1").attr("class","btn btn-secondary mx-1").html("+"));
numberOfGuestsButton.append($("<div>").attr("id","numberOfGuests1"));
numberOfGuestsButton.append($("<button>").attr("id","minusGuest1").attr("class","btn btn-secondary mx-1").html("-"));

this.minusGuest1 = container.find("#minusGuest1");
this.plusGuest1 = container.find("#plusGuest1");
this.createDinner = container.find("#confirmDinner1");

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
  dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:left;").html(tempDishSelected.title));
  dishAndCostj.append($("<div>").attr("id","cost"+k).attr("class","col").attr("style","text-align:right;").html(tempPriceDishSelected+" SEK"));
  k=k+1;
  totalPriceside=totalPriceside+tempPriceDishSelected;
}

var totalPriceSelected = container.find("#totalPriceSideBar1");
totalPriceSelected.attr("style","text-align:right;").html(totalPriceside + " SEK");
}

mobileVersion();
desktopVersion();

// Update each sidebar button depending on what type of dish was added.
this.update = function(obj) {
  switch (obj) {
    case "nrGuests":
      var numberOfGuests = container.find("#numberOfGuests1");
      var totalPriceside2 = 0;
      numberOfGuests.html(model.getNumberOfGuests);
      for(l in model.getChosenDishes()){
          var chosenDishes2 = model.getChosenDishes();
          tempDishSelected2 = chosenDishes2[l];
          tempPriceDishSelected2 = model.getTotalMenuPrice(tempDishSelected2.id);
          var cost = container.find("#cost"+l);
          cost.html(tempPriceDishSelected2+" SEK");
          totalPriceside2=totalPriceside2+tempPriceDishSelected2;
      }
      var totalPriceSelected = container.find("#totalPriceSideBar1");
      totalPriceSelected.html(totalPriceside2 + " SEK");
      break;
    case "tester":

    var dishAndCost = container.find("#dishAndCostj");
    var dishAndCostj;
    var k=0;
    var totalPriceside = 0;
    var chosenDishes = model.getChosenDishes();

    for(l in chosenDishes){
      container.find("#dishAndCostj"+l).remove();
    }

    for(j in chosenDishes){

      dishAndCost.append($("<div>").attr("id","dishAndCostj"+j).attr("class","row").attr("style","width:100%;"));
      tempDishSelected = chosenDishes[j];
      tempPriceDishSelected = model.getTotalMenuPrice(tempDishSelected.id);
      dishAndCostj = container.find("#dishAndCostj"+k);
      dishAndCostj.append($("<div>").attr("class","col").attr("style","text-align:left;").html(tempDishSelected.title));
      dishAndCostj.append($("<div>").attr("id","cost"+k).attr("class","col").attr("style","text-align:right;").html(tempPriceDishSelected+" SEK"));
      k=k+1;
      totalPriceside=totalPriceside+tempPriceDishSelected;
    }

    var totalPriceSelected = container.find("#totalPriceSideBar1");
    totalPriceSelected.attr("style","text-align:right;").html(totalPriceside + " SEK");

      break;
    default:
  }
}

}
