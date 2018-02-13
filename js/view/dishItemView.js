var DishItemView = function (container, model){

  model.addObserver(this);

    this.dishClick=[];
    var dishItem = container;
    //var dishItem = $("#dishItemView");

    // var dishView = model.getFullMenu();

    var dishView = model.getSelectedDish(model.getFilterType());
    // var dishView = model.getAllDishes();
    var tempDish;



    //Dish View in Choose Menu Page HTML

    for (i=0;i<dishView.length;i++){
        tempDish = dishView[i];
        var dishList= dishItem.append($("<div>").attr("id","dish"+i).attr("class","col"));
        container.find("#dish"+i).append($("<div>")
                    .append($("<a>").attr("href","#")
                      .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDish.image).attr("id",tempDish.id))));

          container.find("#dish"+i).append($("<div>")
                    .append($("<p>").html(tempDish.name)));
                    this.dishClick.push(container.find("#" + tempDish.id));
     }

// this.dishClick.push(container.find("#200"));

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


    this.update = function(obj) {
      switch (obj) {
        case "search":
        for (m=0;m<model.getFullMenu().length;m++){
          var removeDish =container.find("#dish"+m);
          removeDish.remove();
        }

        var dishView1 = model.getAllDishes(model.getFilterType(),model.getFilter());
        var tempDish1;
        //Dish View in Choose Menu Page HTML
        // for (l=0;l<dishView1.length;l++){
        //     tempDish1 = dishView1[l];
        //     var dishList= dishItem.append($("<div>").attr("id","dish"+l).attr("class","col"));
        //     container.find("#dish"+l).append($("<div>").attr("id",l)
        //                 .append($("<a>").attr("href","#")
        //                   .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDish1.image))));
        //       container.find("#dish"+l).append($("<div>")
        //                 .append($("<p>").html(tempDish1.name)));
        //  }

        for (l=0;l<dishView1.length;l++){
            tempDish1 = dishView1[l];
            var dishList= dishItem.append($("<div>").attr("id","dish"+l).attr("class","col"));
            container.find("#dish"+l).append($("<div>")
                        .append($("<a>").attr("href","")
                          .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDish1.image).attr("id",tempDish1.id))));
              container.find("#dish"+l).append($("<div>")
                        .append($("<p>").html(tempDish1.name)));
              // this.dishClick.push(container.find("#" + tempDish1.id));
         }
          break;
        default:
      }
    }
  }
