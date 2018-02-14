var SummaryView = function (container, model){
  model.addObserver(this);
  this.btnBack = container.find("#summaryButtonBack");
  var summaryDishes = container.find("#summaryDishes");
  var summaryGuestNumber = container.find("#summaryGuestNumber");
  var chosenDishes;


  var tempDish;
  var row;

  var loadSummary = function(){
    summaryGuestNumber.html("My Dinner: " + model.getNumberOfGuests() + " people");
    chosenDishes = model.getChosenDishes();
    for (i in chosenDishes){
      tempDish = chosenDishes[i];
      summaryDishes.append($("<div>").attr("class","row").attr("id", "summaryRow"+i));

      row = container.find("#summaryRow"+i);
      row.append($("<div>").attr("class", "col-2").append($("<img>").attr("src", "images/" + tempDish.image)));
      row.append($("<div>").attr("class", "col-4").append("<h3>"+ tempDish.name+ "</h3>").append(tempDish.description));
      row.append($("<div>").attr("class", "col-4").append("<h3>Preparation</h3>").append(tempDish.description));
    }
  }

  var clearSummary = function(){
    chosenDishes = model.getChosenDishes();
    for (i in chosenDishes){
      row = container.find("#summaryRow"+i);
      row.remove();
    }
  }

  loadSummary();




  //update from event
  this.update = function(obj) {
    switch (obj) {
      case "menuChanged":
        clearSummary();
        loadSummary();
        break;
      case "nrGuests":
         //alert("lewat");
         summaryGuestNumber.html("My Dinner: " + model.getNumberOfGuests() + " people");
        break;
      default:
    }
  }

}
