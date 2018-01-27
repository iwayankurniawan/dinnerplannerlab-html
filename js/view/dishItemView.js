var DishItemView = function (container, model){
    var dishItem = $("#dishItem");
    //var dishItem = container.find("#dishItem");
    var dishView = model.getFullMenu();
    var tempDish;

//Dish View in Choose Menu Page HTML
    for (i=0;i<dishView.length;i++){
        tempDish = dishView[i];
        var dishList= dishItem.append($("<div>").attr("id","dish"+i).attr("class","col"));
        $("#dish"+i).append($("<div>").attr("id",i)
                    .append($("<a>").attr("href","#")
                      .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDish.image))));
          $("#dish"+i).append($("<div>")
                    .append($("<p>").html(tempDish.name)));
    }

//Dish View selected in Full Recipe
    var dishItemSelected = $("#dishItemSelected");
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
