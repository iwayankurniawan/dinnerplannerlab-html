var SummaryView = function (container, model){

  var summaryDishes = container.find("#summaryDishes");
  var summaryGuestNumber = container.find("#summaryGuestNumber");
  var chosenDishes = model.getChosenDishes();

  var tempDish;
  var row;

  summaryGuestNumber.html("My Dinner: " + model.getNumberOfGuests() + " people");

  for (i in chosenDishes){
    tempDish = chosenDishes[i];
    summaryDishes.append($("<div>").attr("class","row").attr("id", "summaryRow"+i));


    row = container.find("#summaryRow"+i);
    row.append($("<div>").attr("class", "col").append($("<img>").attr("src", "images/" + tempDish.image)));
    row.append($("<div>").attr("class", "col").append(tempDish.description));
    row.append($("<div>").attr("class", "col").append(tempDish.description));

    // var dishList= dishItem.append($("<div>").attr("id","dish"+i).attr("class","col"));
    // $("#dish"+i).append($("<div>").attr("id",i)
    //             .append($("<a>").attr("href","#")
    //               .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDish.image))));
    //   $("#dish"+i).append($("<div>")
    //             .append($("<p>").html(tempDish.name)));
  }


}
