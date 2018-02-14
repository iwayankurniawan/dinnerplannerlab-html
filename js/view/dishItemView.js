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
        var dishList= dishItem.append($("<div>").attr("id","dish"+i).attr("class","col-sm-2"));
        container.find("#dish"+i).append($("<div>")
                    .append($("<a>").attr("href","#")
                      .append($("<img>").attr("class","img-responsive").attr("src","images/"+tempDish.image).attr("id",tempDish.id))));

          container.find("#dish"+i).append($("<div>")
                    .append($("<p>").html(tempDish.name)));
                    this.dishClick.push(container.find("#" + tempDish.id));
     }

// this.dishClick.push(container.find("#200"));

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
